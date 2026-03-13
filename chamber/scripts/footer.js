const pYear = document.querySelector('#currentyear')

const today = new Date()
const currentyear = today.getFullYear()

pYear.innerHTML = currentyear

const lastModified = document.querySelector("#lastModified")

lastModified.innerHTML = `Last Modification: ${document.lastModified}`