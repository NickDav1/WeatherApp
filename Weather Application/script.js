let weather = {
  "apiKey": "a173e7abc5d66dd9f3ff617a632136e4",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" + city 
      +"&units=imperial&appid=" 
      + this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));

    }, 
    
    displayWeather: function(data){
      const {name} = data;
      const {icon, description} = data.weather[0];
      const {temp, humidity} = data.main;
      const {speed} = data.wind;

      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".weather-description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°F";
      document.querySelector(".humidity").innerText = "Humidity " + humidity;
      document.querySelector(".speed").innerText = "Wind Speed " + speed;
      document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";

    },

    search: function(){
      this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search-box button").addEventListener("click", function () {
  weather.search();
});

let input = document.querySelector('.search-bar');

input.addEventListener('keyup', (e) => {
  if(e.keyCode === 13){
    weather.search();
  }
});

weather.fetchWeather("New York");


