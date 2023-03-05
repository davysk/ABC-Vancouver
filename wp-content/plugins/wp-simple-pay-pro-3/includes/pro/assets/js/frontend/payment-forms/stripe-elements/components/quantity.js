/**
 * Internal dependencies.
 */
import { apply as applyCoupon } from './coupon.js';
import { update as updateTotalAmountLabels } from './total-amount-labels.js';

export function update( e, spFormElem, formData ) {
	let quantity = 1;

	const cart = spFormElem.cart;

	if ( 0 !== spFormElem.find( '.simpay-quantity-dropdown' ).length ) {
		quantity = parseFloat(
			spFormElem
				.find( '.simpay-quantity-dropdown' )
				.find( 'option:selected' )
				.data( 'quantity' )
		);

		spFormElem.trigger( 'simpayDropdownQuantityChange' );
	} else if ( 0 !== spFormElem.find( '.simpay-quantity-radio' ).length ) {
		quantity = parseFloat(
			spFormElem
				.find( '.simpay-quantity-radio' )
				.find( 'input[type="radio"]:checked' )
				.data( 'quantity' )
		);

		spFormElem.trigger( 'simpayRadioQuantityChange' );
	} else if ( 0 !== spFormElem.find( '.simpay-quantity-input' ).length ) {
		quantity = parseFloat(
			spFormElem.find( '.simpay-quantity-input' ).val()
		);

		spFormElem.trigger( 'simpayNumberQuantityChange' );
	}

	if ( quantity < 1 ) {
		quantity = 1;
	}

	// Backwards compatibility.
	formData.quantity = quantity;

	// Set cart base item quantity.
	try {
		const item = spFormElem.cart.getLineItem( 'base' );

		item.update( {
			quantity,
		} );

		// Update hidden quantity field.
		spFormElem.find( '.simpay-quantity' ).val( quantity );

		// Alert the rest of the components they need to update.
		spFormElem.trigger( 'totalChanged', [ spFormElem, formData ] );
	} catch ( error ) {
		// Error is logged, UI does not need updating.
	}
}

/**
 * DOM ready.
 *
 * @param {jQuery} $ jQuery.
 */
( function ( $ ) {
	/**
	 * Bind when Payment Form is ready.
	 *
	 * @param {Object} e Event
	 * @param {Object} spFormElem Form element.
	 * @param {Object} formData Form data.
	 */
	$( document.body ).on(
		'simpayBindCoreFormEventsAndTriggers',
		( e, spFormElem, formData ) => {
			// Update amounts on load.
			update( e, spFormElem, formData );

			/**
			 * Update amounts when a "Quantity" input changes.
			 *
			 * @param {Event} e Change event.
			 */
			spFormElem
				.find(
					'.simpay-quantity-radio input, .simpay-quantity-dropdown, .simpay-quantity-input'
				)
				.on( 'change', ( e ) => update( e, spFormElem, formData ) );
		}
	);
} )( jQuery );
