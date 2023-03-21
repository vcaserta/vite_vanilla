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
  const slideshowEl = document.querySelector('.js-slideshow5');

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

  const swiper = new Swiper('#edit5', {
    modules: [EffectFade],
    slidesPerView: 1,
    allowTouchMove: false,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
  });

  setInterval(function () {
    const carousel = document.querySelector('.slideshow5');
    const index = carousel
      .querySelector('.flickity-cell.is-selected')
      .getAttribute('data-index');
    swiper.slideTo(index);
  }, 100);
});
