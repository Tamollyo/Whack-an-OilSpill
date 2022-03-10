let score = 0
let hScore = sessionStorage.getItem(`highScore`)
console.log(hScore)
let time = 1000
const trash = document.querySelector('.trash')
const trashThree = document.querySelector('.trashThree')
const duckFour = document.querySelector('.duckFour')
const duckFive = document.querySelector('.duckFive')
const duckSix = document.querySelector('.duckSix')
const duckSeven = document.querySelector('.duckSeven')
const duckEight = document.querySelector('.duckEight')
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

trashThree.addEventListener('click', () => {
  score += 3
  if (score > hScore) {
    hScore = score
    highScore.innerText = hScore
    sessionStorage.setItem(`highScore`, hScore)
  }
  tally.innerText = score
  randomLocation()
})

duckFour.addEventListener('click', () => {
  score -= 3
  if (score > hScore) {
    hScore = score
    highScore.innerText = hScore
    sessionStorage.setItem(`highScore`, hScore)
  }
  tally.innerText = score
  play()
  randomLocation()
})

duckFive.addEventListener('click', () => {
  score -= 3
  if (score > hScore) {
    hScore = score
    highScore.innerText = hScore
    sessionStorage.setItem(`highScore`, hScore)
  }
  tally.innerText = score
  play()
  randomLocation()
})

duckSix.addEventListener('click', () => {
  score -= 3
  if (score > hScore) {
    hScore = score
    highScore.innerText = hScore
    sessionStorage.setItem(`highScore`, hScore)
  }
  tally.innerText = score
  play()
  randomLocation()
})

duckSeven.addEventListener('click', () => {
  score -= 3
  if (score > hScore) {
    hScore = score
    highScore.innerText = hScore
    sessionStorage.setItem(`highScore`, hScore)
  }
  tally.innerText = score
  play()
  randomLocation()
})

duckEight.addEventListener('click', () => {
  score -= 3
  if (score > hScore) {
    hScore = score
    highScore.innerText = hScore
    sessionStorage.setItem(`highScore`, hScore)
  }
  tally.innerText = score
  play()
  randomLocation()
})

let play = () => {
  let audio = new Audio('./img/Duck Quack 1 - QuickSounds.com (1).mp3')
  audio.play()
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
  trashThree.style.top = Math.floor(Math.random() * (max - min) + min) + '%'
  trashThree.style.left = Math.floor(Math.random() * (max - min) + min) + '%'
  duckFour.style.top = Math.floor(Math.random() * (max - min) + min) + '%'
  duckFour.style.left = Math.floor(Math.random() * (max - min) + min) + '%'
  duckFive.style.top = Math.floor(Math.random() * (max - min) + min) + '%'
  duckFive.style.left = Math.floor(Math.random() * (max - min) + min) + '%'
  duckSix.style.top = Math.floor(Math.random() * (max - min) + min) + '%'
  duckSix.style.left = Math.floor(Math.random() * (max - min) + min) + '%'
  duckSeven.style.top = Math.floor(Math.random() * (max - min) + min) + '%'
  duckSeven.style.left = Math.floor(Math.random() * (max - min) + min) + '%'
  duckEight.style.top = Math.floor(Math.random() * (max - min) + min) + '%'
  duckEight.style.left = Math.floor(Math.random() * (max - min) + min) + '%'
}

timeSet = () => {
  if (score <= 10) {
    time = 2000
  } else if (score > 10 && score <= 20) {
    time = 1500
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  } else if (score > 20 && score <= 30) {
    time = 1250
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  } else if (score > 30 && score <= 40) {
    time = 1000
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  } else if (score > 40 && score <= 50) {
    time = 800
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
  timeSet()
}

let trashTime = setInterval(playGame, time)
