const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json'

const cards = document.querySelector('#cards')

async function getProphetData() {
    const response = await fetch(url)
    const data = await response.json()

    // console.table(data.prophets)
    displayProphets(data.prophets)
}

getProphetData()

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const {
            birthdate,
            birthplace,
            imageurl,
            lastname,
            name,

        } = prophet

        const card = document.createElement("section")
        const fullName = document.createElement("h2")
        const p1 = document.createElement("p")
        const p2 = document.createElement("p")
        const portrait = document.createElement("img")

        fullName.textContent = `${name} ${lastname}`

        p1.textContent = `Date of Birth: ${birthdate}`
        p2.textContent = `Place of Birth: ${birthplace}`

        portrait.setAttribute("src", imageurl)
        portrait.setAttribute("alt", `Portrait of ${fullName.textContent}`)
        portrait.setAttribute("loading", "lazy")
        portrait.setAttribute("width", 325)
        portrait.setAttribute("height", 400)

        card.appendChild(fullName)
        card.appendChild(p1)
        card.appendChild(p2)
        card.appendChild(portrait)

        cards.appendChild(card)
    })
}