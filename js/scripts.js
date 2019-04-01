(function($) {
	'use strict'; // Start of use strict

	// Smooth scrolling using jQuery easing
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate(
					{
						scrollTop: target.offset().top - 72
					},
					1000,
					'easeInOutExpo'
				);
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll-trigger').click(function() {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: 75
	});

	// Collapse Navbar
	var navbarCollapse = function() {
		if ($('#mainNav').offset().top > 100) {
			$('#mainNav').addClass('navbar-scrolled');
		} else {
			$('#mainNav').removeClass('navbar-scrolled');
		}
	};

	// Collapse now if page is not at top
	navbarCollapse();
	// Collapse the navbar when page is scrolled
	$(window).scroll(navbarCollapse);

	// Language change
	$('#bgLangBtn').click(function() {
		$('[data-localize]').localize('stringresources', { language: 'bg' });
	});

	$('#enLangBtn').click(function() {
		$('[data-localize]').localize('stringresources', { language: 'en' });
	});

	// Magnific popup calls
	$('#portfolio').ready(function() {
		$('.portfolio-box').magnificPopup({
			type: 'ajax',
			alignTop: true,
			overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
		});
	});
})(jQuery); // End of use strict

function ipLookUp()
{ 
		 $.ajax('https://ipapi.co/country/').then(
			function success(response) {
				switch (response) {
          case "BG":
          $('[data-localize]').localize('stringresources', { language: 'bg' });
            break;
        
          default:
          $('[data-localize]').localize('stringresources', { language: 'en' });
            break;
        }
			},
			function fail(data, status) {
				console.log('Request failed.  Returned status of', status);
			}
		);
  }

  ipLookUp();