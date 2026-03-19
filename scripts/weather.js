const currentTemp = document.querySelector("#current-temp")
const weatherIcon = document.querySelector("#weather-icon")
const captionDesc = document.querySelector('figcaption')

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=ddf50748eb571ac949acb0e036499e8e"

async function apiFetch() {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw Error(await response.text())
        }

        const data = await response.json()
        displayResults(data)
    } catch (error) {
        console.error(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`
    const url = `https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}.png`
    const desc = data.weather[0].description
    weatherIcon.setAttribute("src", url)
    weatherIcon.setAttribute("alt", desc)
    captionDesc.textContent = desc
}

apiFetch()