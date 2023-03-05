/************** Popup Image**************/

(function( $ ){
	// 'use strict';

	$(document).ready(function(){
    $('.ova-load-more-por').on('click', function(){

      var paged = $(this).closest('.ova_more_por').attr('data-paged');
      var perpage = $(this).closest('.ova_more_por').attr('data-perpage');
      var cat = $(this).closest('.ova_more_por').attr('data-cat');
      var type = $(this).closest('.ova_more_por').attr('data-type');

      var new_paged = parseInt(paged) + 1;
      $(this).closest('.ova_more_por').attr('data-paged',new_paged);

      $('.ova-load-more-por').css({'display':'none'});
      $('.ova-loader').css({'display':'inline-block'});

      jQuery.ajax({
         url: ajax_object.ajax_url,
         type: 'POST',
         data: ({
            action: 'ova_loadmore_portfolio',
            paged: paged,
            perpage: perpage,
            cat: cat,
            type: type,
         }),
        success: function(data){

          if ( data.length > 30 ){

            $('.content-por').append(data).isotope('appended', data);

            $('.content-por').imagesLoaded( function() {
              $('.content-por').isotope( 'reloadItems' ).isotope();

            });

            $('.ova-load-more-por').css({'display':'inline-block'});
            $('.ova-loader').css({'display':'none'});

          }else if( data == 'no_product' ){
            $('.ova-loader').css({'display':'none'});
            $('.ova-nodata').css({'display':'block'});
            $('.ova-nodata span').css({'display':'inline-block'});
          }
         }
      });
    });
      $(".content-por").each(function(){
        var $mcontainer = $(this);
         $mcontainer.imagesLoaded( function() {

             $mcontainer.isotope({
                 itemSelector : '.ovapor-item',
                 animationOptions: {
                     duration: 750,
                     easing: 'linear'
                 },
             });

             if( $mcontainer.hasClass('classic-portfolio') ){
              $mcontainer.isotope({
                layoutMode: 'fitRows',
                fitRows: {
                  gutter: 30
                },
              })
            }
         });
      })
      
          
          $('.archive-por .list-cat-por li').click(function(){ 
              
            $(".archive-por .list-cat-por li").removeClass("active");
            $(this).addClass("active");        

              var selector = $(this).attr('data-filter'); 
              $(".content-por").isotope({ 
                  filter: selector, 
                  animationOptions: { 
                      duration: 750, 
                      easing: 'linear', 
                      queue: false, 
                  } 
              }); 

              if( $(this).hasClass('classic-portfolio') ){
                $(".content-por").isotope({
                  layoutMode: 'fitRows',
                  fitRows: {
                    gutter: 30
                  },
                })
              }
            return false; 
          }); 


          if( $(".single-por .item-gallery > a").length > 0 ){
            $(".single-por .item-gallery > a").fancybox({});
          }

		
      
   });
})(jQuery); 	
