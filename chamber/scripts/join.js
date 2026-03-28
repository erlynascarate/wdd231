// Form
const form = document.querySelector('form')

form.addEventListener('submit', () => {
    const timestamp = document.getElementById('timestamp')
    timestamp.value = new Date()
})

// Membership Levels
const membershipData = [
    {
        level: "np",
        title: "Non Profit Membership Level",
        description: "Perfect for non-profit organizations looking to network with the business community.",
        benefits: [
            "Networking opportunities with local businesses",
            "Access to monthly chamber events",
            "Business directory listing",
            "Email support",
            "Community partnership recognition"
        ],
        price: "Free"
    },
    {
        level: "bronze",
        title: "Bronze Membership Level",
        description: "Ideal for small businesses starting their journey in the chamber.",
        benefits: [
            "All Non Profit benefits",
            "Priority business directory listing",
            "One free event per month",
            "Phone and email support",
            "Social media promotion",
            "Quarterly newsletter feature"
        ],
        price: "$50/month"
    },
    {
        level: "silver",
        title: "Silver Membership Level",
        description: "Great for established businesses seeking stronger community presence.",
        benefits: [
            "All Bronze benefits",
            "Booth space at chamber events",
            "Monthly featured business spotlight",
            "Premium website listing",
            "Free workshop attendance",
            "Priority event registration",
            "Dedicated account manager"
        ],
        price: "$100/month"
    },
    {
        level: "gold",
        title: "Gold Membership Level",
        description: "The premier choice for major businesses wanting maximum visibility.",
        benefits: [
            "All Silver benefits",
            "Exclusive partner logo placement",
            "Monthly advertising in newsletter",
            "Co-hosted event opportunity",
            "Premium business card listing",
            "VIP access to all chamber events",
            "Direct access to chamber leadership",
            "Annual recognition ceremony feature"
        ],
        price: "$200/month"
    }
]

const section = document.querySelector(".levels")

membershipData.forEach((membership) => {
    const div = document.createElement("div")

    const h3 = document.createElement("h3")
    const button = document.createElement("button")

    h3.textContent = membership.title
    button.textContent = "Learn More"
    button.addEventListener("click", () => displayMembershipDetails(membership))

    div.append(h3, button)

    section.appendChild(div)
})

const modal = document.querySelector("#membership-details")
modal.addEventListener("click", closeModal)

function displayMembershipDetails(membership) {
    const { title, description, benefits, price } = membership
    const view = `
        <div id="modalContent">
            <button id="closeModal">❌</button>
            <h3>${title}</h3>
            <p>${description}</p>
            <ul>
                ${benefits.map((benefit) => `<li>${benefit}</li>`).join("")}
            </ul>
            <p>${price}</p>
        <div>
    `
    modal.innerHTML = view
    modal.showModal()

    const modalContent = modal.querySelector("#modalContent")
    modalContent.addEventListener("click", (event) => event.stopPropagation())

    const button = modal.querySelector("#closeModal")
    button.addEventListener("click", closeModal)
}

function closeModal() {
    modal.close()
}