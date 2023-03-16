/* eslint-disable no-unused-vars */
import $ from 'jquery';

import ScrollMagic from 'scrollmagic';
import { gsap } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

ScrollMagicPluginGsap(ScrollMagic, gsap);

$(() => {
  const controller = new ScrollMagic.Controller({ container: '.body' });

  const width = window.innerWidth;
  const isMobile = width < 1024;

  if (isMobile) {
    const tweenHeaderColor = gsap.to('.js-header', {
      duration: 2,
      backgroundColor: '#FFF',
      color: '#171614',
      boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.1)',
    });

    new ScrollMagic.Scene({
      // reverse: false,
      triggerElement: '#trigger1',
      triggerHook: 0,
      duration: 30,
    })
      .setTween(tweenHeaderColor)
      .addIndicators()
      .addTo(controller);
  } else {
    const tweenHeaderColor = gsap.to('.js-header', {
      duration: 2,
      backgroundColor: '#FFF',
      color: '#171614',
      height: '80px',
      paddingTop: '9px',
    });

    new ScrollMagic.Scene({
      // reverse: false,
      triggerElement: '#trigger1',
      triggerHook: 0,
      duration: 30,
    })
      .setTween(tweenHeaderColor)
      .addIndicators()
      .addTo(controller);

    const tweenHeaderLogo = gsap.to('.js-header-logo', {
      duration: 2,
      scale: '0.7',
      translateX: '-6px',
      translateY: '6px',
      // transformOrigin: 'left',
    });

    new ScrollMagic.Scene({
      // reverse: false,
      triggerElement: '#trigger1',
      triggerHook: 0,
      duration: 30,
    })
      .setTween(tweenHeaderLogo)
      .addIndicators()
      .addTo(controller);

    const tweenHeaderLogoW = gsap.to('.header__img--w', {
      duration: 2,
      opacity: 0,
    });

    new ScrollMagic.Scene({
      // reverse: false,
      triggerElement: '#trigger1',
      triggerHook: 0,
      duration: 30,
    })
      .setTween(tweenHeaderLogoW)
      .addIndicators()
      .addTo(controller);

    const tweenHeaderLogoB = gsap.to('.header__img--b', {
      duration: 2,
      opacity: 1,
    });

    new ScrollMagic.Scene({
      // reverse: false,
      triggerElement: '#trigger1',
      triggerHook: 0,
      duration: 30,
    })
      .setTween(tweenHeaderLogoB)
      .addIndicators()
      .addTo(controller);

    const tweenHeaderNav = gsap.to('.header__nav', {
      duration: 2,
      paddingLeft: '0',
    });

    new ScrollMagic.Scene({
      // reverse: false,
      triggerElement: '#trigger1',
      triggerHook: 0,
      duration: 30,
    })
      .setTween(tweenHeaderNav)
      .addIndicators()
      .addTo(controller);
  }

  // window.addEventListener('resize', handleResize);
});