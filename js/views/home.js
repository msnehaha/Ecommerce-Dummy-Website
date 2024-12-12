import  { renderData } from './view.js';



const parentElement = document.querySelector('.featured__body');

export const homeView = (data)=>{
    
    const markup =  `<div class="featured__items ">
                <div class="featured__items--image">
                    <img src="${data.images?.[0]}" alt="Orange  " class="image-primary">
                </div>
                  <div class="featured__items--icons">
                  <a href="#" class="featured__link link">
                     <svg class="featured__icon icon">
                        <use xlink:href="img/sprite.svg#icon-heart"></use>
                    </svg>
                  </a>
               
                       <a href="#" class="featured__link link">
                        <svg class="featured__icon icon">
                        <use xlink:href="img/sprite.svg#icon-retweet"></use>
                    </svg>
                  </a>

                        <a href="screens/cart-details.html" class="featured__link link">
                        <svg class="featured__icon icon ">
                        <use xlink:href="img/sprite.svg#icon-shopping-cart"></use>
                    </svg>
                  </a>
                     
                    
                </div>
                <a href='../screens/product-details.html?id=${data.id}' class="featured__info--links"><h4 class="featured__items--info name" onclick = "productDetails">${data.title}</h4></a>
                
                <h6 class="featured__items--price price">$${data.price}</h6>
            </div>`;
if(parentElement)
{
    renderData(parentElement, markup);
}


};



