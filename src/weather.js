const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
city.style.color = "white";
weather.style.color = "white";
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const URL = `
  https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].description} / ${data.main.temp} `;
    });
}

function onGeoError() {}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
