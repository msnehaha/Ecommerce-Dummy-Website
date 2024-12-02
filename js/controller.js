import * as model from './model.js';
import {shopView, productContainer} from './views/shop.js';
import { homeView } from './views/home.js';
import { renderMap } from './views/contact.js';
import { prodDetailsView } from './views/prod-details.js';




const featuredProductContainer = document.createElement('div')
featuredProductContainer.className = "featured__info--links";

const navMain = document.querySelector('.hero__nav-main');




const loadShop = async function()
{
    const data = await model.getRequest("products");
    // console.log(data);
    // console.log(data.products, "testt products data");
    
    for(var item of data.products)
    {
        
        shopView(item);
        homeView(item);
    }

}


loadShop();
renderMap();



const productDetails = async function(){
    console.log('hey');
    const prodId = new URLSearchParams(window.location.search).get("id");
    const data = await model.getRequest(`products/${prodId}`);
    prodDetailsView(data);

}

productContainer.addEventListener('click', function(event)
{
    if (event.target.closest('.products__items')) {
        console.log('Product clicked!');
        console.log(event.target, event.currentTarget)
    }
});
console.log(productContainer);

featuredProductContainer.addEventListener('click', productDetails);



const dropdownEffect = function()
{
   
    document.querySelector('.hero__nav').classList.toggle('show');
}

navMain?.addEventListener('click', dropdownEffect);

