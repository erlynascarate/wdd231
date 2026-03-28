const params = new URLSearchParams(window.location.search)

const info = document.querySelector(".info")

info.innerHTML = `
    <strong>First Name:</strong>
    ${params.get("firstname")}
    <strong>Last Name:</strong>
    ${params.get("lastname")}
    <strong>Email Address:</strong>
    ${params.get("email")}
    <strong>Mobile Phone Number:</strong>
    ${params.get("telephone")}
    <strong>Business/Organization's name:</strong>
    ${params.get("organization")}
    <strong>Membership Level:</strong>
    ${params.get("membership")}
    <strong>Date Timestamp:</strong>
    ${params.get("timestamp")}
`