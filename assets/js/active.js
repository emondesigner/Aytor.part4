
  $(function(){
    $('.hero_area').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:5000,
        dots:true,
    });
  })
  
  $(function(){
    $('.arrivals_slider').slick({
      slidesToShow:4,
      slideToScroll:1,
      prevArrow:`<i class="slider_arrow fa-solid fa-chevron-left"></i>`,
      nextArrow:`<i class="slider_arrow fa-solid fa-chevron-right"></i>`,
    });
  })
  $(function(){
    $('.offer_slider').slick({
      slidesToShow:2,
      prevArrow:`<h4 class="slider_arrow left">-</h4>`,
      nextArrow:`<h4 class="slider_arrow right">-</h4>`,
    });
  })
  $(function(){
    $('.latest_new_product_slider').slick({
      slidesToShow:4,
      prevArrow:`<i class="slider_arrow fa-solid fa-arrow-left"></i>`,
      nextArrow:`<i class="slider_arrow fa-solid fa-arrow-right"></i>`,
    });
  })
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))