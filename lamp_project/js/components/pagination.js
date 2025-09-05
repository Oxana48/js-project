import Card from "./Card.js";

export let currentPage = 1;
export let lampsPerView = 6;

export function renderCards(arr, perView, page) {
  const catalog = document.querySelector(".catalog__list");
  catalog.innerHTML = "";

  const start = perView * (page - 1);
  const end = start + perView;
  const paginatedLamps = arr.slice(start, end);

  paginatedLamps.forEach((item) => {
    const card = new Card(item);
    catalog.append(card.createCard());
  });
}

export function displayPagination(arr, perView) {
  const paginationEl = document.querySelector(".catalog__pagination");
  paginationEl.innerHTML = "";
  const pagesCount = Math.ceil(arr.length / perView);

  for (let i = 1; i <= pagesCount; i++) {
    const liEl = document.createElement("li");
    liEl.classList.add("catalog__pagination-item");
    paginationEl.appendChild(liEl);

    const btnEl = document.createElement("button");
    btnEl.classList.add("catalog__pagination-link");
    btnEl.innerText = i;

    btnEl.addEventListener("click", () => {
      currentPage = i;
      renderCards(arr, perView, currentPage);
    });

    liEl.append(btnEl);
    paginationEl.append(liEl);
  }
}
