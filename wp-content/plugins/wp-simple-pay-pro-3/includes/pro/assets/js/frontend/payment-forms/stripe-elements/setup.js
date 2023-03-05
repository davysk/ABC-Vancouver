/* global _ */

/**
 * Internal dependencies
 */
import { Cart } from './cart';
import './components';

const { hooks, paymentForms } = window.wpsp;
const { doAction } = hooks;
const { __unstableUpdatePaymentFormCart, getPaymentMethod } = paymentForms;

/** @typedef {import('@wpsimplepay/payment-forms').PaymentForm} PaymentForm */

/**
 * Setup Stripe Elements Payment Form.
 *
 * @since 4.2.0
 *
 * @param {PaymentForm} paymentForm
 */
function setup( paymentForm ) {
	const {
		enable: enableForm,
		disable: disableForm,
		error: clearError,
		state,
	} = paymentForm;
	const { paymentMethods } = state;

	// Disable while setting up.
	disableForm();

	// Bind cart to PaymentForm.
	paymentForm.cart = __unstableUpdatePaymentFormCart(
		paymentForm,
		new Cart()
	);

	// Find the submit button.
	const submitButtonEl = paymentForm.find( '.simpay-checkout-btn' )[ 0 ];

	if ( ! submitButtonEl ) {
		return;
	}

	// Setup the form's Payment Methods.
	paymentMethods.forEach( ( { id } ) => {
		// Call the setup method.
		getPaymentMethod( id ).setup( paymentForm );

		// Bind UI toggles to update the internal state.
		const paymentMethodToggleEl = paymentForm[ 0 ].querySelector(
			`.simpay-payment-method-toggle[data-payment-method="${ id }"]`
		);

		if ( ! paymentMethodToggleEl ) {
			return;
		}

		paymentMethodToggleEl.addEventListener( 'click', () => {
			paymentForm.setState( {
				paymentMethod: _.findWhere( paymentMethods, { id } ),
			} );

			clearError( '' );
		} );
	} );

	// Bind the submit button.
	submitButtonEl.addEventListener( 'click', ( e ) => {
		e.preventDefault();

		// HTML5 validation check.
		const { triggerBrowserValidation } = window.simpayApp;

		if ( ! paymentForm[ 0 ].checkValidity() ) {
			triggerBrowserValidation( paymentForm );

			return;
		}

		/**
		 * Allows processing during a Payment Form submission.
		 *
		 * @since 4.2.0
		 *
		 * @param {PaymentForm} paymentForm
		 */
		doAction( 'simpaySubmitPaymentForm', paymentForm );
	} );

	enableForm();
}

export default setup;
