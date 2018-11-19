(function($){
 	var ScrTopBtn = $('.scroll_top');
  	$(window).scroll(function() {
    	var top = $(this).scrollTop();

     if ( top >= 300 )
      		ScrTopBtn.fadeIn(1000);
    	else if ( top < 300 )
      		ScrTopBtn.fadeOut(1000);
    });
})(jQuery);