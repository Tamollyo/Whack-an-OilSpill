let score = 0
let time = 6000
const trash = document.querySelector('.trash')
const tally = document.querySelector('.score')
let randomTop
let randomLeft

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
timeSet = (score) => {
  if (score <= 10) {
    time = 5000; 
  } if else (score > 10 && score <= 20) {
    time = 4000
  } if else (score > 20 && score <= 30) {
    time = 3000
  } if else (score > 30 && score <= 40) {
    time = 2000
  } if else (score > 40 && score <= 50) {
    time = 1000
  } if else (score > 50 && score <= 60) {
    time = 500
  }
}
// https://javascript.info/settimeout-setinterval
// let trashTimer = setInterval(randomLocation, timeSet)

let trashTime = setTimeout(randomLocation, timeSet)

// if (score >= 10) {
//   timeSet -= 4000
//   console.log(timeSet)
// }

trash.addEventListener('click', () => {
  score += 2
  tally.innerText = score
  randomLocation()
})

// function trashMove = () => {
//   trashX = math.floor(math.random() * gridArr)
//   trashY = math.floor(math.random() * gridArr)
// }

// div to move randomly throughout the page
// - using math.random change x and y position
// if div is clicked add to score and change position
