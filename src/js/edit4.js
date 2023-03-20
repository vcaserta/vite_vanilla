import $ from 'jquery';

$(() => {
  const width = window.innerWidth;
  const isMobile = width < 1024;

  if (isMobile) {
    $('.js-edt-4-item').on('click', function () {
      $(this).removeClass('resized');
      if ($(this).hasClass('expanded')) {
        $(this).removeClass('expanded');
        $(this).siblings().removeClass('resized');
      } else {
        $(this).siblings().removeClass('expanded');
        $(this).siblings().addClass('resized');
        $(this).addClass('expanded');
      }
    });
  } else {
    $('.js-edt-4-item')
      .on('mouseenter', function () {
        $(this).siblings().addClass('resized');
        $(this).addClass('expanded');
      })
      .on('mouseleave', function () {
        $(this).siblings().removeClass('resized');
        $(this).removeClass('expanded');
      });
  }
});
