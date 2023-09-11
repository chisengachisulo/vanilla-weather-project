function displayTemperature(response) {
  console.log(response);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElent = document.querySelector("#wind");

  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElent.innerHTML = Math.round(response.data.wind.speed);
}
let apiKey = "ff3237836o6410aacb2481a69ct9c917";
let city = "New york";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=New-york&key=ff3237836o6410aacb2481a69ct9c917&units=metric`;

axios.get(apiUrl).then(displayTemperature);
