// import { render } from 'node-sass';
import  { renderData } from './view.js';


const parentElement = document.querySelector(".products__body--shop");
export const productContainer = document.createElement('div');
productContainer.className = "products__items";



export const shopView = (data)=>{
    
    const markup =  ` <div class="products__items">
    <div  class="products__items--image-box">
        <img src="${data.images?.[0]}" alt="Product Images" class="products__items--image">
    </div>
    <a href='../screens/product-details.html?id=${data.id}' class="product__items--info-links link"><h4 class="products__items--info name">${data.title}</h4></a>
    <h6 class="products__items--price price">$${data.price}</h6>
</div>`

if(parentElement){renderData(parentElement, markup);}

};





