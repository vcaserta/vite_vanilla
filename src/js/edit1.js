/* eslint-disable no-unused-vars */
import $ from 'jquery';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';

import Swiper, { EffectCreative, EffectFade } from 'swiper';
// import 'slick-carousel';
// eslint-disable-next-line no-multi-assign
window.$ = window.jQuery = $;

$(() => {
  const tickerSpeed = 1;

  let flickity = null;
  let isPaused = false;
  const slideshowEl = document.querySelector('.js-slideshow');

  const update = () => {
    if (isPaused) return;
    if (flickity.slides) {
      flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
      flickity.selectedIndex = flickity.dragEndRestingSelect();
      flickity.updateSelectedSlide();
      flickity.settle(flickity.x);
    }
    window.requestAnimationFrame(update);
  };

  const pause = () => {
    isPaused = true;
  };

  const play = () => {
    if (isPaused) {
      isPaused = false;
      window.requestAnimationFrame(update);
    }
  };

  flickity = new Flickity(slideshowEl, {
    autoPlay: false,
    prevNextButtons: false,
    pageDots: false,
    draggable: true,
    wrapAround: true,
    selectedAttraction: 0.015,
    friction: 0.25,
  });
  flickity.x = 0;

  slideshowEl.addEventListener('mouseenter', pause, false);
  slideshowEl.addEventListener('focusin', pause, false);
  slideshowEl.addEventListener('mouseleave', play, false);
  slideshowEl.addEventListener('focusout', play, false);

  flickity.on('dragStart', () => {
    isPaused = true;
  });

  update();

  const carouselOptions = {
    modules: [EffectCreative],
    slidesPerView: 2.2,
    effect: 'creative',
    centeredSlides: true,
    nested: true,
    loop: true,
    creativeEffect: {
      limitProgress: 10,
      progressMultiplier: 2,
      prev: {
        translate: ['-50%', '1.5%', 120],
      },
      next: {
        translate: ['68%', '-1%', -250],
      },
    },
  };

  const swiper4 = new Swiper('#edit1SwiperInn1', carouselOptions);
  const swiper5 = new Swiper('#edit1SwiperInn2', carouselOptions);
  const swiper6 = new Swiper('#edit1SwiperInn3', carouselOptions);

  const swiperMain = new Swiper('#edit1Main', {
    modules: [EffectFade],
    slidesPerView: 1,
    allowTouchMove: false,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
  });

  $('.js-slideshow .slide').on('click', function (e) {
    const index = this.getAttribute('data-index');
    const slideActive = document.querySelectorAll('.slide-active');
    slideActive.forEach((elm) => {
      elm.classList.remove('slide-active');
    });
    const nextSlideActive = document.querySelectorAll(
      `[data-index="${index}"]`,
    );
    nextSlideActive.forEach((elm) => {
      elm.classList.add('slide-active');
    });
    swiperMain.slideTo(index);
  });
  // const swiper1 = new Swiper('#edit1Swiper', {
  //   modules: [Autoplay, FreeMode],
  //   slidesPerView: 'auto',
  //   loop: true,
  //   autoplay: {
  //     delay: 0,
  //     pauseOnMouseEnter: true,
  //     disableOnInteraction: true,
  //   },
  //   grabCursor: true,
  //   speed: 5000,
  //   freeMode: true,
  //   centeredSlides: true,
  // });
  // $('#edit1Swiper .swiper-slide').on('click', function (e) {
  //   const index = this.getAttribute('data-index');
  //   const slideActive = document.querySelectorAll('.slide-active');
  //   slideActive.forEach((elm) => {
  //     elm.classList.remove('slide-active');
  //   });
  //   const nextSlideActive = document.querySelectorAll(
  //     `[data-index="${index}"]`,
  //   );
  //   nextSlideActive.forEach((elm) => {
  //     elm.classList.add('slide-active');
  //   });
  //   swiperMain.slideTo(index);
  // });
  // swiper1.on('slideChange', () => {
  //   swiperMain.slideNext();
  // });
  // const $slickCarousel = $('#edit1Slick');
  // $slickCarousel.slick({
  //   speed: 9000,
  //   autoplay: true,
  //   autoplaySpeed: 0,
  //   cssEase: 'linear',
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   variableWidth: true,
  //   infinite: true,
  //   centerMode: true,
  //   swipeToSlide: true,
  //   touchThreshold: 100,
  // });
  // let prevStyle;
  // $slickCarousel.on('mouseenter', function () {
  //   $(this).slick('slickPause');
  //   const $slickTrack = $(this).find('.slick-track');
  //   const computedStyle = window.getComputedStyle($slickTrack[0]);
  //   prevStyle = computedStyle.getPropertyValue('transform');
  //   $slickTrack.css('transform', prevStyle);
  //   // prevStyle = $slickTrack.attr('style');
  //   $slickTrack.css('transition', 'none');
  // });
  // $slickCarousel.on('mouseleave', function () {
  //   $(this).slick('slickPlay');
  //   const $slickTrack = $(this).find('.slick-track');
  //   $slickTrack.css('transform', prevStyle);
  //   $slickTrack.css('transition', 'transform 9000ms linear 0s');
  // });
  // $slickCarousel.on('afterChange', function (slick, currentSlide) {
  //   swiperMain.slideNext();
  // });
});
