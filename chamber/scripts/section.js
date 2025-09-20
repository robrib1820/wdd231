const weatherCard = document.getElementById("weatherCard");
const weatherIcon = document.getElementById("weather-icon");

const myKey = "436149f23f7acd351f99d168d82eda92";
const myLat = -23.31;
const myLong = -51.16;
const url = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;

async function weatherInfo() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            
            displayCard(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


//FUCNTION TO DISPLAY INTO MY SECTION CARD
function displayCard(data) {
    const cityName = document.createElement("p");
    cityName.innerHTML = data.name;
    cityName.classList.add("city-name");

    const temperature = document.createElement("p");
    temperature.innerHTML = `Temperature: ${data.main.temp} °C`;

    const humidity = document.createElement("p");
    humidity.innerHTML = `Humidity: ${data.main.humidity}`;

    const description = document.createElement("p");
    description.innerHTML = data.weather[0].description;

    //IMG icon
    const iconImg = document.createElement("img");
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    iconImg.src = iconSrc;
    iconImg.alt = data.weather[0].description;

    weatherIcon.appendChild(iconImg);
    weatherCard.appendChild(cityName);
    weatherCard.appendChild(temperature);
    weatherCard.appendChild(humidity);
    weatherCard.appendChild(description);
}



weatherInfo();