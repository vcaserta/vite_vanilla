import $ from 'jquery';

$(() => {
  $('.js-edt-2-pin').on('click', function () {
    $(this).addClass('active');
    const index = $(this).data('product');
    // swiper.slideTo(index);
    document.querySelectorAll('.edit-2-prd-pin').forEach((elm) => {
      elm.classList.add('!hidden');
    });
    document
      .querySelector(`.edit-2-prd-pin[data-product="${index}"]`)
      .classList.remove('!hidden');
    $(this).siblings().removeClass('active');
  });
});
