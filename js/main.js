//alert("existe");
function initMap() {
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 5,
		center: {lat: -9.1191427, lng: -77.0349046},
		mapTypeControl: false,
		zoomControl: false,
		streetViewControl: false
	});
	//input 01
	var input = document.getElementById("origen");
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

    //input 02
	var input = document.getElementById("destino");
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

	function buscar() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(funcionExito, funcionError);			
		}
	}
	document.getElementById("encuentrame").addEventListener("click",buscar);
	var latitud,longitud;

	var funcionExito = function(posicion) {
		latitud = posicion.coords.latitude;
		longitud = posicion.coords.longitude;

		var miUbicacion = new google.maps.Marker({
			position: {lat:latitud, lng:longitud},
			animation: google.maps.Animation.DROP,
			map: map,
			icon: "img/icono.png"
		});

		map.setZoom(17);
		map.setCenter({lat:latitud, lng:longitud});
	}
	var funcionError = function(error) {
		alert("Tenemos un problema con encontrar tu ubicación");
	}
}
