$(document).ready(function () {

  //menu__slider
  $('.menu__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // speed:200,
    prevArrow: "<img src='image/menu/menu-dots.svg' class='slick-prev' alt='left'>",//кастомные стрелки
    nextArrow: "<img src='image/menu/menu-dots.svg' class='slick-next' alt='right'>",//кастомные стрелки
  });

  //reviews__slider  
  $('.reviews__slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // speed:200,
    arrows: false,
    dotsClass: "my-dots",//(кастомный dots)
  });

  //gallery__slider
  $('.gallery__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: "<img src='image/gallery/arrow-gallery.svg' class='gallery-prev' alt='left'>",//кастомные стрелки
    nextArrow: "<img src='image/gallery/arrow-gallery.svg' class='gallery-next' alt='right'>",//кастомные стрелки
  });


  //chefs__slider
  $('.chefs__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
    // speed:200,
    dots: true,
    arrows: false,
    dotsClass: "my-dots",
  });
});