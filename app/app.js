$(document).ready(function(){
    $('.homeBanner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        
        prevArrow:"<button type='button' class='slick-prev pull-left slide_icon'><i class='fa-solid fa-chevron-right'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right slide_icon'><i class='fa-solid fa-chevron-left'></i></button>"
    })
  })


  //   Secodn Silder
$('.variable-width').slick({
   
    // infinite: true,
    speed: 300,
    slidesToShow: 4,
    centerMode: true,
    prevArrow:"<button type='button' class='slick-prev pull-left slide_icon'><i class='fa-solid fa-chevron-right'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right slide_icon'><i class='fa-solid fa-chevron-left'></i></button>",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow:3,
          slidesToScroll: 3,
          infinite: true,
          
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true
        }
      },
      {
        breakpoint: 579,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
    
  });

  //   Third Slide
$('.variable-width1').slick({
   
    // infinite: true,
    speed: 300,
    slidesToShow: 4,
    arrows:false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow:3,
          slidesToScroll: 3,
          infinite: true,
          
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true
        }
      },
      {
        breakpoint: 579,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
    
    // centerMode: true,
  });
  
  //  four Slide
  $('.s7-_right').slick({
   dot: true,
    infinite: true,
    arrows:false,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      responsive: [
        {
        breakpoint: 768,
        settings: {
          slidesToShow:1,
          slidesToScroll: 1,
          infinite: true,
          
        }
      }
      ]
    });