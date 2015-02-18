var map;
function initialize() {
  // Create a simple map.
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 13,
    center: {lat: 38.048876, lng: -84.499932}, 
  });

  // Load a GeoJSON from the same server as our demo.
  map.data.loadGeoJson('data/council.geojson');
}

google.maps.event.addDomListener(window, 'load', initialize);