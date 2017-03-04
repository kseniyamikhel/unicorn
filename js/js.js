$(document).ready(function(){
	$(".clients_slider").bxSlider({
		minSlides: 2,
		maxSlides: 6,
		slideWidth: 100,
		slideMargin: 65,
		pager: false,
		auto: true,
		moveSlides: 1,
		nextText: '',
		prevText: '',
		nextSelector: '.clients_slider_next',
		prevSelector: '.clients_slider_prev'
	});
	$(".articles_slider").bxSlider({
		minSlides: 1,
		maxSlides: 3,
		slideWidth: 360,
		slideMargin: 20,
		pager: false,
		auto: true,
		moveSlides: 1,
		nextText: '',
		prevText: '',
		nextSelector: '.articles_slider_next',
		prevSelector: '.articles_slider_prev'
	});
	$(".posts_slider").bxSlider({
		minSlides: 1,
		maxSlides: 3,
		slideWidth: 360,
		slideMargin: 20,
		pager: false,
		auto: true,
		moveSlides: 1,
		nextText: '',
		prevText: '',
		nextSelector: '.posts_slider_next',
		prevSelector: '.posts_slider_prev'
	});
	$('.portfolio_slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 4,
		variableWidth: true
	});
	var filtered = false;

	$('.portfolio_filters_item').on('click', function(){
		var currentType = this.dataset.filter;
		if (filtered === false) {
			$('.portfolio_slider').slick('slickFilter', function(i, el) {
				return el.dataset.filter === currentType
			});
			filtered = true;
		} else {
			$('.portfolio_slider').slick('slickUnfilter');
			filtered = false;
		}
	});
});