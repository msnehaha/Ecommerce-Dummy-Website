import  { renderData } from './view.js';


const parentElement = document.querySelector(".featured__body");
export const featuredProductContainer =  document.querySelector('.featured__info--links');

export const homeView = (data)=>{
    
    const markup =  `<div class="featured__items ">
                <div class="featured__items--image">
                    <img src="${data.images?.[0]}" alt="Orange  " class="image-primary">
                </div>
                <a href='../screens/product-details.html?id=${data.id}' class="featured__info--links"><h4 class="featured__items--info name">${data.title}</h4></a>
                
                <h6 class="featured__items--price price">$${data.price}</h6>
            </div>`;
if(parentElement)
{
    renderData(parentElement, markup);
}


};



