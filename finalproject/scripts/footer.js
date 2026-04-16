const today = new Date()
const currentyear = today.getFullYear()

const pYear = document.querySelector('#currentyear')
pYear.innerHTML = `&copy;${currentyear} ActiMood Sanctuary`