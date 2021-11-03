$(document).ready(function(){
  
  //menu__slider
  $('.menu__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: "<img src='../image/menu/menu-dots.svg' class='slick-prev' alt='left'>",
    nextArrow: "<img src='../image/menu/menu-dots.svg' class='slick-next' alt='right'>",
  });

  //reviews__slider
  $('.reviews__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows:false,
  });


  //chefs__slider
  $('.chefs__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots:true,
    arrows:false,
  });
});