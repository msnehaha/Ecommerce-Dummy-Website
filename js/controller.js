import * as model from "./model.js";
import { shopView, productContainer } from "./views/shop.js";
import { homeView } from "./views/home.js";
import { renderMap } from "./views/contact.js";
// import { cartDetails } from "./views/prod-details.js";
import { cartView } from "./views/cart-details.js";

const featuredProductContainer = document.createElement("div");
featuredProductContainer.className = "featured__info--links";

const navMain = document.querySelector(".hero__nav-main");

const loadProducts = async function () {
  const data = await model.getRequest("products");
  // console.log(data);
  // console.log(data.products, "testt products data");

  for (var item of data.products) {
    shopView(item);
    homeView(item);

    //Saving data in the localStorage
    localStorage.setItem(item.id, JSON.stringify(item));
  }
};
const loadCarts = async function () {
  const data = await model.getRequest("carts/1");
  for (var item of data.products) {
    console.log(item);
    cartView(item);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  loadProducts();
  renderMap();
  loadCarts();
});

const dropdownEffect = function () {
  document.querySelector(".hero__nav").classList.toggle("show");
};

navMain?.addEventListener("click", dropdownEffect);
