$(function(){
	$(".fairy-tail__slider, .our-trip__slider").slick({
		prevArrow: '<button class=" slick-btn slick-prev"><img src="./images/arrow-prev.svg"></button>',
		nextArrow: '<button class=" slick-btn slick-next"><img src="./images/arrow-next.svg"></button>',
		autoplay: 3000,
		fade: true,
		responsive: [{
			breakpoint: 601,
			settings: {
				arrows: false
			}
		}]
	});
});
