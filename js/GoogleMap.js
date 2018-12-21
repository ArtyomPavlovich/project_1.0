var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 53.682758, lng:  23.829920},
        zoom: 18,
    });
    image = 'img/imgMap.png',
        marker = new google.maps.Marker ({
            position: {lat: 53.682758, lng:  23.829920},
            map: map,
            icon: image,
            animation: google.maps.Animation.BOUNCE
        });
}