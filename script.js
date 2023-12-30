const API_KEY = "61f2ee8dffc86648e6eec0b67b3270a1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector(".search input ");
const cityForm = document.querySelector("#cityForm");

const weatherIcon = document.querySelector(".weather_icon");

async function checkWeather(city) {
  const response = await fetch(`${apiUrl}&q=${city}&appid=${API_KEY}`);
  const data = await response.json();

  console.log("data: ", data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

  const condition = data.weather[0].main;

  document.querySelector(".weather").style.display = "block";
}

cityForm.addEventListener("submit", (event) => {
  event.preventDefault();

  checkWeather(searchBox.value);
});
