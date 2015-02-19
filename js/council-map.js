$("#generate_map").click(
function generate_map(){
var base_url = 'http://jmhollinger.github.io/council-map/map.html'
var id = $("#district").val()  
var color =  $("#color").val()  
var width = $("#width").val()  
var height = $("#height").val()  
var code = '<iframe width="' + width + '" height="' + height + '" style="border: 0px" src="' + base_url + '?id='+ id + '&color=' + color + '"></iframe>'

$("#result").html(
'<h3>Embed Code</h3>' +
'<p>Copy and paste this code onto the webpage where you want the map.</p>' +
'<textarea class="form-control">' + code + '</textarea>' +
'<h3>Preview</h3>' +
'<p>This is a preview of what your map will look like.</p>' + code
)
})

function initialize() {

var map = new google.maps.Map(document.getElementById('map-canvas'));
 
var url_id = GetURLParam("id")
var url_color = "#" + GetURLParam("color")

map.data.loadGeoJson("data/council.geojson");

var bounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(37.921971, -84.663139),
      new google.maps.LatLng(38.155595, -84.334923))

map.fitBounds(bounds)

map.data.setStyle(function(feature) {
    //The property specified here should be a unique identifier for a feature and is referenced by the URL parameter "id"
    var geo_id = feature.getProperty('DISTRICT');
    
    var show = {
    fillColor:  url_color,
    fillOpacity: 0.2,
    strokeColor: url_color,
    strokeWeight: 2,
    clickable: false
    };
  
    var hide = {visible: false}
  
    if (url_id == geo_id){return show}
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