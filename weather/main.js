let lon;
let lat;
let temperature = document.querySelector(".temp");
let feelsLike = document.querySelector(".feels");
let summary = document.querySelector(".summary");
let humidity = document.querySelector(".humidity")
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");
const kelvin = 273;
  
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
              "Temperature: " + Math.floor(data.main.temp - kelvin) + "°C"; 
          feelsLike.textContent = 
              "Feels Like: " + Math.floor(data.main.feels_like - kelvin) + "°C"; 
          humidity.textContent = "Humidity: " + data.main.humidity + "%";
              summary.textContent = data.weather[0].description;
          loc.textContent = data.name;
          if(data.weather[0].description == "clear sky"){
            icon.classList.add('fa-sun')
          }
          else if(data.weather[0].description == "light rain"){
            icon.classList.add('fa-cloud-showers')
          }
          else if(data.weather[0].description == "moderate rain"){
            icon.classList.add('fa-cloud-showers-heavy')
          }
          else if(data.weather[0].description == "snow"){
            icon.classList.add('fa-cloud-snow')
          }
          else if(data.weather[0].description == "clouds"){
            icon.classList.add('fa-cloud')
          }
        });
    });
  }
});
