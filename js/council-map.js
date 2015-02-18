var map;
function initialize() {

  // Create a simple map.
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 13,
    center: {lat: 38.048876, lng: -84.499932}, 
  });


  // Load a Council GeoJSON
  map.data.loadGeoJson('data/council.geojson');

    var blue = {
    fillColor: '#2A6FBD',
    fillOpacity: 0.1,
    strokeColor: '#2A6FBD',
    strokeWeight: 2
    };

  map.data.setStyle(blue);

    var red = {
    fillColor: 'red',
    fillOpacity: 0.1,
    strokeColor: 'red',
    strokeWeight: 2
    };

  if (GetURLParam("district") = 1)
    {map.data.setStyle(red)}
  else {}    
}

google.maps.event.addDomListener(window, 'load', initialize);

console.log("District " + GetURLParam("district"))

function GetURLParam(sParam){
var sPageURL = window.location.search.substring(1);
var sURLVariables = sPageURL.split('&');
for (var i = 0; i < sURLVariables.length; i++) 
{
var sParameterName = sURLVariables[i].split('=');
if (sParameterName[0] == sParam) 
   {return sParameterName[1];}}}