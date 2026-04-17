async function main() {
    const response = await fetch("data/activities.json")
    const activities = await response.json()

    const view = activities.map((activity) => {
        const {
            image,
            name,
            duration,
            mood,
            category,
        } = activity

        return `
            <div class="activity">
                <button class="favorite">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"/></svg>
                </button>
                <img src="${image}" alt="${name}" loading="lazy">
                <div class="activity-desc">
                    <div>
                        <h3>${name}</h3>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="16px" viewBox="0 0 24 24" width="16px" fill="#00687b"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M11.99,2C6.47,2,2,6.48,2,12s4.47,10,9.99,10C17.52,22,22,17.52,22,12S17.52,2,11.99,2z M15.29,16.71L11,12.41V7h2v4.59 l3.71,3.71L15.29,16.71z"/></g></svg>
                            ${duration}
                        </span>
                    </div>
                    <div class="chips">
                        <span>${mood}</span>
                        <span>${category}</span>
                    </div>
                </div>
            </div>
        `
    }).join("")

    const activitySection = document.querySelector(".activities")
    activitySection.innerHTML = view

    activitySection.querySelectorAll(".activity").forEach((card, index) => {
        card.addEventListener("click", () => displayActivityDetails(activities[index]))
    })

    activitySection.querySelectorAll(".favorite").forEach((button, index) => {
        button.addEventListener("click", (event) => {
            event.stopPropagation()
            const isAdded = button.classList.toggle("added")
            console.log(isAdded);
            
            toggleFavorite(isAdded, activities[index])
        })
    })
}

function toggleFavorite(isAdded, activity) {
    const favoriteList = JSON.parse(localStorage.getItem("favoriteList")) || []
    if (isAdded) {
        const newList = [activity, ...favoriteList]

        localStorage.setItem("favoriteList", JSON.stringify(newList))
    } else {
        const filteredList = favoriteList.filter((item) => item !== activity)

        localStorage.setItem("favoriteList", JSON.stringify(filteredList))
    }
}

main()