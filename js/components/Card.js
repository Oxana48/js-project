import { addToBasket } from "./basketFunctions.js";

export default class Card {
  constructor({ id, name, price, image, availability }) {
    this._id = id;
    this._name = name;
    this._priceNew = price.new;
    this._priceOld = price.old;
    this._image = image;
    this._availability = availability;
  }

  createCard() {
    let cardEl = document.createElement("li");
    cardEl.classList.add("catalog__item");

    cardEl.innerHTML = `
            <div class="product-card">
                <div class="product-card__visual">
                    <img class="product-card__img" src="${
                      this._image
                    }" height="436" width="290" alt="${this._name}">
                    <div class="product-card__more">
                        <a href="#" class="product-card__link btn btn--icon" data-id="${
                          this._id
                        }">
                            <span class="btn__text">В корзину</span>
                            <svg width="24" height="24" aria-hidden="true">
                                <use xlink:href="images/sprite.svg#icon-basket"></use>
                            </svg>
                        </a>
                        <a href="#" class="product-card__link btn btn--secondary">
                            <span class="btn__text">Подробнее</span>
                        </a>
                    </div>
                </div>
                <div class="product-card__info">
                    <h2 class="product-card__title">${this._name}</h2>
                    <span class="product-card__old">
                        <span class="product-card__old-number">${this._priceOld.toLocaleString()}</span>
                        <span class="product-card__old-add">₽</span>
                    </span>
                    <span class="product-card__price">
                        <span class="product-card__price-number">${this._priceNew.toLocaleString()}</span>
                        <span class="product-card__price-add">₽</span>
                    </span>
                    <div class="product-card__tooltip tooltip">
                        <button class="tooltip__btn" aria-label="Показать подсказку">
                            <svg class="tooltip__icon" width="5" height="10" aria-hidden="true">
                                <use xlink:href="images/sprite.svg#icon-i"></use>
                            </svg>
                        </button>
                        <div class="tooltip__content">
                            <span class="tooltip__text">Наличие товара по городам:</span>
                            <ul class="tooltip__list">
                                <li class="tooltip__item">Москва: <span class="tooltip__count">${
                                  this._availability.moscow
                                }</span></li>
                                <li class="tooltip__item">Оренбург: <span class="tooltip__count">${
                                  this._availability.orenburg
                                }</span></li>
                                <li class="tooltip__item">Санкт-Петербург: <span class="tooltip__count">${
                                  this._availability.saintPetersburg
                                }</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;

    const tippyButtons = cardEl.querySelector(".tooltip__btn");
    const tippyContent = cardEl.querySelector(".tooltip__content").innerHTML;

    tippy(tippyButtons, {
      content: tippyContent,
      allowHTML: true,
      placement: "top",
      interactive: true,
      theme: "custom-tooltip",
      animation: "fade",
      delay: [100, 0],
      appendTo: () => document.body,
    });

    const addBtn = cardEl.querySelector(".product-card__link.btn.btn--icon");
    addBtn.addEventListener("click", (event) => {
      event.preventDefault();
      addToBasket(this._id);
    });
    return cardEl;
  }
}
