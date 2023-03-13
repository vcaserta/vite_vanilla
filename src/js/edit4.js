import $ from 'jquery';

$(() => {
  $('.js-edt-4-item')
    .on('mouseenter', function () {
      $(this).siblings().addClass('resized');
      $(this).addClass('expanded');
    })
    .on('mouseleave', function () {
      $(this).siblings().removeClass('resized');
      $(this).removeClass('expanded');
    });
});
