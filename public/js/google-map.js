function initMap() {
var uluru = {lat: 28.330804, lng: -81.612993};
var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 13,
	maxZoom: 20,
	disableDefaultUI: true,
	zoomControl: true,
	draggable: true,
	scrollwheel: false,
	navigationControl: false,
	streetViewControl: false,
	center: uluru
});
var contentString = '<div id="content">'+
	'<span><strong>Blooming Magical Villas</strong></span>'+
	'</div>';

var infowindow = new google.maps.InfoWindow({
  content: contentString
});
google.maps.event.addDomListener(window, "resize", function() {
	var center = map.getCenter();
	google.maps.event.trigger(map, "resize");
	map.setCenter(center); 
});
var marker = new google.maps.Marker({
	position: uluru,
	map: map
});
var marker = new google.maps.Marker({
  position: uluru,
  map: map,
  title: 'Blooming Magical Villas'
});
marker.addListener('click', function() {
  infowindow.open(map, marker);
});

}