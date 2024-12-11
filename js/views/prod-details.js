import { renderData } from "./view.js";
const parentElement = document.querySelector(".prod-details__body");

const prodId = new URLSearchParams(window.location.search).get("id");
const data = JSON.parse(localStorage.getItem(prodId));

const prodDetailsView = function (data) {
  const markup = `<div class="prod-details__body--left">
            <img src="${data.images?.[0]}" alt="Product Image" class="prod-details__image">
        </div>
        <div class="prod-details__body--right">
            <h3 class="prod-details__body--header">${data.title}</h3>
            <div class="prod-details__body--review">
                <span>(${data.reviews.length} reviews)</span>
            </div>
            <h2 class="prod-details__body--price">$${data.price}</h2>
            <p class="prod-details__body--info">
                ${data.description}
            </p>
            <div class="prod-details__body--quantity">
                <div class="prod-details__body--input">
                    <button class="prod-details__body--btn prod-details__body--btn-subtractor">-</button>
                    <input type="number" class="prod-details__body--input-field" value='1'>
                    <button class="prod-details__body--btn prod-details__body--btn-adder" >+</button>
                </div>

                <button class="prod-details__cart--btn btn" >Add To Cart</button>
                <svg class=" prod-details__body--favourite-icon icon icon-grey">
                    <use xlink:href="../img/sprite.svg#icon-heart-o"></use>
                </svg>
            </div>
            <div class="divider"></div>
            <div class="prod-details__body--shipping-info">
                <div class="prod-details__body--shipping-title">
                    <p>Availability</p>
                    <p>Shipping</p>
                </div>
                <div class="prod-details__body--shipping-desc">
                    <p>In Stock</p>
                    <p>01 day shipping</p>
                </div>
            </div>
        </div>`;
  if (parentElement) {
    renderData(parentElement, markup);
  }
};

prodDetailsView(data);

const inputField = document.querySelector(".prod-details__body--input-field");
const btnSubtractor = document.querySelector(
  " .prod-details__body--btn-subtractor"
);
const btnAdder = document.querySelector(".prod-details__body--btn-adder");
console.log(btnAdder);

btnAdder.addEventListener("click", function () {
  inputField.textContent = inputField.value++;
});
btnSubtractor.addEventListener("click", function () {
  if (inputField.value > 0) inputField.textContent = inputField.value--;
});

const addToCartBtn = document.querySelector(".prod-details__cart--btn");
addToCartBtn.addEventListener("click", function () {
  if (inputField.value > 0) {
    data.quantity
      ? (data.quantity += inputField.value)
      : (data.quantity = inputField.value);
    window.location.href = "../../screens/cart-details.html";
  }
});
