const activityDetails = document.querySelector("#activity-details")
activityDetails.addEventListener("click", () => {
    activityDetails.close()
})

function displayActivityDetails(activity) {
    const {
        name,
        mood,
        duration,
        category,
        description,
        tips,
        image,
    } = activity

    activityDetails.innerHTML = `
        <div id="modalContent">
            <button id="closeModal" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#eee"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
            </button>
            <img src="${image}" alt="${name}">
            <div class="modal-info">
                <div class="chips">
                    <span>${mood}</span>
                    <span>${category}</span>
                </div>
                <h2>${name}</h2>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 20 20" height="20px" viewBox="0 0 20 20" width="20px" fill="#00687b"><g><rect fill="none" height="20" width="20" x="0"/></g><g><g><path d="M15.45,6.61l1.08-1.08l-1.06-1.06l-1.08,1.08C13.19,4.58,11.66,4,10,4c-3.87,0-7,3.13-7,7s3.13,7,7,7c3.87,0,7-3.13,7-7 C17,9.34,16.42,7.81,15.45,6.61z M10,16.5c-3.03,0-5.5-2.47-5.5-5.5S6.97,5.5,10,5.5s5.5,2.47,5.5,5.5S13.03,16.5,10,16.5z"/><rect height="1.5" width="5" x="7.5" y="1.5"/><rect height="5" width="1.5" x="9.25" y="7"/></g></g></svg>
                    ${duration}
                </span>
                <p>${description}</p>
                <div class="tips">
                    <h3>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m176-120-56-56 301-302-181-45 198-123-17-234 179 151 216-88-87 217 151 178-234-16-124 198-45-181-301 301Zm24-520-80-80 80-80 80 80-80 80Zm355 197 48-79 93 7-60-71 35-86-86 35-71-59 7 92-79 49 90 22 23 90Zm165 323-80-80 80-80 80 80-80 80ZM569-570Z"/></svg>
                        PRO TIPS
                    </h3>
                    <ul>
                        ${tips.map((tip) => `
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 0 24 24" width="22px" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                                ${tip}
                            </li>    
                        `).join("")}
                    </ul>
                </div>
            </div>
        </div>
    `
    activityDetails.showModal()

    const modalContent = activityDetails.querySelector("#modalContent")
    modalContent.addEventListener("click", (event) => {
        event.stopPropagation()
    })

    const closeModal = activityDetails.querySelector("#closeModal")
    closeModal.addEventListener("click", (event) => {
        event.stopPropagation()
        activityDetails.close()
    })
}