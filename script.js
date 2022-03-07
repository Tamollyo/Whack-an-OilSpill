let score = 0
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

// https://javascript.info/settimeout-setinterval
let trashTimer = setInterval(randomLocation, 1000)

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
