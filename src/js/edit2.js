import $ from 'jquery';

$(() => {
  $('.js-edt-2-pin').on('click', function () {
    $(this).addClass('active');
    const index = $(this).data('product');
    // swiper.slideTo(index);
    document.querySelectorAll('.edit-2-prd-pin').forEach((elm) => {
      elm.classList.add('!hidden');
    });
    document.querySelectorAll('.edit-2-prd-pin').forEach((elm) => {
      elm.classList.remove('animate-fade-in');
    });
    document
      .querySelector(`.edit-2-prd-pin[data-product="${index}"]`)
      .classList.remove('!hidden');
    document
      .querySelector(`.edit-2-prd-pin[data-product="${index}"]`)
      .classList.add('animate-fade-in');
    $(this).siblings().removeClass('active');
  });
});
