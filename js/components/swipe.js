export function swipeInitiallization() {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    spaceBetween: 20,

    navigation: {
      nextEl: ".day-products__navigation-btn--next",
      prevEl: ".day-products__navigation-btn--prev",
    },

    pagination: {
      el: ".swiper-pagination",
      type: "numbers",
    },
  });
  return swiper;
}
