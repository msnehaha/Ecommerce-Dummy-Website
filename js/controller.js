'use strict';

const featuredContainer = document.querySelector('.featured__body');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
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
            function() {
                alert("Couldn't get your position.");
            }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }



//Fetching Data from API



const API_URL = 'https://dummyjson.com/products/';


console.log(fetch(API_URL).then(res=>res.json()).then(data =>data));


const getProduct = function(id)
{
    ( fetch(`${API_URL}/${id}`).then(res =>{
        return res.json();
        }).then(data => {
            console.log(data);
            renderData(data)})) ;
}



// getProduct(1);

const renderData = function(data)
{
    const html = `<div class="featured__items ">
                <div class="featured__items--image">
                    <img src="${data.images}" alt="Orange  " class="image-primary">
                </div>
                <h4 class="featured__items--info name">${data.title}</h4>
                <h6 class="featured__items--price price">$${data.price}</h6>
            </div>`;
featuredContainer.insertAdjacentHTML('afterbegin', html);
        
}