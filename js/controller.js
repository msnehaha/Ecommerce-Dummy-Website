import * as model from './model.js';
import {shopView} from './views/shop.js';
import { homeView } from './views/home.js';
import { renderMap } from './views/contact.js';
import { prodDetailsView } from './views/prod-details.js';





const loadShop = async function()
{
    const data = await model.getRequest("products");
    // console.log(data);
    console.log(data.products, "testt products data");
    
    for(var item of data.products)
    {
        
        shopView(item);
        homeView(item);
    }

}


loadShop();
renderMap();

const productContainer = document.querySelector('.product__items--info-links');
const featuredProductContainer = 


productContainer?.addEventListener('click', productDetails);
featuredProductContainer?.addEventListener('click', productDetails);
console.log(productContainer);
console.log(featuredProductContainer);

const productDetails = async()=>{
    const prodId = new URLSearchParams(window.location.search).get("id");
    const data = await model.getRequest(`products/${prodId}`);
    prodDetailsView(data);

}

    // const data = (model.getRequest("products"));
    // console.log('controller data', data);

