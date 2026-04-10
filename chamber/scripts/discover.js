import places from "../data/places.mjs"

const container = document.querySelector("#places")
places.forEach((place, index) => {
    const div = document.createElement("div")
    div.style.gridArea = `card-${index + 1}`

    const {
        name,
        image,
        address,
        description
    } = place

    div.innerHTML = `
        <figure>
            <figcaption>
                <h2>${name}</h2>
            </figcaption>
            <img src="${image}" alt="${name}" width="300" height="200" loading="lazy">
        </figure>
        <address>${address}</address>
        <p>${description}</p>
        <button>Learn More</button>
    `

    container.appendChild(div)
})

const lastVisit = parseInt(localStorage.getItem("lastVisit"))
const daysleft = (Date.now() - lastVisit) / (1000 * 60 * 60 * 24)

const lastVisitContainer = document.querySelector("#last-visit")
if (!lastVisit) {
    lastVisitContainer.textContent = "Welcome! Let us know if you have any questions."
} else if (daysleft < 1) {
    lastVisitContainer.textContent = "Back so soon! Awesome!"
} else if (daysleft === 1) {
    lastVisitContainer.textContent = "You last visited 1 day ago."
} else {
    lastVisitContainer.textContent = `You last visited ${daysleft} days ago.`
}

localStorage.setItem("lastVisit", Date.now())