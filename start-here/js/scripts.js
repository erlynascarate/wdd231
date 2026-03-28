const results = document.querySelector('#results')

const params = new URLSearchParams(window.location.search)

results.innerHTML = `
    <p>Appointment for ${params.get("first")} ${params.get("last")}</p>
    <p>Proxy ${params.get("ordinance")} on ${params.get("date")} in the ${params.get("location")} Temple</p>
    <p>Your phone is ${params.get("phone")}</p>
    <p>Your email is ${params.get("email")}</p>
`
