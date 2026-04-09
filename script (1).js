async function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  const apiKey = '2e77546aad3ef74839254291483b6023'; // Use your actual key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod === '404' || data.cod === '400') {
      document.getElementById('error').textContent = "City not found!";
      document.getElementById('weatherInfo').style.display = "none";
      return;
    }

    // Set values
    document.getElementById('error').textContent = "";
    document.getElementById('weatherInfo').style.display = "block";

    document.getElementById('city').textContent = " City: " + data.name;
    document.getElementById('temp').textContent = " Temp: " + data.main.temp + "°C";
    document.getElementById('desc').textContent = " Condition: " + data.weather[0].description;
    document.getElementById('icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  } catch (error) {
    document.getElementById('error').textContent = " Failed to fetch weather data.";
    document.getElementById('weatherInfo').style.display = "none";
  }
}
