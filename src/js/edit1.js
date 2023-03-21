/* eslint-disable no-unused-vars */
import $ from 'jquery';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';

import Swiper, { EffectCreative, EffectFade } from 'swiper';
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
    slidesPerView: 1.32,
    effect: 'creative',
    centeredSlides: true,
    nested: true,
    loop: true,
    creativeEffect: {
      limitProgress: 10,
      progressMultiplier: 2,
      prev: {
        translate: ['-48.6%', '2.1%', 95],
      },
      next: {
        translate: ['64.3%', '-1%', -220],
      },
    },
    breakpoints: {
      1024: {
        slidesPerView: 2.5,
        creativeEffect: {
          limitProgress: 10,
          progressMultiplier: 2,
          prev: {
            translate: ['-46.6%', '3.5%', 130],
          },
          next: {
            translate: ['64%', '-1%', -250],
          },
        },
      },
    },
  };

  const swiper4 = new Swiper('#edit1SwiperInn1', carouselOptions);
  const swiper5 = new Swiper('#edit1SwiperInn2', carouselOptions);
  const swiper6 = new Swiper('#edit1SwiperInn3', carouselOptions);

  const swiperMain = new Swiper('#edit1Main', {
    modules: [EffectFade],
    slidesPerView: 1,
    initialSlide: 1,
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

    const activeSideEl = document.querySelector('.edit-1-side-content.active');
    activeSideEl.classList.remove('active');
    const video = activeSideEl.querySelector('video');
    if (video) video.pause();

    const nextSideEl = document.querySelector(`[data-content="${index}"]`);
    nextSideEl.classList.add('active');
    const nextVideo = nextSideEl.querySelector('video');
    if (nextVideo) nextVideo.play();

    nextSlideActive.forEach((elm) => {
      elm.classList.add('slide-active');
    });
    swiperMain.slideTo(index);
    play();
  });
});
