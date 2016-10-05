(function () {
	'use strict';

	// Window Scroll
	var windowScroll = function() {
		var lastScrollTop = 0;

		$(window).scroll(function(event){

			var header = $('#cc-header'),
			headerImage = $('.cc-logo'),
			scrlTop = $(this).scrollTop();

			if ( scrlTop > 500 && scrlTop <= 2000 ) {
				headerImage.attr('src', 'images/logo.png');
				header.addClass('navbar-fixed-top cc-animated slideInDown');
			} else if ( scrlTop <= 500) {
				headerImage.attr('src', 'images/logo-white.png');
				if ( header.hasClass('navbar-fixed-top') ) {
					header.addClass('navbar-fixed-top cc-animated slideOutUp');
					setTimeout(function(){
						header.removeClass('navbar-fixed-top cc-animated slideInDown slideOutUp');
					}, 100 );
				}
			}
		});
	};
	$(function(){
		windowScroll();
	})
}());
