/* eslint-disable no-unused-vars */
import $ from 'jquery';

import ScrollMagic from 'scrollmagic';
import { gsap } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

import Swiper, { Autoplay, EffectCreative } from 'swiper';

ScrollMagicPluginGsap(ScrollMagic, gsap);

$(() => {
  const swiper = new Swiper('#heroSwiper', {
    modules: [Autoplay],
    loop: true,
    // autoplay: {
    //   delay: 3500,
    //   disableOnInteraction: true,
    //   pauseOnMouseEnter: true,
    // },
    observer: true,
    observeParents: true,
    speed: 500,
    slidesPerView: 'auto',
  });

  const controller = new ScrollMagic.Controller({ container: '#main' });

  // Carousel Animation
  // const spvI = 1;
  // const spvF = 1.338;
  // const sbI = 0;
  // const sbF = 60;
  // const sobI = 0;
  // const sobF = 60;
  const tweenSlide = gsap.to('#hero-carousel .js-hero-slide', {
    duration: 2,
    height: '70vh',
    width: 'calc(100% - 183px - 60px - 60px)',
    ease: 'none',
  });

  tweenSlide.eventCallback('onUpdate', () => {
    const progress = tweenSlide.progress();
    // const spv = spvI + (spvF - spvI) * progress;
    // const sob = 60 * progress;
    const sb = 60 * progress;
    swiper.params.spaceBetween = sb;
    swiper.params.slidesOffsetBefore = sb;
    swiper.update();
  });

  const tweenBlockText = gsap.to('#hero-carousel .js-hero-block-text', {
    duration: 2,
    bottom: '-110px',
    padding: 0,
  });

  const tweenText = gsap.to('#hero-carousel .js-hero-text', {
    duration: 2,
    color: 'black',
  });

  const tweenTitle = gsap.to('#hero-carousel .js-hero-text-title', {
    duration: 2,
    transform: 'scale(0.85)',
    transformOrigin: 'left',
  });
  const tweenButton = gsap.to('#hero-carousel .js-hero-button', {
    duration: 2,
    color: 'white',
    backgroundColor: 'black',
  });

  const twennScrollCarousel = gsap.to('#hero-carousel .swiper-wrapper', {
    duration: 2,
    transform: `translate3d(-${window.innerWidth - 303}px, 0, 0)`,
  });

  new ScrollMagic.Scene({
    // reverse: false,
    triggerElement: '#trigger1',
    triggerHook: 0,
    duration: 200,
  })
    .setTween(tweenSlide)
    .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
    // reverse: false,
    triggerElement: '#trigger1',
    triggerHook: 0,
    duration: 200,
  })
    .setTween(tweenText)
    .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
    // reverse: false,
    triggerElement: '#trigger1',
    triggerHook: 0,
    duration: 200,
  })
    .setTween(tweenTitle)
    .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
    // reverse: false,
    triggerElement: '#trigger1',
    triggerHook: 0,
    duration: 200,
  })
    .setTween(tweenButton)
    .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
    // reverse: false,
    triggerElement: '#trigger1',
    triggerHook: 0,
    duration: 200,
  })
    .setTween(tweenBlockText)
    .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#trigger1',
    triggerHook: 0,
    duration: 700,
  })
    .setPin('#hero-carousel')
    .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#trigger1',
    triggerHook: 0,
    offset: 200,
    duration: 500,
  })
    .setTween(twennScrollCarousel)
    .addIndicators()
    .addTo(controller);
  // End Carousel Animation

  const swiper2 = new Swiper('#edit1Swiper', {
    modules: [EffectCreative],
    slidesPerView: 2.5,
    grabCursor: true,
    centeredSlides: true,
    effect: 'creative',
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ['-100%', 0, 100],
      },
      next: {
        shadow: true,
        translate: ['100%', 0, -500],
      },
    },
  });
});
