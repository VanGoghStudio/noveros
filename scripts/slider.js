$('.certificates-slider').slick({
      infinite: false,
      slidesToShow: 5,
      slidesToScroll: 5,
      dotsClass: 'dots',
      dots: true, 
      responsive: [
            {
                  breakpoint: 769, 
                  settings: {
                        slidesToShow: 4, 
                        slidesToScroll: 4
                  }
            },
            {
                  breakpoint: 649, 
                  settings: {
                        slidesToShow: 3, 
                        slidesToScroll: 3
                  }
            },
            {
                  breakpoint: 490, 
                  settings: {
                        slidesToShow: 2, 
                        slidesToScroll: 2
                  }
            }
      ]
});


$('.awards__title-awards').click(e => {
      e.preventDefault();

      if ($('.awards__title-awards').hasClass('title_outline')) {
            $('.awards__title-awards').removeClass('title_outline');
            $('.awards__title-certificates').addClass('title_outline');
      }

      if ($('.awards-slider').hasClass('slick-initialized') === false) {
            $('.awards-slider').slick({
                  infinite: false,
                  slidesToShow: 5,
                  slidesToScroll: 5,
                  dotsClass: 'dots',
                  dots: true,
                  responsive: [
                        {
                              breakpoint: 769, 
                              settings: {
                                    slidesToShow: 4, 
                                    slidesToScroll: 4
                              }
                        },
                        {
                              breakpoint: 649, 
                              settings: {
                                    slidesToShow: 3, 
                                    slidesToScroll: 3
                              }
                        },
                        {
                              breakpoint: 490, 
                              settings: {
                                    slidesToShow: 2, 
                                    slidesToScroll: 2
                              }
                        }
                  ]
            });
      }
      $('.certificates-slider').css('display', 'none');
      $('.awards-slider').css('display', 'block');
})

$('.awards__title-certificates').click(e => {
      e.preventDefault();

      if ($('.awards__title-certificates').hasClass('title_outline')) {
            $('.awards__title-certificates').removeClass('title_outline');
            $('.awards__title-awards').addClass('title_outline');
      }


      if ($('.certificates-slider').hasClass('slick-initialized') === false) {
            $('.certificates-slider').slick({
                  infinite: false,
                  slidesToShow: 5,
                  slidesToScroll: 5,
                  dotsClass: 'dots',
                  dots: true,
                  responsive: [
                        {
                              breakpoint: 769, 
                              settings: {
                                    slidesToShow: 4, 
                                    slidesToScroll: 4
                              }
                        },
                        {
                              breakpoint: 649, 
                              settings: {
                                    slidesToShow: 3, 
                                    slidesToScroll: 3
                              }
                        },
                        {
                              breakpoint: 490, 
                              settings: {
                                    slidesToShow: 2, 
                                    slidesToScroll: 2
                              }
                        }
                  ]
            });
      }

      $('.awards-slider').css('display', 'none');
      $('.certificates-slider').css('display', 'block');

})

// SLIDER NEWS

$('.news-slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      responsive: [
            {
                  breakpoint: 649, 
                  settings: {
                        slidesToShow: 3, 
                        slidesToScroll: 3
                  }
            },
            {
                  breakpoint: 490, 
                  settings: {
                        slidesToShow: 2, 
                        slidesToScroll: 2
                  }
            }
      ]
});