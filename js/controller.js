import * as model from "./model.js";
import { shopView, productContainer } from "./views/shop.js";
import { homeView } from "./views/home.js";
import { renderMap } from "./views/contact.js";
// import { cartDetails } from "./views/prod-details.js";
import { cartView } from "./views/cart-details.js";

const featuredProductContainer = document.createElement("div");
featuredProductContainer.className = "featured__info--links";
const loginButton = document.querySelector(
  ".header__primary-right--login-text"
);

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

document
  .querySelector(".add__product--btn")
  ?.addEventListener("click", function () {
    window.location.href = "screens/addProduct.html";
  });
if (loginButton) {
  if (localStorage.getItem("accessToken")) {
    loginButton.innerHTML = "Log Out";

    // localStorage.removeItem("acce")
  } else {
    loginButton.innerHTML = "Log In";
  }
}

const toggleButton = function () {
  if (localStorage.getItem("accessToken")) {
    alert("Logging Out");
    localStorage.removeItem("accessToken");
    loginButton.innerHTML = "Log In";
  } else {
    window.location.href = "../screens/loginPage.html";
  }
};

let getLoginInfo = async function (e) {
  e.preventDefault();
  let user = {
    username: document.querySelector("#username").value,
    password: document.querySelector("#password").value,
  };
  const response = await model.loginPage(user);

  if (response) {
    console.log("Login info:", response);
    if (response.accessToken) {
      // toggleButton();
      localStorage.setItem("accessToken", response.accessToken);
      window.location.href = "../index.html";
    } else {
      alert("Enter the correct credentials!");
    }
    // Handle success (e.g., redirect or store token)
  } else {
    console.error("Login failed");
  }
};

document.querySelector("#loginform")?.addEventListener("submit", getLoginInfo);

loginButton?.addEventListener("click", toggleButton);
