/*  ---------------------------------------------------

---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
 

        /*------------------
            Portfolio filter
        --------------------*/
        $('.portfolio__filter li').on('click', function () {
            $('.portfolio__filter li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.portfolio__gallery').length > 0) {
            var containerEl = document.querySelector('.portfolio__gallery');
            var mixer = mixitup(containerEl);
        }
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Masonary
    $('.work__gallery').masonry({
        itemSelector: '.work__item',
        columnWidth: '.grid-sizer',
        gutter: 10
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
		Hero Slider
	--------------------*/
    $('.hero__slider').owlCarousel({
        loop: true,
        dots: true,
        mouseDrag: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        margin: 0,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });

    var dot = $('.hero__slider .owl-dot');
    dot.each(function () {
        var index = $(this).index() + 1;
        if (index < 10) {
            $(this).html('0').append(index);
        } else {
            $(this).html(index);
        }
    });


    /*------------------
        Latest Slider
    --------------------*/
    $(".latest__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });


    const items = document.querySelectorAll('.accordion-link');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));


// Get the site-section div
const siteSection = document.querySelector('.site-section');

// Get the section with class work
const workSection = document.querySelector('.work');

// Calculate the offsetTop of the work section
const workSectionOffsetTop = workSection.offsetTop;

// Check if the navigator object exists and the user is not on a mobile device
if (typeof navigator !== 'undefined' && !/Mobi|Android/i.test(navigator.userAgent)) {
  // Add a scroll event listener to the window
  window.addEventListener('scroll', () => {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Check if the scroll position is greater than or equal to the offsetTop of the work section
    if (scrollPosition >= workSectionOffsetTop) {
      // Add the 'show' class to the site-section div
      siteSection.classList.add('show');
    }
  });
}

   /*------------------
        accordion
    --------------------*/


    function initAccordion() {
        const accordionLinks = document.querySelectorAll('.accordion-link');
        
        function initAccordion() {
            console.log('initAccordion() called');
            // rest of the function code
          }
      
        accordionLinks.forEach(link => {
          link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default behavior of the link click event
            this.parentNode.classList.toggle('active');
          });
      
          // Hide answer sections on page load
          const answerSection = link.nextElementSibling;
          if (answerSection) {
            answerSection.style.maxHeight = 0;
            answerSection.style.overflow = 'hidden';
          }
        });
      
        // Show answer section on page load if URL contains its ID
        const answerIdInUrl = window.location.hash;
        const answerSectionToShow = document.querySelector(answerIdInUrl);
        if (answerSectionToShow) {
          answerSectionToShow.style.maxHeight = '20rem';
          answerSectionToShow.style.overflow = 'visible';
          answerSectionToShow.parentNode.classList.add('active');
        }
      }

      /*------------------
        accordion prevent scroll
    --------------------*/
      var accordion = document.getElementsByClassName("accordion-link");

for (var i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function(event) {
    event.preventDefault();
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
    this.classList.toggle("active");
  });
}
  /*------------------
        text animation
    --------------------*/

// Get the section element with class "hero"
const heroSection = document.querySelector('.hero');

// Set the initial opacity to 0
heroSection.style.opacity = 0;

// Define the animation function
function fadeIn(element) {
  let opacity = 0;
  const interval = setInterval(function() {
    if (opacity < 1) {
      opacity += 0.05;
      element.style.opacity = opacity;
    } else {
      clearInterval(interval);
    }
  }, 50);
}

// Call the fadeIn function after a 2-second delay
setTimeout(function() {
  fadeIn(heroSection);
}, 150);




    // Wrap every letter in a span
var textWrapper = document.querySelector('.anime');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.anime .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.anime',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


    /*------------------
        Counter
    --------------------*/
    $('.counter_num').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    
})(jQuery);

