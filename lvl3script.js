let score = 0
let hScore = sessionStorage.getItem(`highScore`)
console.log(hScore)
let time = 1000
const trash = document.querySelector('.trash')
const trashTwo = document.querySelector('.trashTwo')
const trashThree = document.querySelector('.trashThree')
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
}

timeSet = () => {
  if (score <= 10) {
    time = 2000
    trashTwo.style.visibility = 'hidden'
  } else if (score > 10 && score <= 20) {
    time = 1500
    trashTwo.style.visibility = 'visible'
    trashThree.style.visibility = 'hidden'
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  } else if (score > 20 && score <= 30) {
    time = 1250
    trashTwo.style.visibility = 'hidden'
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  } else if (score > 30 && score <= 40) {
    time = 1100
    trashThree.style.visibility = 'visible'
    trashTwo.style.visibility = 'visible'
    trash.style.visibility = 'hidden'
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  } else if (score > 40 && score <= 50) {
    time = 1000
    trash.style.visibility = 'visible'
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  } else if (score > 50 && score <= 60) {
    time = 600
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  } else if (score > 60) {
    time = 500
    clearInterval(trashTime)
    trashTime = setInterval(playGame, time)
  }
}

let playGame = () => {
  randomLocation()
  timeSet()
}

let trashTime = setInterval(playGame, time)
