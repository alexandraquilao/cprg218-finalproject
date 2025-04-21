const apiKey = "85a8cbaee3a6943062e6bb5973d5ada4";
const city = "Cancun";
const country = "MX"; // Use uppercase for country code

const weatherElement = document.getElementById("weather");

function fetchWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Weather data not available");
      }
      return response.json();
    })
    .then((data) => {
      const temp = Math.round(data.main.temp);
      const description = data.weather[0].description;
      const icon = data.weather[0].icon;

      weatherElement.innerHTML = `
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}" style="vertical-align:middle; width:32px; height:32px;" />
        ${temp}°C — ${description.charAt(0).toUpperCase() + description.slice(1)}
      `;
    })
    .catch((error) => {
      console.error("Error fetching weather:", error);
      weatherElement.textContent = "Unable to load weather right now";
    });
}

fetchWeather();
