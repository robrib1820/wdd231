const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const city = document.querySelector("#city");
const myKey = "436149f23f7acd351f99d168d82eda92";
const myLat = 49.74;
const myLong = 6.64;
const url = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    city.innerHTML = data.name;
    currentTemp.innerHTML = `${data.main.temp}&deg:F`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    weatherIcon.setAttribute("SRC", iconsrc);
    weatherIcon.setAttribute("alt", data.weather[0].description)
}
apiFetch();
