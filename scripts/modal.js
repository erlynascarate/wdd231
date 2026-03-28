const courseDetails = document.querySelector("#course-details")
courseDetails.addEventListener("click", () => {
    courseDetails.close()
})

function displayCourseDetails(course) {
    courseDetails.innerHTML = `
        <div id="modalContent">
            <button id="closeModal" type="button">❌</button>
            <h2>${course.subject} ${course.number}</h2>
            <h3>${course.title}</h3>
            <p><strong>Credits</strong>: ${course.credits}</p>
            <p><strong>Certificate</strong>: ${course.certificate}</p>
            <p>${course.description}</p>
            <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
        </div>
    `
    courseDetails.showModal()

    const modalContent = courseDetails.querySelector("#modalContent")
    modalContent.addEventListener("click", (event) => {
        event.stopPropagation()
    })

    const closeModal = courseDetails.querySelector("#closeModal")
    closeModal.addEventListener("click", (event) => {
        event.stopPropagation()
        courseDetails.close()
    })
}