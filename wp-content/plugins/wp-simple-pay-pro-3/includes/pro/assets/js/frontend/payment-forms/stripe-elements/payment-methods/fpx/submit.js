/* global _ */

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
 * Submit the iDEAL Payment Method.
 *
 * @param {PaymentForm} paymentForm
 */
async function submit( paymentForm ) {
	// Access Stripe and Elements instance.
	const {
		stripeInstance: stripe,
		stripeInstance: { elements },
		state,
		__unstableLegacyFormData,
	} = paymentForm;
	const {
		stripeParams: { success_url: successUrlBase },
	} = __unstableLegacyFormData;
	const { paymentMethods } = state;

	// Bail if no Bank has been chosen.
	if ( false === elements.fpx._complete ) {
		const paymentMethodConfig = _.find( paymentMethods, ( { id } ) => {
			return 'fpx' === id;
		} );

		const { i18n } = paymentMethodConfig;

		throw {
			message: i18n.empty,
		};
	}

	// Create a Customer.
	const { customer, nonce } = await customers.create( {}, paymentForm );

	// Create a PaymentIntent.
	return await paymentintents
		.create(
			{
				customer_id: customer.id,
				customer_nonce: nonce,
				payment_method_type: 'fpx',
			},
			paymentForm
		)
		// Confirm the iDEAL Payment Intent.
		.then( ( { client_secret: clientSecret } ) => {
			const returnUrl = addQueryArgs( successUrlBase, {
				customer_id: customer.id,
			} );

			return stripe
				.confirmFpxPayment( clientSecret, {
					payment_method: {
						fpx: elements.fpx,
					},
					return_url: returnUrl,
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
