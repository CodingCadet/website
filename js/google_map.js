
var google;

function init() {
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var latlng = new google.maps.LatLng(33.8262151, -118.0409185);


    var mapOptions = {
        zoom: 10,
        // The latitude and longitude to center the map (always required)
        center: latlng,
        // How you would like to style the map. 
        scrollwheel: false,
        styles: [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}]
    };

    

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    var latlng = new google.maps.LatLng(33.8262151, -118.0409185);
    var latlng1 = new google.maps.LatLng(33.8460883, -118.0106335);
    var latlng2 = new google.maps.LatLng(33.8485886, -118.0390302);

    new google.maps.Marker({
        position: latlng,
        map: map,
        icon: 'images/loc.png'
    });
    new google.maps.Marker({
        position: latlng1,
        map: map,
        icon: 'images/loc.png'
    });
    new google.maps.Marker({
        position: latlng2,
        map: map,
        icon: 'images/loc.png'
    });
}
google.maps.event.addDomListener(window, 'load', init);