$(function(){
   $(".btn_toggler").click(function(){
    let logo = $("nav .navLogo");
    let navMenu = $("#myCusNav ul");
    logo.toggleClass("activeLogo")
    navMenu.toggleClass("activeMenu")
   })
   $("#banner .banner_slider").slick({
      prevArrow:'.left_arrow-banner',
      nextArrow:'.right_arrow-banner',
      fade: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
   })
   $('.service_content').slick({
      slidesToShow: 3,
      prevArrow:'.left_arrow',
      nextArrow:'.right_arrow',
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
           }
         },
         {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
         // You can unslick at a given breakpoint now by adding:
         // settings: "unslick"
         // instead of a settings object
      ]
  })
// blog  
  $('.blogSlider').slick({
    slidesToShow:3,
    slidesToScroll: 1,
    prevArrow:'.blogLeft',
    nextArrow:'.blogRight',
    centerPadding: "0px",
    // autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    centerMode: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
           settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
         // You can unslick at a given breakpoint now by adding:
         // settings: "unslick"
         // instead of a settings object
    ]
  })
// Counter Up 
  $('#num1').countMe(7,5);
  $('#num2').countMe(9,6);
  $('#num3').countMe(10,8);
  $('#num4').countMe(11,9);

// testimonial 
  $(".testimonial_content").slick({
    slidesToShow: 1,
    fade:true,
    prevArrow:'.testi_left',
    nextArrow:'.testi_right',
    asNavFor:".testimonial_images",
  })
  $('.testimonial_images').slick({
    slidesToShow:3,
    centerMode:true,
    arrows:false,
    centerPadding: "0px",
    asNavFor:".testimonial_content",
  })
  // web_icon
  $(".web_icon_slider").slick({
    slidesToShow:5,
    slidesToScroll:1,
    centerMode:true,
    autoplay: true,
    autoplaySpeed:3000,
    centerPadding: "0px",
    prevArrow:'.web_left',
    nextArrow:'.web_right',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 768,
           settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
         // You can unslick at a given breakpoint now by adding:
         // settings: "unslick"
         // instead of a settings object
    ]
  })
})
