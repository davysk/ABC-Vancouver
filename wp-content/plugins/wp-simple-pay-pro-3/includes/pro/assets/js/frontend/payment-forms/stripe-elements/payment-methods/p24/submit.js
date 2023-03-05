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
 * Submit the p24 Payment Method.
 *
 * @param {PaymentForm} paymentForm
 */
async function submit( paymentForm ) {
	// Access Stripe and Elements instance.
	const {
		getOwnerData,
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
	if ( false === elements.p24._complete ) {
		const paymentMethodConfig = _.find( paymentMethods, ( { id } ) => {
			return 'p24' === id;
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
				payment_method_type: 'p24',
			},
			paymentForm
		)
		// Confirm the p24 Payment Intent.
		.then( ( { client_secret: clientSecret } ) => {
			const returnUrl = addQueryArgs( successUrlBase, {
				customer_id: customer.id,
			} );

			const { address, email, name, phone } = getOwnerData( paymentForm );

			return stripe
				.confirmP24Payment( clientSecret, {
					payment_method: {
						p24: elements.p24,
						billing_details: {
							address,
							email,
							name,
							phone,
						},
					},
					payment_method_options: {
						p24: {
							tos_shown_and_accepted: true,
						},
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
