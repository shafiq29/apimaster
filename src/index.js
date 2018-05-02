import $ from 'jquery';

getTemperatureDetails(24, 90)

function getTemperatureDetails(latitude, longitude) { //I put lat first
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather",
    type: "GET",
    dataType: "JSON",
    data: {
      lat: latitude,
      lon: longitude,
      APPID: "bd87a3fb6db099f13292a7a1b2729644"
    },
    success: function(data) {
    	console.log(data.name);
    	console.log(data.weather[0].main);
    	console.log(data.weather[0].description);
    	console.log((data.main.temp-273));
    },
    error: function(data, textStatus, errorThrown) {
      //Do Something to handle error
      console.log(textStatus);
    }
  });
}
        