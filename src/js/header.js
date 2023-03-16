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
      color: 'black',
      boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.1)',
    });

    new ScrollMagic.Scene({
      // reverse: false,
      triggerElement: '#trigger1',
      triggerHook: 0,
      duration: 50,
    })
      .setTween(tweenHeaderColor)
      .addIndicators()
      .addTo(controller);
  }

  // window.addEventListener('resize', handleResize);
});
