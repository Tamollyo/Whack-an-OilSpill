let score = 0
let time = 5000
const trash = document.querySelector('.trash')
const tally = document.querySelector('.score')
let randomTop
let randomLeft

trash.addEventListener('click', () => {
  score += 2
  tally.innerText = score
  randomLocation()
})
//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
randomLocation = () => {
  min = Math.ceil(80)
  max = Math.floor(20)
  randomTop = Math.floor(Math.random() * (max - min) + min)
  randomLeft = Math.floor(Math.random() * (max - min) + min)
  trash.style.top = randomTop + '%'
  trash.style.left = randomLeft + '%'
}

// https://www.w3schools.com/js/js_operators.asp
timeSet = () => {
  if (score <= 10) {
    time = 3000
  } else if (score > 10 && score <= 20) {
    time = 1000
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  } else if (score > 20 && score <= 30) {
    time = 200
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  } else if (score > 30 && score <= 40) {
    time = 2000
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  } else if (score > 40 && score <= 50) {
    time = 1000
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  } else if (score > 50 && score <= 60) {
    time = 500
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  }
}

let playGame = () => {
  randomLocation()
  timeSet()
}
// https://javascript.info/settimeout-setinterval
// let trashTimer = setInterval(randomLocation, timeSet)

let trashTime = setInterval(playGame, time)

// if (score >= 10) {
//   timeSet -= 4000
//   console.log(timeSet)
// }

// function trashMove = () => {
//   trashX = math.floor(math.random() * gridArr)
//   trashY = math.floor(math.random() * gridArr)
// }

// div to move randomly throughout the page
// - using math.random change x and y position
// if div is clicked add to score and change position
