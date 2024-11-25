'use strict';


const featuredContainer = document.querySelector('.featured__body');
const deptList = document.querySelector('.hero__nav-list');
const shopProductContainer = document.querySelector('.products__body--shop');

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            const { latitude, longitude } = position.coords;
            // Initialize the map centered on the user's location
            const map = L.map('map').setView([latitude, longitude], 13);

            // Add OpenStreetMap tile layer
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            // Add a marker at the user's location
            L.marker([latitude, longitude]).addTo(map)
                .bindPopup(`<div class='popup'>
                        <h1>Panipokhari</h1>

                        <p>Phone: +123 456 789</p>
                        
                        
                        </div>
                        `)
                .openPopup();
        },
        function () {
            alert("Couldn't get your position.");
        }
    );
} else {
    alert("Geolocation is not supported by this browser.");
}



//Fetching Data from API
const API_URL = 'https://dummyjson.com/products';

const getProduct = function () {
    (fetch(`${API_URL}`).then(res => {
        return res.json();
    }).then(data => {
        console.log(data.products);

        for (var item in data.products) {
            console.log(data.products[item])
            renderData(data.products[item]);
            renderShopProducts(data.products[item]);
            // uniqueCategory(data.products[item]);

        }

    }));
}



getProduct();

const renderData = function (data) {
    const html = `<div class="featured__items ">
                <div class="featured__items--image">
                    <img src="${data.images?.[0]}" alt="Orange  " class="image-primary">
                </div>
                <a href='${API_URL}/${data.id}' class="featured__info--links"><h4 class="featured__items--info name">${data.title}</h4></a>
                
                <h6 class="featured__items--price price">$${data.price}</h6>
            </div>`;
    featuredContainer.insertAdjacentHTML('beforeend', html);

}

const uniqueCategory = function (data) {
    const categoryArr = [];
    categoryArr.push(data.category);
    const uniqueCategory = [];
    uniqueCategory.push(categoryArr);
    // const uniqueCategory = categoryArr.
    console.log(categoryArr);

}

// const renderCatList = function (data) {

//     const html = `<li class="hero__nav-item"><a href="#" class="hero__nav-link">Items</a></li>`;

// }



// const upperCategory = function(value)
// {
//     return value[0].charAt(0).toUpperCase().
// }


// const renderShopProducts = function (data) {
    
//     const html = 
//     ` <div class="products__items">
//                         <div class="products__items--image">
//                             <img src="${data.images?.[0]}" alt="Product Images">
//                         </div>
//                         <h4 class="products__items--info name">${data.title}</h4>
//                         <h6 class="products__items--price price">$${data.price}</h6>
//                     </div>`;

//                     shopProductContainer.insertAdjacentHTML('beforeend', html);
// }