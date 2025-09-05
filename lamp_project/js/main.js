import { updateBasket } from "./components/basketFunctions.js";
import {
  filterAndSortLamps,
  updateLampTypes,
} from "./components/filterAndSort.js";
import { goodsOfDay } from "./components/goodsOfDayfunctions.js";
import { validation } from "./components/validation.js";

window.addEventListener("DOMContentLoaded", async () => {
  await filterAndSortLamps();
  updateBasket();
  updateLampTypes();
  goodsOfDay();
  validation();
  const burgerBtn = document.querySelector(".header__catalog-btn");
  const burger = document.querySelector(".main-menu");
  burgerBtn.addEventListener("click", () => {
    burger.classList.add("main-menu--active");
  });

  const closeBurgerBtn = document.querySelector(".main-menu__close");
  closeBurgerBtn.addEventListener("click", () => {
    burger.classList.remove("main-menu--active");
  });

  const citiesBtn = document.querySelector(".location__city");
  citiesBtn.addEventListener("click", () => {
    citiesBtn.classList.toggle("location__city--active");
  });

  const cityName = document.querySelector(".location__city-name");
  const cityItems = document.querySelectorAll(".location__sublink");

  cityItems.forEach((item) => {
    item.addEventListener("click", function () {
      cityName.textContent = this.textContent;
      citiesBtn.classList.remove("location__city--active");
    });
  });

  const basketBtn = document.querySelector(".header__user-btn");
  const basketMenu = document.querySelector(".basket");
  basketBtn.addEventListener("click", function () {
    basketMenu.classList.toggle("basket--active");
    updateBasket();
  });

  const accordions = document.querySelectorAll(".accordion__btn");
  accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
      const activeAccordion = document.querySelector(".accordion__btn--active");

      if (activeAccordion && activeAccordion !== this) {
        activeAccordion.classList.remove("accordion__btn--active");
      }

      this.classList.toggle("accordion__btn--active");
    });
  });

  document
    .querySelectorAll(".custom-checkbox__field, #instock, #all-item")
    .forEach((checkbox) => {
      checkbox.addEventListener("change", filterAndSortLamps);
    });

  document
    .querySelector(".catalog__sort-select")
    .addEventListener("change", filterAndSortLamps);

    const filterForm = document.querySelector(".catalog-form");
    if(filterForm) {
      filterForm.addEventListener("reset", function() {
        setTimeout(() => {
          filterAndSortLamps();
        }, 0);
      });
    }
});
