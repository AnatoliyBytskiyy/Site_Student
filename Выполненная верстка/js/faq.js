(function($){
	$(function() {
		$('.faq__item').on('click', function() {
			$('.faq__item').removeClass('menu_faq_open_style');
			$('.faq__item').removeClass('menu_faq_transform_arrow');

			$(this).closest('.faq__item').toggleClass('menu_faq_open_style');
			$(this).closest('.faq__item').toggleClass('menu_faq_transform_arrow');	
		});
	});
})(jQuery);