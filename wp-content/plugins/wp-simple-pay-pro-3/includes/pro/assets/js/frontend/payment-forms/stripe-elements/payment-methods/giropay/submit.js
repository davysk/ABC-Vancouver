/**
 * WordPress dependencies
 */
import { addQueryArgs } from '@wordpress/url';

/**
 * Internal dependencies.
 */
const { customers, paymentintents } = window.wpsp.api;

/** @typedef {import('@wpsimplepay/payment-forms').PaymentForm} PaymentForm */

/**
 * Submit the giropay Payment Method.
 *
 * @param {PaymentForm} paymentForm
 */
async function submit( paymentForm ) {
	// Access Stripe and Elements instance.
	const {
		getOwnerData,
		stripeInstance: stripe,
		__unstableLegacyFormData,
	} = paymentForm;

	const {
		stripeParams: { success_url: successUrlBase },
	} = __unstableLegacyFormData;

	// Create a Customer.
	const { customer, nonce } = await customers.create( {}, paymentForm );

	// Create a PaymentIntent.
	return await paymentintents
		.create(
			{
				customer_id: customer.id,
				customer_nonce: nonce,
				payment_method_type: 'giropay',
			},
			paymentForm
		)
		// Confirm the Giropay PaymentIntent.
		.then( ( { client_secret: clientSecret } ) => {
			const returnUrl = addQueryArgs( successUrlBase, {
				customer_id: customer.id,
			} );

			const { address, email, name, phone } = getOwnerData( paymentForm );

			return stripe
				.confirmGiropayPayment( clientSecret, {
					return_url: returnUrl,
					payment_method: {
						billing_details: {
							address,
							email,
							name,
							phone,
						},
					},
				} )
				.then( ( result ) => {
					if ( result.error ) {
						throw result.error;
					}

					return result;
				} );
		} );
}

export default submit;
