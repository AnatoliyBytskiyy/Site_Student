(function($){

	// var animete = $('.animeted');
	// var name = "zoomIn";
	// var aniZoomIn = $('.zoomIn');
	// var aniZoomIn = $('.zoomIn');

 	// $(window).scroll(function() {
 	// 	var scrollBottom = $(this).scrollTop() + $(window).height();
 	// 	var scrollEl = $('.animated').offset().top;

 	// 	if(scrollBottom > scrollEl)
	 //        $('.animated').addClass("zoomIn");
    
 	// });
 	
 // 	var target = $('.checkPoint');
	// var targetPos = target.offset().top;
	// var winHeight = $(window).height();
	// var scrollToElem = targetPos - winHeight;
	// $(window).scroll(function(){
	//   var winScrollTop = $(this).scrollTop();
	//   if(winScrollTop > scrollToElem){
	//     target.addClass('zoomIn');//сработает когда пользователь доскроллит к элементу с классом .elem
	//   }
	// });

	new WOW().init();   // инициализируем wow

	// anime({
	// 	targets: '.shape',
	// 	translateX: window.innerWidth*0.8,
	// 	autoplay: true
	// });

	

})(jQuery);