"use strict";

var isMobile = {
  Android: function Android() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function Opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function Windows() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function any() {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  }
};

if (isMobile.any()) {
  document.querySelector('html').classList.add('_touch');
} // Menu


var navButton = document.querySelector('.icon-menu');

if (navButton) {
  var nav = document.querySelector('.menu__body');
  navButton.addEventListener("click", function (e) {
    navButton.classList.toggle('_active');

    if (!nav.classList.contains('_active')) {
      nav.classList.add('_active');
    } else {
      nav.classList.remove('_active');
    }
  });
}

;
;

window.onload = function () {
  document.addEventListener("click", documentActions);

  function documentActions(e) {
    var targetElement = e.target;

    if (window.innerWidth >= 768 && isMobile.any()) {
      if (targetElement.classList.contains('menu__arrow')) {
        targetElement.closest('.menu__item').classList.toggle('_hover');
      }

      if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0) {
        document.body.onclick = function (e) {
          if (!e.target.closest('.menu__item._hover')) {
            document.querySelectorAll('.menu__item._hover').forEach(function (item) {
              if (item.classList.contains('_hover')) {
                item.classList.remove('_hover');
              }
            });
          }
        };
      }
    }

    if (targetElement.classList.contains('search-form__icon')) {
      document.querySelector('.search-form').classList.toggle('_active');
    } else if (!targetElement.closest('.search-form') && document.querySelector('.search-form._active')) {
      document.querySelector('.search-form').classList.remove('_active');
    }

    if (window.innerWidth < 768) {
      if (targetElement.classList.contains('menu__arrow')) {
        targetElement.closest('.menu__item').classList.toggle('_active');
      }
    }

    if (targetElement.classList.contains('product-card__btn')) {
      var productId = targetElement.closest('.product-card').dataset.pid;
      addToCart(targetElement, productId);
      e.preventDefault();
    }
  } // Navbar shrink function


  function scrollHead() {
    var header = document.querySelector('.header__wrapper');

    if (window.pageYOffset > 1) {
      header.classList.add('nav-bg');
    } else {
      header.classList.remove('nav-bg');
    }
  }

  window.onscroll = scrollHead;
  scrollHead();
};

;

if (document.querySelector('.slider-main__body')) {
  new Splide('.slider-main__body', {
    classes: {
      arrows: 'splide__arrows slider-main__controls',
      prev: 'splide__arrow--prev slider-arrow_prev',
      next: 'splide__arrow--next slider-arrow_next',
      pagination: 'splide__pagination controls-slider-main__dotts'
    },
    focus: 'center',
    cover: true,
    rewind: true,
    type: 'loop',
    loop: true,
    perPage: 1,
    autoWidth: true,
    gap: 32,
    autoplay: 'play',
    pauseOnHover: true,
    interval: 3000,
    breakpoints: {
      992: {
        autoWidth: false
      }
    }
  }).mount();
}

;

if (document.querySelector('.rooms-slider')) {
  new Splide('.rooms-slider', {
    classes: {
      arrows: 'splide__arrows rooms-slider__controls',
      next: 'splide__arrow--next slider-arrow_next'
    },
    type: 'loop',
    loop: true,
    autoWidth: true,
    breakpoints: {
      992: {
        cover: true,
        rewind: true
      }
    }
  }).mount();
}

if (document.querySelector('.tips-slider')) {
  new Splide('.tips-slider', {
    classes: {
      arrows: 'splide__arrows tips-slider__controls',
      prev: 'splide__arrow--prev slider-arrow_prev',
      next: 'splide__arrow--next slider-arrow_next'
    },
    perPage: 3,
    autoWidth: false,
    gap: 32,
    breakpoints: {
      1200: {
        gap: 26
      },
      1024: {
        gap: 18
      },
      768: {
        gap: 16,
        perPage: 2
      },
      540: {
        gap: 15,
        focus: 'left',
        perPage: 1
      }
    }
  }).mount();
}

;