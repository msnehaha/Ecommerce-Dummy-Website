"use strict";

const shopProductContainer = document.querySelector(".products__body--shop");

//Fetching Data from API
const API_URL = "https://dummyjson.com/products";

const getProduct = function () {
  fetch(`${API_URL}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.products);

      data.products.forEach((item) => {
        renderShopProducts(item);
      });
    });
};

getProduct();
const renderShopProducts = function (data) {
  console.log("shop");
  console.log(shopProductContainer);
  const html = ` <div class="products__items">
                        <div  class="products__items--image-box">
                            <img src="${data.images?.[0]}" alt="Product Images" class="products__items--image">
                        </div>
                        <a href='../screens/product-details.html?id=${data.id}' class="product__items--info-links link"><h4 class="products__items--info name">${data.title}</h4></a>
                        <h6 class="products__items--price price">$${data.price}</h6>
                    </div>`;

  shopProductContainer.insertAdjacentHTML("beforeend", html);
};
