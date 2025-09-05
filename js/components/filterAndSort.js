import {getData} from "./getData.js";
import { renderCards, displayPagination} from "./pagination.js";
import { currentPage, lampsPerView } from "./pagination.js";

export async function updateLampTypes() {
  const lamps = await getData();

  const checkboxes = document.querySelectorAll(".custom-checkbox__field");

  checkboxes.forEach((checkbox) => {
    const typeValue = checkbox.value;

    const count = lamps.filter((lamp) => lamp.type.includes(typeValue)).length;

    const countSpan = checkbox
      .closest(".custom-checkbox")
      .querySelector(".custom-checkbox__count");

    if (countSpan) {
      countSpan.textContent = count;
    }
  });
}

export let filteredLamps = [];

export async function filterAndSortLamps() {
  const lamps = await getData();
  const checkboxes = document.querySelectorAll(
    ".custom-checkbox__field:checked"
  );
  const checkedTypes = Array.from(checkboxes).map((checkbox) => checkbox.value);
  const radioInstock = document.getElementById("instock");
  const selectEl = document.querySelector(".catalog__sort-select");

  let filteredLamps = lamps.filter((lamp) => {
    return (
      (checkedTypes.length === 0 ||
        checkedTypes.some((type) => lamp.type.includes(type))) &&
      (!radioInstock.checked ||
        lamp.availability.moscow > 0 ||
        lamp.availability.orenburg > 0 ||
        lamp.availability.saintPetersburg > 0)
    );
  });

  const criteria = selectEl.value;

  if (criteria === "price-min") {
    filteredLamps.sort((a, b) => a.price.new - b.price.new);
  } else if (criteria === "price-max") {
    filteredLamps.sort((a, b) => b.price.new - a.price.new);
  } else if (criteria === "rating-max") {
    filteredLamps.sort((a, b) => b.rating - a.rating);
  }
  renderCards(filteredLamps, lampsPerView, currentPage);
  displayPagination(filteredLamps, lampsPerView);
}
