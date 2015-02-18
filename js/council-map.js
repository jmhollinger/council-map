var map;
function initialize() {

  // Create a simple map.
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 13,
    center: {lat: 38.048876, lng: -84.499932}, 
  });

var url_id = GetURLParam("id")

map.data.loadGeoJson("data/council.geojson");

map.data.setStyle(function(feature) {
    var geo_id = feature.getProperty('DISTRICT');
    
    var blue = {
    fillColor: '#2A6FBD',
    fillOpacity: 0.2,
    strokeColor: '#2A6FBD',
    strokeWeight: 2
    };
    
    var hide = {visible: false}

    if (url_id == geo_id){return blue}
    else {return hide}  
});



}

google.maps.event.addDomListener(window, 'load', initialize);

function GetURLParam(sParam){
var sPageURL = window.location.search.substring(1);
var sURLVariables = sPageURL.split('&');
for (var i = 0; i < sURLVariables.length; i++) 
{
var sParameterName = sURLVariables[i].split('=');
if (sParameterName[0] == sParam) 
   {return sParameterName[1];}}}