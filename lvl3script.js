let score = 0
let hScore = 0
let time = 5000
let timeTwo = 3000
let timeThree = 1000
const trash = document.querySelector('.trash')
const trashTwo = document.querySelector('.trashTwo')
const trashThree = document.querySelector('.trashThree')
const tally = document.querySelector('.score')
const highScore = document.querySelector('.highScore')
const restart = document.querySelector('.restart')
let randomTop
let randomLeft
let randomTop2
let randomLeft2
let randomTop3
let randomLeft3

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

trashThree.addEventListener('click', () => {
  score += 2
  if (score > hScore) {
    hScore = score
    highScore.innerText = hScore
  }
  tally.innerText = score
  randomLocationThree()
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
  randomTop2 = Math.floor(Math.random() * (max - min) + min)
  randomLeft2 = Math.floor(Math.random() * (max - min) + min)
  trashTwo.style.top = randomTop2 + '%'
  trashTwo.style.left = randomLeft2 + '%'
}

randomLocationThree = () => {
  min = Math.ceil(80)
  max = Math.floor(20)
  randomTop3 = Math.floor(Math.random() * (max - min) + min)
  randomLeft3 = Math.floor(Math.random() * (max - min) + min)
  trashThree.style.top = randomTop3 + '%'
  trashThree.style.left = randomLeft3 + '%'
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
    timeTwo = 2000
  } else if (score > 10 && score <= 20) {
    timeTwo = 1000
    clearInterval(trashTimeTwo)
    trashTimeTwo = setInterval(playGame, timeTwo)
  } else if (score > 20 && score <= 30) {
    timeTwo = 750
    clearInterval(trashTimeTwo)
    trashTimeTwo = setInterval(playGame, timeTwo)
  } else if (score > 30 && score <= 40) {
    timeTwo = 600
    clearInterval(trashTimeTwo)
    trashTimeTwo = setInterval(playGame, timeTwo)
  } else if (score > 40 && score <= 50) {
    timeTwo = 500
    clearInterval(trashTimeTwo)
    trashTimeTwo = setInterval(playGame, timeTwo)
  } else if (score > 50 && score <= 60) {
    timeTwo = 400
    clearInterval(trashTimeTwo)
    trashTimeTwo = setInterval(playGame, timeTwo)
  }
}

timeSetThree = () => {
  if (score <= 10) {
    timeThree = 1500
  } else if (score > 10 && score <= 20) {
    timeThree = 1000
    clearInterval(trashTime)
    trashTimeThree = setInterval(playGame, timeThree)
  } else if (score > 20 && score <= 30) {
    timeThree = 650
    clearInterval(trashTime)
    trashTimeThree = setInterval(playGame, timeThree)
  } else if (score > 30 && score <= 40) {
    timeThree = 550
    clearInterval(trashTime)
    trashTimeThree = setInterval(playGame, timeThree)
  } else if (score > 40 && score <= 50) {
    timeThree = 450
    clearInterval(trashTime)
    trashTimeThree = setInterval(playGame, timeThree)
  } else if (score > 50 && score <= 60) {
    timeThree = 300
    clearInterval(trashTime)
    trashTimeThree = setInterval(playGame, timeThree)
  }
}

let playGame = () => {
  randomLocation()
  timeSet()
}
let playGame2 = () => {
  randomLocationTwo()
  timeSetTwo()
}
let playGame3 = () => {
  randomLocationThree()
  timeSetThree()
}
// https://javascript.info/settimeout-setinterval
// let trashTimer = setInterval(randomLocation, timeSet)

let trashTime = setInterval(playGame, time)
let trashTimeTwo = setInterval(playGame2, timeTwo)
let trashTimeThree = setInterval(playGame3, timeThree)
