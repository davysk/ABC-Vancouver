/**
 * WordPress dependencies
 */
import { addQueryArgs } from '@wordpress/url';

/**
 * Internal dependencies.
 */
const {
	customers,
	paymentintents,
	setupintents,
	subscriptions,
} = window.wpsp.api;

/** @typedef {import('@wpsimplepay/payment-forms').PaymentForm} PaymentForm */

/**
 * Creates a Subscription
 *
 * @param {Object} customerResponse Customer.
 * @param {PaymentForm} paymentForm
 */
export async function createSubscription( customerResponse, paymentForm ) {
	const {
		getOwnerData,
		stripeInstance: stripe,
		stripeInstance: { elements },
	} = paymentForm;
	const { customer, nonce } = customerResponse;

	// Create a SetupIntent for the Payment Method.
	const { client_secret: clientSecret } = await setupintents.create(
		{
			customer_id: customer.id,
			customer_nonce: nonce,
			payment_method_types: [ 'sepa_debit' ],
		},
		paymentForm
	);

	const { address, email, name, phone } = getOwnerData( paymentForm );

	// Confirm the Payment Method's information against the SetupIntent.
	const { error, setupIntent } = await stripe.confirmSepaDebitSetup(
		clientSecret,
		{
			payment_method: {
				sepa_debit: elements.sepaDebit,
				billing_details: {
					address,
					email,
					name,
					phone,
				},
			},
		}
	);

	if ( error ) {
		throw error;
	}

	const { payment_method: paymentMethodId } = setupIntent;

	// Create a Subscription using the confirmed Payment Method as the default.
	return await subscriptions.create(
		{
			customer_id: customer.id,
			customer_nonce: nonce,
			payment_method_id: paymentMethodId,
		},
		paymentForm
	);
}

/**
 * Creates a Payment.
 *
 * @param {Object} customerResponse Customer REST API response.
 * @param {PaymentForm} paymentForm
 */
export async function createPayment( customerResponse, paymentForm ) {
	const {
		getOwnerData,
		stripeInstance: stripe,
		stripeInstance: { elements },
	} = paymentForm;
	const { customer, nonce } = customerResponse;

	const { client_secret: clientSecret } = await paymentintents.create(
		{
			customer_id: customer.id,
			customer_nonce: nonce,
			payment_method_type: 'sepa_debit',
		},
		paymentForm
	);

	const { address, email, name, phone } = getOwnerData( paymentForm );

	const { error, paymentIntent } = await stripe.confirmSepaDebitPayment(
		clientSecret,
		{
			payment_method: {
				sepa_debit: elements.sepaDebit,
				billing_details: {
					address,
					email,
					name,
					phone,
				},
			},
		}
	);

	if ( error ) {
		throw error;
	}

	return paymentIntent;
}

/**
 * Submit the SEPA Direct Debit Payment Method.
 *
 * @param {PaymentForm} paymentForm
 */
async function submit( paymentForm ) {
	const { state, __unstableLegacyFormData } = paymentForm;
	const {
		stripeParams: { success_url: successUrlBase },
	} = __unstableLegacyFormData;
	const { isSubscription, isRecurring } = state;

	// Create a Customer.
	const customerResponse = await customers.create( {}, paymentForm );

	// Create a Subscription.
	if ( isSubscription || isRecurring ) {
		await createSubscription( customerResponse, paymentForm );

		// Create a PaymentIntent.
	} else {
		await createPayment( customerResponse, paymentForm );
	}

	const { customer } = customerResponse;

	const successUrl = addQueryArgs( successUrlBase, {
		customer_id: customer.id,
	} );

	window.location.href = successUrl;
}

export default submit;
