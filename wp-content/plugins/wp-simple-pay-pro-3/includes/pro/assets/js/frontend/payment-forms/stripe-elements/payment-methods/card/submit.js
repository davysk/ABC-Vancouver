/**
 * WordPress dependencies
 */
import { addQueryArgs } from '@wordpress/url';

/**
 * Internal dependencies.
 */
const { customers, subscriptions, paymentintents } = window.wpsp.api;

/** @typedef {import('@wpsimplepay/payment-forms').PaymentForm} PaymentForm */

/**
 * Creates a Subscription.
 *
 * @param {Object} paymentMethod
 * @param {string} paymentMethod.id PaymentMethod ID.
 * @param {Object} customerResponse Customer REST API response.
 * @param {PaymentForm} paymentForm
 */
export async function createSubscription(
	paymentMethod,
	customerResponse,
	paymentForm
) {
	const { nonce, customer } = customerResponse;
	const { stripeInstance: stripe } = paymentForm;

	return await subscriptions
		.create(
			{
				customer_id: customer.id,
				customer_nonce: nonce,
				payment_method_id: paymentMethod.id,
			},
			paymentForm
		)
		// Determine if a Payment requires a Customer action.
		.then( ( subscription ) => {
			const {
				status,
				latest_invoice: { payment_intent: paymentIntent },
				pending_setup_intent: setupIntent,
			} = subscription;

			if (
				// Subscription is already active, proceed.
				'active' === status ||
				// Subscription is trialing so no Intent exists because the
				// Card does not require immediate action.
				( 'trialing' === status && ! ( paymentIntent || setupIntent ) )
			) {
				return subscription;
			}

			// Determine next steps based on the Intent.
			const {
				status: intentStatus,
				client_secret: clientSecret,
				last_payment_error: intentError,
			} = setupIntent || paymentIntent;

			// Intent failure.
			if ( 'requires_payment_method' === intentStatus ) {
				throw {
					message: intentError.message,
				};
			}

			// Intent requires action.
			if ( 'requires_action' === intentStatus ) {
				const confirmFunc = setupIntent
					? 'confirmCardSetup'
					: 'confirmCardPayment';

				return stripe[ confirmFunc ]( clientSecret, {
					payment_method: paymentMethod.id,
				} ).then( ( { error: confirmError } ) => {
					if ( confirmError ) {
						throw confirmError;
					}
				} );
			}
		} );
}

/**
 * Creates a Payment.
 *
 * @param {Object | string} paymentMethod
 * @param {Object} customerResponse Customer REST API response.
 * @param {PaymentForm} paymentForm
 */
export async function createPayment(
	paymentMethod,
	customerResponse,
	paymentForm
) {
	const { nonce, customer } = customerResponse;
	const { stripeInstance: stripe } = paymentForm;

	return await paymentintents
		.create(
			{
				customer_id: customer.id,
				customer_nonce: nonce,
			},
			paymentForm
		)
		// Confirm the Payment Intent.
		.then( ( { client_secret: clientSecret } ) => {
			return stripe
				.confirmCardPayment( clientSecret, {
					payment_method: paymentMethod,
				} )
				.then( ( result ) => {
					if ( result.error ) {
						throw result.error;
					}

					return result;
				} );
		} );
}

/**
 * Submit the Card Payment Method.
 *
 * @param {PaymentForm} paymentForm
 */
async function submit( paymentForm ) {
	const {
		state,
		__unstableLegacyFormData,
		getOwnerData,
		stripeInstance: { elements },
		stripeInstance: stripe,
	} = paymentForm;
	const {
		stripeParams: { success_url: successUrlBase },
	} = __unstableLegacyFormData;
	const { isSubscription, isRecurring } = state;

	// Create a Customer.
	const customerResponse = await customers.create( {}, paymentForm );
	const { address, email, name, phone } = getOwnerData( paymentForm );

	// Create a Subscription.
	if ( isSubscription || isRecurring ) {
		// Create a PaymentMethod.
		const { error, paymentMethod } = await stripe.createPaymentMethod( {
			type: 'card',
			card: elements.card,
			billing_details: {
				address,
				email,
				name,
				phone,
			},
		} );

		if ( error ) {
			throw error;
		}

		await createSubscription(
			paymentMethod,
			customerResponse,
			paymentForm
		);

		// Create a PaymentIntent.
	} else {
		const paymentMethod = {
			card: elements.card,
			billing_details: {
				address,
				email,
				name,
				phone,
			},
		};

		await createPayment( paymentMethod, customerResponse, paymentForm );
	}

	const successUrl = addQueryArgs( successUrlBase, {
		customer_id: customerResponse.customer.id,
	} );

	window.location.href = successUrl;
}

export default submit;
