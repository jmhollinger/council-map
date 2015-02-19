function generate_map(){
var district = $("#district").val()  
var color =  $("#color").val()  
var width = $("#width").val()  
var height = $("#height").val()  
var code = '<iframe width="' + width + '" height="' + height + '" style="border: 0px" src="http://jmhollinger.github.io/council-map/?id='+ district + '&color=' + color + '"></iframe>'

$("#result").html(
'<h3>Embed Code</h3>' +
'<p>Copy and paste this code onto the webpage where you want the map.</p>' +
'<textarea class="form-control">' + code + '</textarea>' +
'<h3>Preview</h3>' +
'<p>This is a preview of what your map will look like.</p>' + code
)
}

