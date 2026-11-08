(function($) {

  /* Flexslider */
  $(function() {
    $(document).ready(function() {
      $('.flexslider').flexslider({
        controlNav: false,
        directionNav: false,
        slideshow: true,
        slideshowSpeed: 4000,
        animationSpeed: 400,
        initDelay: 0
      });
    });
  });

  /* Primary navigation toggle */
  $(function() {
    var pull = $('#primary-nav-toggle');
    header = $('#header-navigation');
    navigation = $('.primary-navigation-header');
    navigationLi = $('nav#primary-navigation li');
    navigationA = $('nav#primary-navigation li a');
    logoLink = $('.header-logo');
    navigationHeight = navigation.height();
    navigationX = $('#close-navigation');

    $(pull).on('click', function(e) {
      e.preventDefault();
      navigation.fadeIn(300);
    });

    $(logoLink).add(navigationA).add(navigationX).click(function() {
      if (navigationLi.css('display') != 'inline-block') {
        navigation.fadeOut(300);
      }
    });

    $(window).resize(function() {
      var w = $(window).width();
      if (w > 320 && navigation.is(':hidden')) {
        navigation.removeAttr('style');
      }
    });
  });

  /* Scroll to anchor tags */
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top + 1
          }, 600);
          return false;
        }
      }
    });
  });

  // More info toggle
  $(document).ready(function() {
    $(".more-info-toggle").click(function() {
      $(".more-information").toggle('fast');
      $(this).hide();
    });
    $(".show-policies").click(function() {
      $(".policies-container").fadeIn('fast');
    });
    $(".close-policy-btn").add(".close-policy").click(function() {
      $(".policies-container").fadeOut('fast');
    });
  });

  /* Lightcase initiate */
  $(function() {
    $('a[data-rel^=lightcase]').lightcase({
      swipe: true,
      maxWidth: 1024,
      maxHeight: 734,
      transition: 'scrollHorizontal',
      overlayOpacity: 1,
      speedIn: 1,
      sppedOut: 1,
      closeOnOverlayClick: false
    });
  });
  
  /* Datepicker */
  $( function() {
    $( ".datepicker" ).datepicker({
		beforeShow: function (input, inst) {
			setTimeout(function () {
				inst.dpDiv.css({
					top: $(".datepicker").offset().top + 35
				});
			}, 0);
		},
		dateFormat: 'dd-mm-yy',
		minDate: 0		
	});
  });
  $(document).on("focusin", ".datepicker", function() {
     $(this).prop('readonly', true);  
  });
  $(document).on("focusout", ".datepicker", function() {
     $(this).prop('readonly', false); 
  });
  
  /* Header transitions */
  $(function() {
    var myElement = document.querySelector(".action-header");
    // construct an instance of Headroom, passing the element
    var headroom = new Headroom(myElement, {
      "offset": 200,
      "tolerance": 15
    });
    // initialise
    headroom.init();

    // to destroy
    headroom.destroy();
  });

})(jQuery);