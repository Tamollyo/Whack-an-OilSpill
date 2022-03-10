let score = 0
let hScore = 0
let time = 5000
const trash = document.querySelector('.trash')
const trashTwo = document.querySelector('.trashTwo')
const tally = document.querySelector('.score')
const highScore = document.querySelector('.highScore')
const restart = document.querySelector('.restart')
let randomTop
let randomLeft

trash.addEventListener('click', () => {
  score += 1
  if (score > hScore) {
    hScore = score
    highScore.innerText = hScore
  }
  tally.innerText = score
  randomLocation()
})

trashTwo.addEventListener('click', () => {
  score += 4
  if (score > hScore) {
    hScore = score
    highScore.innerText = hScore
  }
  tally.innerText = score
  randomLocation()
})

let visible = () => {
  if (score % 2 != 1) {
    document.querySelector('.trashTwo').style.opacity = '0'
  } else if (score % 2 === 0) {
    document.querySelector('.trashTwo').style.opacity = '1'
  }
}

restart.addEventListener('click', () => {
  score = 0
  tally.innerText = score
  time = 3000
  clearInterval(trashTime)
  trashTime = setInterval(playGame, time)
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
    time = 3000
  } else if (score > 10 && score <= 20) {
    time = 2000
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  } else if (score > 20 && score <= 30) {
    time = 1750
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  } else if (score > 30 && score <= 40) {
    time = 1500
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  } else if (score > 40 && score <= 50) {
    time = 1000
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  } else if (score > 50 && score <= 60) {
    time = 700
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  }
}

let playGame = () => {
  randomLocation()
  timeSet()
  visible()
}

let trashTime = setInterval(playGame, time)
