'use strict';


const featuredContainer = document.querySelector('.featured__body');
const deptList = document.querySelector('.hero__nav-list');
const categoryArr = [];
let uniqueCategoryArr = [];

//Fetching Data from API
const API_URL = 'https://dummyjson.com/products';

const getProduct = function () {
    (fetch(`${API_URL}`).then(res => {
        return res.json();
    }).then(data => {
        console.log(data.products);

        data.products.forEach(item => {
            renderData(item);



            uniqueCategory(item);
        });


        renderCatList();


    }));
}



getProduct();

const renderData = function (data) {
    const html = `<div class="featured__items ">
                <div class="featured__items--image">
                    <img src="${data.images?.[0]}" alt="Orange  " class="image-primary">
                </div>
                <a href='../screens/product-details.html?id=${data.id}' class="featured__info--links"><h4 class="featured__items--info name">${data.title}</h4></a>
                
                <h6 class="featured__items--price price">$${data.price}</h6>
            </div>`;
    featuredContainer.insertAdjacentHTML('beforeend', html);

}


//Unique Category Array
const uniqueCategory = function (data) {

    categoryArr.push(data.category);
    uniqueCategoryArr = [...new Set(categoryArr)];
    // console.log(uniqueCategoryArr);
    return uniqueCategoryArr;
}

const capitalizeName = function (name) {
    return name
        .split(' ')
        .map(word =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()  // Capitalize the first letter, keep the rest lowercase
        )
        .join(' ');
}


const renderCatList = function () {

    for (var category of uniqueCategoryArr) {
        const html = `<li class="hero__nav-item"><a href="#" class="hero__nav-link">${capitalizeName(category)}</a></li>`;

        deptList.insertAdjacentHTML('beforeend', html);
    }



}

