$(function(){
   $(".btn_toggler").click(function(){
    let logo = $("nav .navLogo");
    let navMenu = $("#myCusNav ul");
    logo.toggleClass("activeLogo")
    navMenu.toggleClass("activeMenu")
   })
   $("#banner .banner_slider").slick({
      prevArrow:'.left_arrow',
      nextArrow:'.right_arrow',
      fade: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
   })
   $('.service_content').slick({
      slidesToShow: 3,
      prevArrow:'.left_arrow',
      nextArrow:'.right_arrow',

   })
})
