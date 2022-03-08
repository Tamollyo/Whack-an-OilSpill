let score = 0
let hScore = 0
let time = 5000
let timeTwo = 3000
const trash = document.querySelector('.trash')
const trashTwo = document.querySelector('.trashTwo')
const tally = document.querySelector('.score')
const highScore = document.querySelector('.highScore')
const restart = document.querySelector('.restart')
let randomTop
let randomLeft

trash.addEventListener('click', () => {
  score += 2
  if (score > hScore) {
    hScore = score
    highScore.innerText = hScore
  }
  tally.innerText = score
  randomLocation()
})

trashTwo.addEventListener('click', () => {
  score += 2
  if (score > hScore) {
    hScore = score
    highScore.innerText = hScore
  }
  tally.innerText = score
  randomLocationTwo()
})

restart.addEventListener('click', () => {
  score = 0
  tally.innerText = score
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

randomLocationTwo = () => {
  min = Math.ceil(80)
  max = Math.floor(20)
  randomTop = Math.floor(Math.random() * (max - min) + min)
  randomLeft = Math.floor(Math.random() * (max - min) + min)
  trashTwo.style.top = randomTop + '%'
  trashTwo.style.left = randomLeft + '%'
}

// https://www.w3schools.com/js/js_operators.asp
timeSet = () => {
  if (score <= 10) {
    time = 4000
  } else if (score > 10 && score <= 20) {
    time = 3000
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  } else if (score > 20 && score <= 30) {
    time = 2000
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  } else if (score > 30 && score <= 40) {
    time = 1000
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  } else if (score > 40 && score <= 50) {
    time = 500
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  } else if (score > 50 && score <= 60) {
    time = 400
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  }
}

timeSetTwo = () => {
  if (score <= 10) {
    time = 2000
  } else if (score > 10 && score <= 20) {
    time = 1000
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  } else if (score > 20 && score <= 30) {
    time = 750
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  } else if (score > 30 && score <= 40) {
    time = 600
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  } else if (score > 40 && score <= 50) {
    time = 500
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  } else if (score > 50 && score <= 60) {
    time = 400
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  }
}

let playGame = () => {
  randomLocation()
  randomLocationTwo()
  timeSet()
  timeSetTwo()
}
// https://javascript.info/settimeout-setinterval
// let trashTimer = setInterval(randomLocation, timeSet)

let trashTime = setInterval(playGame, time)
let trashTimeTwo = setInterval(playGame, timeTwo)
