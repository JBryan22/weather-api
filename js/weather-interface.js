// import { Weather } from './../js/weather.js';

// $(function() {
//   $('#weatherLocation').click(function() {
//     let city = $('#location').val();
//     $('#location').val('');
//     $.ajax({
//       url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=45ca2cf4e056b2b6b922db7b53e1d94d`,
//       type: 'GET',
//       data: {
//         format: 'json'
//       },
//       success: function(response) {
//         console.log(response);
//         $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
//         $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
//         $('.showTemp').append(`<p>The temperature in Fahrenheit is ${Math.floor(((response.main.temp) * (9/5)) - 459.67)}.</p>`);
//       },
//       error: function() {
//         $('#errors').text("There was an error processing your request. Please try again.")
//       }
//     });
//   });
// });

let apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  console.log(apiKey);
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");

    let request = new XMLHttpRequest();
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

    getElements = function(response) {
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
      $('.showTemp').append(`<p>The temperature in Fahrenheit is ${Math.floor(((response.main.temp) * (9/5)) - 459.67)}.</p>`);
    };
  });
});
