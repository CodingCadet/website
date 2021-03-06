(function () {
	'use strict';

	// Window Scroll
	var windowScroll = function() {
		var lastScrollTop = 0;

		$(window).scroll(function(event){

			var header = $('#cc-header'),
			headerImage = $('.cc-logo'),
			headerWhiteImage = $('.cc-logo-white'),
			scrlTop = $(this).scrollTop();

			if ( scrlTop > 500 && scrlTop <= 2000 ) {
				headerImage.show(0);
				headerWhiteImage.hide(0);
				header.addClass('navbar-fixed-top cc-animated slideInDown');
			} else if ( scrlTop <= 500) {
				headerImage.hide(0);
				headerWhiteImage.show(0);
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
