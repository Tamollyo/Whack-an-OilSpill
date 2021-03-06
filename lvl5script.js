let score = 0
let hScore = sessionStorage.getItem(`highScore`)
console.log(hScore)
let time = 1000
const trash = document.querySelector('.trash')
const trashTwo = document.querySelector('.trashTwo')
const trashThree = document.querySelector('.trashThree')
const duckFour = document.querySelector('.duckFour')
const duckFive = document.querySelector('.duckFive')
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

let play = () => {
  const audios = [
    './img/Duck Quack 1 - QuickSounds.com (1).mp3',
    './img/Duck Duckling Chirp 1 - QuickSounds.com.mp3',
    './img/Duck Quack 2 - QuickSounds.com (1).mp3',
    './img/Duck Duckling Chirp 2 - QuickSounds.com.mp3',
    './img/Duck - QuickSounds.com.mp3'
  ]
  minPlay = Math.ceil(0)
  maxPlay = Math.floor(5)
  let random = Math.floor(Math.random() * (maxPlay - minPlay) + minPlay)

  let audio = new Audio(audios[random])
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
  trashTwo.style.top = Math.floor(Math.random() * (max - min) + min) + '%'
  trashTwo.style.left = Math.floor(Math.random() * (max - min) + min) + '%'
  trashThree.style.top = Math.floor(Math.random() * (max - min) + min) + '%'
  trashThree.style.left = Math.floor(Math.random() * (max - min) + min) + '%'
  duckFour.style.top = Math.floor(Math.random() * (max - min) + min) + '%'
  duckFour.style.left = Math.floor(Math.random() * (max - min) + min) + '%'
  duckFive.style.top = Math.floor(Math.random() * (max - min) + min) + '%'
  duckFive.style.left = Math.floor(Math.random() * (max - min) + min) + '%'
}

timeSet = () => {
  if (score <= 10) {
    time = 1700
    duckFour.style.visibility = 'hidden'
  } else if (score > 10 && score <= 12) {
    time = 1500
    clearInterval(trashTime)
    duckFour.style.visibility = 'visible'
    trashThree.style.visibility = 'hidden'
    trashTime = setInterval(playGame, time)
  } else if (score > 12 && score <= 14) {
    time = 1300
    clearInterval(trashTime)
    duckFive.style.visibility = 'hidden'
    trashThree.style.visibility = 'visible'
    trashTime = setInterval(playGame, time)
  } else if (score > 14 && score <= 24) {
    time = 1250
    duckFive.style.visibility = 'visible'
    trashTwo.style.visibility = 'hidden'
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  } else if (score > 24 && score <= 30) {
    time = 1500
    clearInterval(trashTime)
    duckFour.style.visibility = 'hidden'
    trashThree.style.visibility = 'hidden'
    trashTime = setInterval(playGame, time)
  } else if (score > 30 && score <= 40) {
    time = 1000
    duckFour.style.visibility = 'visible'
    duckFive.style.visibility = 'hidden'
    trashTwo.style.visibility = 'visible'
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  } else if (score > 40 && score <= 50) {
    time = 800
    duckFive.style.visibility = 'visible'
    trashTwo.style.visibility = 'hidden'
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  } else if (score > 50 && score <= 60) {
    time = 500
    trashTwo.style.visibility = 'visible'
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  } else if (score > 60) {
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
