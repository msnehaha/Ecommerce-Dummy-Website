"use strict";
const API_URL = "https://dummyjson.com/products";
const prodDetailsContainer = document.querySelector(".prod-details__body");

async function getProdById() {
  const prodId = new URLSearchParams(window.location.search).get("id");

  console.log(prodId);
  const response = await fetch(`${API_URL}/${prodId}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
  console.log(response);
  renderData(response);
}

getProdById();

const renderData = function (data) {
  const html = `<div class="prod-details__body--left">
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
                
                <button class="prod-details__cart--btn btn" onclick="location.href='../screens/cart-details.html'">Add To Cart</button>
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

  prodDetailsContainer.insertAdjacentHTML("afterbegin", html);

  const inputField = document.querySelector(".prod-details__body--input-field");
  const btnSubtractor = document.querySelector(
    " .prod-details__body--btn-subtractor"
  );
  const btnAdder = document.querySelector(".prod-details__body--btn-adder");

  btnAdder.addEventListener("click", function () {
    inputField.textContent = inputField.value++;
  });
  btnSubtractor.addEventListener("click", function () {
    if (inputField.value > 0) inputField.textContent = inputField.value--;
  });
};
