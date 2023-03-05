/* global jQuery */

/**
 * WordPress dependencies
 */
import { addQueryArgs } from '@wordpress/url';

/**
 * Internal dependencies.
 */
import { createPayment, createSubscription } from './../card/submit.js';
const { customers } = window.wpsp.api;

/** @typedef {import('@wpsimplepay/payment-forms').PaymentForm} PaymentForm */

/**
 * Submit Payment Request.
 *
 * @param {PaymentForm} paymentForm
 */
async function submit( paymentForm ) {
	const { state, __unstableLegacyFormData } = paymentForm;
	const {
		isSubscription,
		isRecurring,
		__unstablePaymentRequestPaymentMethod,
	} = state;

	const {
		stripeParams: { success_url: successUrlBase },
	} = __unstableLegacyFormData;

	const {
		billing_details: billingDetails,
	} = __unstablePaymentRequestPaymentMethod;

	const { name, email } = billingDetails;

	// Append hidden fields for backwards compatibility.
	if ( email && '' !== email ) {
		jQuery( '<input>' )
			.attr( {
				type: 'hidden',
				name: 'simpay_email',
				value: email,
			} )
			.appendTo( paymentForm );
	}

	if ( name && '' !== name ) {
		jQuery( '<input>' )
			.attr( {
				type: 'hidden',
				name: 'simpay_customer_name',
				value: name,
			} )
			.appendTo( paymentForm );
	}

	// Create a Customer.
	const customerResponse = await customers.create( {}, paymentForm );

	// Create a Subscription.
	if ( isSubscription || isRecurring ) {
		await createSubscription(
			__unstablePaymentRequestPaymentMethod,
			customerResponse,
			paymentForm
		);

		// Create a PaymentIntent.
	} else {
		await createPayment(
			__unstablePaymentRequestPaymentMethod.id,
			customerResponse,
			paymentForm
		);
	}

	const { customer } = customerResponse;

	const successUrl = addQueryArgs( successUrlBase, {
		customer_id: customer.id,
	} );

	window.location.href = successUrl;
}

export default submit;
