/************** Popup Image**************/

(function( $ ){
	// 'use strict';

	$(document).ready(function(){
      
      /***** Pretty Photo *****/
      if($().prettyPhoto) {
         $(".fullscreen a[rel^='prettyPhoto']").prettyPhoto();
      }

		// init Masonry Archive Collection after all images have loaded
      if($().imagesLoaded) {
         var $grid = $('.content_archive_coll').imagesLoaded( function() {
            $grid.masonry({
               itemSelector: '.items_archive_coll',
               columnWidth: '.items_archive_coll',
               percentPosition: true
            });
         });
      }

		// Masonry Single Artist
      if($().imagesLoaded) {
         var $single_artist = $('.single_artist .wrap_items').imagesLoaded( function() {
            $single_artist.masonry({
               itemSelector: '.single_artist .items',
            });
         });
      }
      
   });
})(jQuery);
