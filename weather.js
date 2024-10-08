const apikey = "c4044f531dec2af0db3e6fe7bc20e476";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city = "delhi") {
    try {
        const response = await fetch(`${apiurl}${city}&appid=${apikey}`);
        const data = await response.json();

        if (data.cod === "404") {
            alert("City not found");
            return;
        }

        // Update HTML elements with weather data
        document.getElementById("city-name").innerText = data.name;
        document.getElementById("temperature").innerText = `${data.main.temp}°C`;
        document.getElementById("humidity").innerText = `${data.main.humidity}%`;
        document.getElementById("wind").innerText = `${data.wind.speed}km/h`;

        // Update weather icon based on weather condition
        // Example: Replace with actual icon URLs or logic to select icons
        const weatherIconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        document.getElementById("weather-icon").src = weatherIconUrl;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

// Initial call to load the weather for "delhi"
checkWeather();

// Add functionality to handle search input
document.getElementById("search-button").addEventListener("click", () => {
    const city = document.getElementById("city").value.trim();
    if (city) {
        checkWeather(city);
    }
});
