function getWeather() {
    const city = document.getElementById("cityInput").value;

    fetch(`/api/weather?city=${city}`)
        .then(res => res.json())
        .then(data => {

            document.getElementById("card").classList.remove("hidden");

            document.getElementById("city").innerText = data.name;
            document.getElementById("country").innerText = "Country: " + data.sys.country;

            document.getElementById("weatherDesc").innerText =
                data.weather[0].main + " - " + data.weather[0].description;

            document.getElementById("icon").src =
                `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

            document.getElementById("temp").innerText = data.main.temp;
            document.getElementById("feels").innerText = data.main.feels_like;
            document.getElementById("min").innerText = data.main.temp_min;
            document.getElementById("max").innerText = data.main.temp_max;
            document.getElementById("pressure").innerText = data.main.pressure;
            document.getElementById("humidity").innerText = data.main.humidity;

            document.getElementById("wind").innerText = data.wind.speed;
            document.getElementById("deg").innerText = data.wind.deg;

            document.getElementById("visibility").innerText = data.visibility;

            document.getElementById("lat").innerText = data.coord.lat;
            document.getElementById("lon").innerText = data.coord.lon;
            document.getElementById("clouds").innerText = data.clouds.all;

            document.getElementById("sunrise").innerText =
                new Date(data.sys.sunrise * 1000).toLocaleTimeString();

            document.getElementById("sunset").innerText =
                new Date(data.sys.sunset * 1000).toLocaleTimeString();
        })
        .catch(() => alert("City not found"));
}
