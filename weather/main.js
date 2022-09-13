let lon;
let lat;
let temperature = document.querySelector(".temp");
let feelsLike = document.querySelector(".feels");
let summary = document.querySelector(".summary");
let humidity = document.querySelector(".humidity")
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");
const kelvin = 273;
var isInEnglish = true;
var languageLabel = document.getElementById('languageLabel')

var arrTemp = ['Temperature: ', 'Temperatura: ']
var arrFL = ['Feels Like: ', 'ST: ']
var arrHum = ['Humidity: ', 'Humedad: ']
var arrDesc = []

var temp = arrTemp[0];
var FL = arrFL[0];
var Hum = arrHum[0];
var Desc = arrDesc[0];

languageLabel.addEventListener('click', () => {
  if(isInEnglish === true){
    temp = arrTemp[1];
    FL = arrFL[1];
    Hum = arrHum[1];
    Desc = arrDesc[1];
    languageLabel.innerHTML = 'EN'
    isInEnglish = false
  }
  else{
    temp = arrTemp[0];
    FL = arrFL[0];
    Hum = arrHum[0];
    Desc = arrDesc[0];
    languageLabel.innerHTML = 'ES'
    isInEnglish = true
  }
})
  
window.addEventListener("load", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lon = position.coords.longitude;
      lat = position.coords.latitude;
  
      const api = "6d055e39ee237af35ca066f35474e9df";
  
      const base =
`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
`lon=${lon}&appid=6d055e39ee237af35ca066f35474e9df`;
  
      fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          temperature.textContent = 
              temp + Math.floor(data.main.temp - kelvin) + "°C"; 
          feelsLike.textContent = 
              FL + Math.floor(data.main.feels_like - kelvin) + "°C"; 
          humidity.textContent = Hum + data.main.humidity + "%";
              summary.textContent = data.weather[0].description;
          loc.textContent = data.name;
          if(data.weather[0].description == "clear sky"){
            icon.classList.add('fa-sun')
          }
          else if(data.weather[0].description == "few clouds" || data.weather[0].description == "scattered clouds"){
            icon.classList.add('fa-cloud-sun')
          }
          else if(data.weather[0].description == "broken clouds"){
            icon.classList.add('fa-clouds')
          }
          else if(data.weather[0].description == "light rain" || data.weather[0].description == "rain"){
            icon.classList.add('fa-cloud-showers')
          }
          else if(data.weather[0].description == "moderate rain"){
            icon.classList.add('fa-cloud-showers-heavy')
          }
          else if(data.weather[0].description == "thunderstorm"){
            icon.classList.add('fa-cloud-bolt')
          }
          else if(data.weather[0].description == "snow"){
            icon.classList.add('fa-cloud-snow')
          }
          else if(data.weather[0].description == "mist"){
            icon.classList.add('fa-cloud-fog')
          }
          else if(data.weather[0].description == "clouds"){
            icon.classList.add('fa-cloud')
          }
        });
    });
  }
});
