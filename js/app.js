// Homepage Starts
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
// portfolio
   $('.port_slider').slick({
    slidesToShow:4,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
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
          slidesToShow: 2,
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
  //preloader
  $(window).on('load',function(){
   $('.preloader').fadeOut(3500)
  })
  // BackToTop button
  $(window).on('scroll',function(){
    if ($(window).scrollTop() > 300){
      $('.backToTop').fadeIn()
    }
    else{
      $('.backToTop').fadeOut()
    }
  })
  $('.backToTop').on('click',function(){
    $('html,body').animate({
        scrollTop:0,
    },1000)
  })
  // Fixed Navbar
  $(window).on('scroll',function(){
    if ($(window).scrollTop()>$('#MyNav').height()){
        $('#MyNav').addClass('menu_animate')
    }
    else {
        $('#MyNav').removeClass('menu_animate')
    }
   })
})
// CounterUp Starts
const counterUp = window.counterUp.default

const callback = entries => {
	entries.forEach( entry => {
		const el = entry.target
		if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
			counterUp( el, {
				duration: 4000,
				delay: 16,
			} )
			el.classList.add( 'is-visible' )
		}
	} )
}

const IO = new IntersectionObserver( callback, { threshold: 1 } )

const el = document.querySelector("#counter_up")
IO.observe( el )
// CounterUp Ends

// Homepage ends

// About Us Page starts
$(function(){
  $('.team_slider').slick({
    slidesToShow:3,
    slidesToScroll:1,
    centerMode:true,
    centerPadding:'0px',
    // autoplay:true,
    prevArrow:".team_left",
    nextArrow:".team_right",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
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
      },
      {
        breakpoint: 400,
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
})
// About Us Page ends

// Blog List Page
$(function(){
  var mixer = mixitup('.filteritems');
})
// Blog List Page