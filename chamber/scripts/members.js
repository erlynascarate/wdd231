const container = document.querySelector("#container")
function renderMembers(members) {
    const view = members.map(member => {
        const {
            companyName,
            address,
            phone,
            website,
            image,
            membershipLevel 
        } = member

        let mLevel = ""

        switch (membershipLevel) {
            case 1:
                mLevel = "Member"
                break
            case 2:
                mLevel = "Silver"
                break
            case 3:
                mLevel = "Gold"
                break
        }

        return `
            <div class="card">
                <img src="${image}" alt="${companyName}">
                <h2>${companyName}</h2>
                <p>${address}</p>
                <p>${phone}</p>
                <p>${mLevel}</p>
                <a href="${website}" target="_blank" rel="noopener noreferrer">${website}</a>
            </div>
        `
    }).join("")

    container.innerHTML = view
}

async function main() {
    try {
        const response = await fetch("data/members.json")
        const data = await response.json()
        renderMembers(data)
    } catch (error) {
        console.error(error)
    }
}

main()