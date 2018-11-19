$(document).ready(function(){
	$('#carudel_guarantees').owlCarousel({
    // center: true,
    items:6,
    loop:true,
    margin:0,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000
    // responsive:{
    //     600:{
    //         items:4
    //     }
    // }
	});

	$('#carudel_reviews').owlCarousel({
    // center: true,
    items:5,
    loop:true,
    margin:0,
    nav:true,
    autoplay:true,
    autoplayTimeout:5000
    // responsive:{
    //     600:{
    //         items:4
    //     }
    // }
	});
});
