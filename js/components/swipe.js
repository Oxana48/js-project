export function swipeInitiallization() {
  if (!document.querySelector('.swiper')) {
    console.error('Swiper container not found!');
    return null;
  }
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 10,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    },

    navigation: {
      nextEl: ".day-products__navigation-btn--next",
      prevEl: ".day-products__navigation-btn--prev",
    },

    pagination: {
      el: ".swiper-pagination",
      type: "numbers",
    },
  });
  console.log('Swiper initialized successfully');
  return swiper;
}
