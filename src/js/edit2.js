import $ from 'jquery';
import Swiper, { EffectFade } from 'swiper';

$(() => {
  const swiper = new Swiper('#edit2Swiper', {
    modules: [EffectFade],
    slidesPerView: 1,
    allowTouchMove: false,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
  });

  $('.js-edt-2-pin').on('click', function () {
    $(this).addClass('active');
    const index = $(this).data('product');
    swiper.slideTo(index);
    $(this).siblings().removeClass('active');
  });
});
