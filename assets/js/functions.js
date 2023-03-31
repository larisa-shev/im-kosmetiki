(function ($) {
  'use strict';

  $(document).ready(function () {


    $('.big-slider').slick({
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      centerMode: true,
      centerPadding: '40px',
      focusOnSelect: true,
      variableWidth: true
    });

    $('.popular-items-slider').slick({
      arrows: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
    });

    $('.new-items-slider').slick({
      arrows: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
    });

    $('.promotions-items-slider').slick({
      arrows: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
    });

    $('.watched-items-slider').slick({
      arrows: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
    });


    $('#priceRange').slider({
      range: true,
      values: [ 50, 200 ],
      min: 0,
      max: 300,
      slide: function(event, ui) {
        $("#inputValue1").val(ui.values[ 0 ]);
        $("#inputValue2").val(ui.values[ 1 ]);
      }
    });
    $("#inputValue1").val($("#priceRange").slider("values", 0));
    $("#inputValue2").val($("#priceRange").slider("values", 1));
    $('#inputValue1').change(function(){
    var amount_val_1 = $('#inputValue1').val();
      $('#priceRange').slider('values', 0, amount_val_1);
    });
    $('#inputValue2').change(function(){
    var amount_val_2 = $('#inputValue2').val();
      $('#priceRange').slider('values', 1, amount_val_2);
    });


    function incrementValue(e) {
      e.preventDefault();
      var fieldName = $(e.target).data('field');
      var parent = $(e.target).closest('div');
      var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

      if (!isNaN(currentVal)) {
        parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
      } else {
        parent.find('input[name=' + fieldName + ']').val(0);
      }
    }

    function decrementValue(e) {
      e.preventDefault();
      var fieldName = $(e.target).data('field');
      var parent = $(e.target).closest('div');
      var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

      if (!isNaN(currentVal) && currentVal > 0) {
        parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
      } else {
        parent.find('input[name=' + fieldName + ']').val(0);
      }
    }

    $('.product-amount').on('click', '.button-plus', function(e) {
      incrementValue(e);
    });

    $('.product-amount').on('click', '.button-minus', function(e) {
      decrementValue(e);
    });


    $('.product-image-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.product-image-nav-slider'
    });
    $('.product-image-nav-slider').slick({
      arrows: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.product-image-slider',
      focusOnSelect: true,
      vertical: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            vertical: false
          }
        },
        {
          breakpoint: 1024,
          settings: {
            vertical: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            vertical: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            vertical: false
          }
        }
      ]
    });





  }); //end ready

}(jQuery));