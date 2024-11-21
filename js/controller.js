'use strict';



if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function(position) {
            const { latitude, longitude } = position.coords;
            console.log(latitude, longitude);

            // Initialize the map centered on the user's location
            var map = L.map('map').setView([latitude, longitude], 13);

            // Add OpenStreetMap tile layer
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            // Add a marker at the user's location
            L.marker([latitude, longitude]).addTo(map)
                .bindPopup('You are here!')
                .openPopup();
        },
        function() {
            alert("Couldn't get your position.");
        }
    );
} else {
    alert("Geolocation is not supported by this browser.");
}
