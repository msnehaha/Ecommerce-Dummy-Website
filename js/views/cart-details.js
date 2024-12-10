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
        <input type="text" value=${data.quantity} class="cart-details__input-field"/>
        <button class="cart-details__btn cart-details__btn-adder">
          +
        </button>
      </div>
      <p>${data.total.toFixed(2)}</p>
      <div class="cart-details__cancel">
        <svg class="cart-details__cancel-icon icon">
          <use xlink:href="../img/sprite.svg#icon-close"></use>
        </svg>
      </div>
    </div>
  </div>
  <div class="container__divider"></div>;`;

  if(parentElement)renderData(parentElement, markup);

  const inputField = document.querySelector(".cart-details__input-field");
  const btnSubtractor = document.querySelector(
    " .cart-details__btn--subtractor"
  );
  const btnAdder = document.querySelector(".cart-details__btn-adder");
  
  btnAdder.addEventListener("click", function () {
    console.log('add');
    
    inputField.textContent = inputField.value+ 1;
  });
  btnSubtractor.addEventListener("click", function () {
    if (inputField.value > 0) inputField.textContent = inputField.value - 1;
  });
  
};

