import { getData } from "./getData.js";

export class BasketCard {
  constructor(image, name, price) {
    this._image = image;
    this._name = name;
    this._priceNew = price.new;
  }

  createBasketCard() {
    const basketItem = document.createElement("li");
    basketItem.classList.add("basket__item");

    basketItem.innerHTML = `
        <div class="basket__img">
          <img src="${this._image}" alt="Фотография товара" height="60" width="60">
        </div>
        <span class="basket__name">${this._name}</span>
        <span class="basket__price">${this._priceNew} руб</span>
        <button class="basket__item-close" type="button">
          <svg class="main-menu__icon" width="24" height="24" aria-hidden="true">
            <use xlink:href="images/sprite.svg#icon-close"></use>
          </svg>
        </button>
      `;
    const closeBtn = basketItem.querySelector(".basket__item-close");
    closeBtn.addEventListener("click", () => {
      basketItem.remove();
      updateBasket();
    });

    return basketItem;
  }
}

export function updateBasket() {
  const basketEl = document.querySelector(".basket__empty-block");
  const basketCount = document.querySelector(".header__user-count");
  const basketList = document.querySelector(".basket__list");
  const basketSubmit = document.querySelector(".basket__link");

  if (!basketEl || !basketCount || !basketList || !basketSubmit) {
    console.warn("Элементы корзины не найдены");
    return;
  }

  if (basketList.children.length === 0) {
    basketSubmit.style.display = "none";
    basketEl.style.display = "block";
    basketCount.textContent = "0";
  } else {
    basketEl.style.display = "none";
    basketSubmit.style.display = "flex";
    basketCount.textContent = basketList.children.length;
  }
}

export async function addToBasket(itemId) {
  const lamps = await getData();
  const lamp = lamps.find((lamp) => lamp.id === itemId);
  if (!lamp) return;
  const basketList = document.querySelector(".basket__list");
  const basketCard = new BasketCard(lamp.image, lamp.name, lamp.price);

  basketList.append(basketCard.createBasketCard());
  updateBasket();
}
