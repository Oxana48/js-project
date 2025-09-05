export function showError(message) {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
    <div class = "modal__content">
    <button class="modal__close" type="button"><svg class="main-menu__icon" width="24" height="24" aria-hidden="true">
            <use xlink:href="images/sprite.svg#icon-close"></use>
          </svg>
          </button>
    <p class="modal__message">${message}</p>
    </div>
    `;
    document.body.appendChild(modal);
  
    modal.querySelector(".modal__close").addEventListener("click", () => {
      modal.remove();
    });
  }
  