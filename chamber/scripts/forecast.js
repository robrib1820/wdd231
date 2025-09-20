const forecastCard = document.getElementById("forecastCard");

const key = "436149f23f7acd351f99d168d82eda92";
const lat = -23.31;
const long = -51.16;
const myUrl = `//api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${key}&units=metric`;

async function forecastInfo() {
    try {
        const response = await fetch(myUrl);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


function displayForecast(data) {

    const date = new Date(data.list[0].dt_txt);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const dailyData = data.list.filter(item => item.dt_txt.includes("12:00:00"));

    dailyData.forEach(day => {
        const date = new Date(day.dt_txt);

        const weekDay = document.createElement("h3");

        weekDay.innerHTML = days[date.getDay()];;

        const temp = document.createElement("p");

        temp.innerHTML = `${day.main.temp} °C`;

        forecastCard.appendChild(weekDay);
        forecastCard.appendChild(temp);
    })
    
}

forecastInfo();