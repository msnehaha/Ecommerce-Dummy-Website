
export const renderMap = ()=>{
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
}

