let scoreHome = document.getElementById("score-home")
console.log(scoreHome)
let scoreGuest = document.getElementById("score-guest")
console.log(scoreGuest)
let home = 0
let guest = 0

function homeAddOne() {
    home += 1
    scoreHome.textContent = home
}

function homeAddTwo() {
    home += 2
    scoreHome.textContent = home
}

function homeAddThree() {
    home += 3
    scoreHome.textContent = home
}

function guestAddOne() {
    guest += 1
    scoreGuest.textContent = guest
}

function guestAddTwo() {
    guest += 2
    scoreGuest.textContent = guest
}

function guestAddThree() {
    guest += 3
    scoreGuest.textContent = guest
}