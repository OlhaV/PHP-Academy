function Weather () {
	var w = this;

	w.demo = document.getElementById('demo');
	w.getWeather = document.getElementById('getWeather');
	w.addCity = document.getElementById('addCity');
	w.rmCity = document.getElementById('rmCity');
	w.cityArray = [];

	function sendRequest (location) {
		var request = new XMLHttpRequest();
		
		request.open('GET', location, true);
		request.send();

		request.onreadystatechange = function() {
			if (request.readyState == 4) {
				if (request.status == 200) {
					w.demo.innerHTML = request.responseText;
				} 
			} else {
				console.log(request.status + ': ' + request.statusText);
			}
		} 

	}


	w.getWeatherFunc = function() {
		var lon, lat;

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(location){
				lat = location.coords.latitude;
				lon = location.coords.longitude;
				console.log(lat, lon);
				sendRequest('http://api.openweathermap.org/data/2.5/weather?lat=' + lat 
					+ '&lon=' + lon + '&appid=c0a7816b2acba9dbfb70977a1e537369');
			});
		} else {
			throw new Error;
		} 


	
	}


	w.addCity = function(city) {
		w.cityArray.push(city);
	}

	w.removeCity = function(city) {
		w.cityArray.remove(city);
	}

	w.getWeather.onclick = w.getWeatherFunc;
	
}