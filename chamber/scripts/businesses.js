const businessesContainer = document.querySelector("#businesses")

function renderBusiness(businessList) {
    const view = businessList.map((business) => {
        const {
            companyName,
            email,
            image,
            phone,
            website,
            membershipLevel 
        } = business

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
            <div class="business">
                <h2>${companyName}</h2>
                <span>Business Tag Line</span>
                <div class="business-container">
                    <img src="${image}" alt="">
                    <p>
                        <strong>EMAIL:</strong>
                        <a href="mailto:${email}">${email}</a>
                    </p>
                    <p>
                        <strong>PHONE:</strong>
                        <a href="tel:${phone}">${phone}</a>
                    </p>
                    <p>
                        <strong>URL:</strong>
                        <a href="${website}" target="_blank" rel="noopener noreferrer">${website}</a>
                    </p>
                    <p>
                        <strong>MEMBERSHIP LEVEL:</strong>
                        <span>${mLevel}</span>
                    </p>
                </div>
            </div>
        `
    }).join("")

    businessesContainer.innerHTML = view
}

async function main() {
    try {
        const response = await fetch("data/members.json")
        if (!response.ok) {
            throw new Error(await response.text())
        }
        const data = await response.json()

        const filterMembers = data.filter(({membershipLevel}) => {
            const silver = 2
            const gold = 3
            return membershipLevel === silver || membershipLevel === gold
        })

        const shuffled = filterMembers.sort(() => Math.random() - 0.5)
        const threeFirstRandomMembers = shuffled.slice(0, 3)
        
        renderBusiness(threeFirstRandomMembers)
    } catch (error) {
        console.error(error)
    }
}

main()