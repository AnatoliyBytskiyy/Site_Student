(function($){
 	var menu = $('.menu');
  	$(window).scroll(function() {
    	var top = $(this).scrollTop();
    		
    	if ( top >= 480 )
      		menu.css("background","rgba(0, 153, 255, 1)");
    	else if ( top < 480 )
      		menu.css("background","inherit");
  });
})(jQuery);