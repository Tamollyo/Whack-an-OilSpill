let score = 0
let hScore = sessionStorage.getItem(`highScore`)
console.log(hScore)
let time = 1000
const trash = document.querySelector('.trash')
const trashTwo = document.querySelector('.trashTwo')
const tally = document.querySelector('.score')

const highScore = document.querySelector('.highScore')
highScore.innerHTML = hScore
const restart = document.querySelector('.restart')
let randomTop
let randomLeft

trash.addEventListener('click', () => {
  score += 1
  if (score > hScore) {
    hScore = score
    highScore.innerText = hScore
    sessionStorage.setItem(`highScore`, hScore)
  }
  tally.innerText = score
  randomLocation()
})

trashTwo.addEventListener('click', () => {
  score += 2
  if (score > hScore) {
    hScore = score
    highScore.innerText = hScore
    sessionStorage.setItem(`highScore`, hScore)
  }
  tally.innerText = score
  randomLocation()
})

restart.addEventListener('click', () => {
  score = 0
  tally.innerText = score
  time = 3000
  timeTwo = 2000
  clearInterval(trashTime)
  trashTime = setInterval(playGame, time)
  trashTimeTwo = setInterval(playGame, timeTwo)
})

randomLocation = () => {
  min = Math.ceil(80)
  max = Math.floor(20)
  randomTop = Math.floor(Math.random() * (max - min) + min)
  randomLeft = Math.floor(Math.random() * (max - min) + min)
  trash.style.top = randomTop + '%'
  trash.style.left = randomLeft + '%'
  trashTwo.style.top = Math.floor(Math.random() * (max - min) + min) + '%'
  trashTwo.style.left = Math.floor(Math.random() * (max - min) + min) + '%'
}

timeSet = () => {
  if (score <= 10) {
    time = 2000
    trash.style.visibility = 'hidden'
    trashTwo.style.visibility = 'visible'
  } else if (score > 10 && score <= 12) {
    time = 1990
    trash.style.visibility = 'visible'
    trashTwo.style.visibility = 'hidden'
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  } else if (score > 12 && score <= 14) {
    time = 1900
    trashTwo.style.visibility = 'visible'
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  } else if (score > 14 && score <= 30) {
    time = 1750
    timeTwo = 700
    trashTwo.style.visibility = 'visible'
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  } else if (score > 30 && score <= 32) {
    time = 1500
    trashTwo.style.visibility = 'hidden'
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  } else if (score > 32 && score <= 36) {
    time = 1400
    trashTwo.style.visibility = 'hidden'
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  } else if (score > 36 && score <= 50) {
    time = 1000
    trashTwo.style.visibility = 'visible'
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  } else if (score > 50) {
    time = 700
    trashTwo.style.visibility = 'hidden'
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  }
}

let playGame = () => {
  randomLocation()
  timeSet()
}

let trashTime = setInterval(playGame, time)
