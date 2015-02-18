function initialize(){

  var mapOptions = {
    overviewMapControl:true,
    rotateControl:true,
    scaleControl:true,
    mapTypeControl: true,
    mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR, position:google.maps.ControlPosition.TOP_CENTER},
    zoomControl: true,
    zoomControlOptions: {style: google.maps.ZoomControlStyle.DEFAULT}
    };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var blue = {
    fillColor: '#2A6FBD',
    fillOpacity: 0.2,
    strokeColor: '#2A6FBD',
    strokeWeight: 2
    };

  map.data.setStyle(blue);
  
  map.data.loadGeoJson('data/council.geojson')
  
}

google.maps.event.addDomListener(window, 'load', initialize);
