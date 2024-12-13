import * as model from "./model.js";
import { shopView, productContainer } from "./views/shop.js";
import { homeView } from "./views/home.js";
import { renderMap } from "./views/contact.js";



const loginButton = document.querySelector(
  ".header__primary-right--login-text"
);
const navMain = document.querySelector(".hero__nav-main");
const featuredProductContainer =   document.querySelector('.featured__body');
const shopProductContainer = document.querySelector('.products__body--shop');

const searchButton = document.querySelector('.heroscreen__primary--btn-field');
const searchField =  document.querySelector('.heroscreen__primary--search-field-input');
const userProfile = document.querySelector('.header__primary-right--user-icon');
const profileUpdateBtn = document.querySelector('.userform__submit--btn ');

let skipData = 0;


const loadProducts = async function (skipData) {
  const data = await model.getRequest(`products?limit=15&skip=${skipData}`);

if(featuredProductContainer)
  featuredProductContainer.innerHTML = '';
if(shopProductContainer)
    shopProductContainer.innerHTML = '';
  for (var item of data.products) {
  
    
    shopView(item);
    homeView(item);

    //Saving data in the localStorage
    localStorage.setItem(item.id, JSON.stringify(item));
  }
};


document.addEventListener("DOMContentLoaded", () => {
  loadProducts(skipData);
  renderMap();
  // loadCarts();
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

document.querySelector(".loginform")?.addEventListener("submit", getLoginInfo);

loginButton?.addEventListener("click", toggleButton);

const prevPagination = document.querySelector('.pagination__links--prev');
const nextPagination = document.querySelector('.pagination__links--next');

if(prevPagination)
prevPagination.addEventListener('click', function()
{
  if(skipData>0)
  {
    skipData=skipData-15;
    loadProducts(skipData);
    console.log(skipData)
  }
  
})

if(nextPagination)
nextPagination.addEventListener('click', function()
{
  
    skipData = skipData +15;
    loadProducts(skipData);
    console.log(skipData);
  
})

searchButton.addEventListener('click',async  function()
{
  console.log(searchField.value);
  if(searchField.value)
  {
    const data = await model.searchQuery(searchField.value);
    console.log(data);
    for(var item of data.products)
    {
      
     console.log(item);
    }
    // console.log('hey');
    searchField.value = '';
  }
  else{
    alert('No text in the search field');
  }
})

document.querySelector('.menu-toggle')?.addEventListener('click', function () {
  const mobileNav = document.querySelector('.mobile-nav');
  mobileNav.classList.toggle('active');
});

profileUpdateBtn.addEventListener('click', function(e)
{
  const accessToken = localStorage.getItem("accessToken");
  console.log(model.getProfile(accessToken));

})

const updateTextInput = (val)=>{
  document.getElementById('output').value=val; 
}