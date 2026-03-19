const lat = 35.71
const lon = 139.78
const appid = "ddf50748eb571ac949acb0e036499e8e"
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${appid}`
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${appid}`

async function apiFetch() {
    try {
        const [weatherResponse, forecastResponse] = await Promise.all([
            fetch(weatherUrl),
            fetch(forecastUrl)
        ])

        if (!weatherResponse.ok) {
            throw Error(await weatherResponse.text())
        }

        if (!forecastResponse.ok) {
            throw Error(await forecastResponse.text())
        }

        const weatherData = await weatherResponse.json()
        const forecastData = await forecastResponse.json()
        
        displayCurrentWeather(weatherData)
        displayForecast(forecastData.list)
    } catch (error) {
        console.error(error)
    }
}

const containerWeather = document.querySelector("#container-weather")
function displayCurrentWeather(data) {
    const url = `https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}.png`
    const view = `
        <img src="${url}" alt="${data.weather[0].description}" width="100" height="100">
        <div>
            <p>
                <span>${data.main.temp}</span>&deg;F
            </p>
            <p>${data.weather[0].description}</p>
            <p>High: ${data.main.temp_max}&deg;</p>
            <p>Low: ${data.main.temp_min}&deg;</p>
            <p>Humidity: ${data.main.humidity}%</p>
        </div>
    `
    containerWeather.innerHTML = view
}

const containerForecast = document.querySelector("#container-forecast")
function displayForecast(data) {
    let view = ""
    for (let index = 5; index < data.length; index += 8) {
        if (index >= 29) break // Only 3. One per day
        
        const day = data[index]
        const date = new Date(day.dt_txt)
        const dayName = date.toLocaleDateString("en-US", { weekday: "long" })
        view += `
            <p>
                ${dayName}:
                <span>${day.main.temp}&deg;F</span>
            </p>
        `
    }

    containerForecast.innerHTML = view
}

apiFetch()