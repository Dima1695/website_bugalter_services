var burgerElement = document.querySelector(".burger");
if(burgerElement) {
  burgerElement.addEventListener("click", function() {
    this.classList.toggle("active");
    document.querySelector(".header__conteiner").classList.toggle("active");
    document.body.classList.toggle("lock")
  })
}

var swiper = new Swiper(".promo__swiper", {
    pagination: {
      el: ".promo .swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".promo .arrow_next",
        prevEl: ".promo .arrow_prew",
      },
  });


  var swiper = new Swiper(".clients__swiper", {
    slidesPerView: 4,
      spaceBetween: 30,
    pagination: {
      el: ".clients .swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".clients .arrow_next",
        prevEl: ".clients .arrow_prew",
      },
      
      breakpoints: {
        200: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        760: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1010: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
  });


var swiper = new Swiper(".reviys__swiper", {
    pagination: {
      el: ".reviys .swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".reviys .arrow_next",
        prevEl: ".reviys .arrow_prew",
      },
});