/* eslint-disable no-unused-vars */
import $ from 'jquery';

import ScrollMagic from 'scrollmagic';
import { gsap } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

import Swiper, { Autoplay } from 'swiper';
import 'slick-carousel';
// eslint-disable-next-line no-multi-assign
window.$ = window.jQuery = $;

ScrollMagicPluginGsap(ScrollMagic, gsap);

$(() => {
  const swiper = new Swiper('#heroSwiper', {
    modules: [Autoplay],
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
    },
    observer: true,
    observeParents: true,
    speed: 500,
    slidesPerView: 'auto',
  });

  const controller = new ScrollMagic.Controller({ container: '#main' });

  const width = window.innerWidth;
  const isMobile = width < 1024;

  const tweenSlide = gsap.to('#hero-carousel .js-hero-slide', {
    duration: 2,
    height: isMobile ? '63vh' : '76vh',
    width: isMobile
      ? 'calc(100% - 30px - 24px - 24px)'
      : 'calc(100% - 132px - 40px - 40px)',
    paddingTop: isMobile ? '75px' : '0px',
    ease: 'none',
  });

  tweenSlide.eventCallback('onUpdate', () => {
    const progress = tweenSlide.progress();
    const space = isMobile ? 24 : 40;
    const sb = space * progress;
    swiper.params.spaceBetween = sb;
    swiper.params.slidesOffsetBefore = sb;
    swiper.update();
  });

  const tweenBlockText = gsap.to('#hero-carousel .js-hero-block-text', {
    duration: 2,
    bottom: isMobile ? '-252px' : '-110px',
    padding: 0,
    ease: 'none',
  });

  const tweenText = gsap.to('#hero-carousel .js-hero-text', {
    duration: 2,
    color: 'black',
  });

  const tweenTitle = gsap.to('#hero-carousel .js-hero-text-title', {
    duration: 2,
    transform: isMobile ? 'scale(0.8)' : 'translateY(22px) scale(1.55)',
    transformOrigin: 'left',
  });

  const tweenPara = gsap.to('#hero-carousel .js-hero-para', {
    duration: 2,
    transform: isMobile ? 'translateY(-16px) scale(0.80)' : 'translateY(38px)',
    lineHeight: isMobile ? '24px' : '30px',
    transformOrigin: 'left',
  });

  const tweenButton = gsap.to('#hero-carousel .js-hero-button', {
    duration: 2,
    color: 'white',
    backgroundColor: 'black',
    transform: isMobile ? 'translateY(-30px)' : 'translateY(30px)',
  });

  // SCENE DESKTOP

  new ScrollMagic.Scene({
    // reverse: false,
    triggerElement: '#trigger1',
    triggerHook: 0,
    duration: isMobile ? 50 : 200,
  })
    .setTween(tweenSlide)
    .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
    // reverse: false,
    triggerElement: '#trigger1',
    triggerHook: 0,
    duration: isMobile ? 50 : 200,
  })
    .setTween(tweenText)
    .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
    // reverse: false,
    triggerElement: '#trigger1',
    triggerHook: 0,
    duration: isMobile ? 50 : 200,
  })
    .setTween(tweenTitle)
    .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
    // reverse: false,
    triggerElement: '#trigger1',
    triggerHook: 0,
    duration: isMobile ? 50 : 200,
  })
    .setTween(tweenButton)
    .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
    // reverse: false,
    triggerElement: '#trigger1',
    triggerHook: 0,
    duration: isMobile ? 50 : 200,
  })
    .setTween(tweenPara)
    .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
    // reverse: false,
    triggerElement: '#trigger1',
    triggerHook: 0,
    duration: isMobile ? 50 : 200,
  })
    .setTween(tweenBlockText)
    .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#trigger1',
    triggerHook: 0,
    duration: isMobile ? 70 : 200,
  })
    .setPin('#hero-carousel')
    .addIndicators()
    .addTo(controller);

  // window.addEventListener('resize', handleResize);
});
