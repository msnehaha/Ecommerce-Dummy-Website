import { renderData } from "./view.js";

const parentElement = document.querySelector(".cart-details");

export const cartView = (data) => {
  const markup = `<div class="cart-details__prod--info">
    <div class="cart-details__prod--info--title">
      <img src="${data.thumbnail}" alt="Prod Image" class="cart-details__prod--img" />
      <p>${data.title}</p>
    </div>
    <div class="cart-details__prod--details">
      <p>${data.price}</p>
      <div class="cart-details__prod-quantity">
        <button class="cart-details__btn cart-details__btn--subtractor">
          -
        </button>
        <input type="number" value="1" />
        <button class="cart-details__btn cart-details__btn--subtractor">
          +
        </button>
      </div>
      <p>${data.total}</p>
      <div class="cart-details__cancel">
        <svg class="cart-details__cancel-icon icon">
          <use xlink:href="../img/sprite.svg#icon-close"></use>
        </svg>
      </div>
    </div>
  </div>
  <div class="container__divider"></div>;`;

  renderData(parentElement, markup);
};
