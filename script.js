let score = 0
const trash = document.querySelector('.trash')
const tally = document.querySelector('.score')
let random

//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
randomLocation = () => {
  min = Math.ceil(80)
  max = Math.floor(20)
  random = Math.floor(Math.random() * (max - min) + min)
  console.log(random)
}

randomLocation()

trash.style.top = random + '%'
trash.style.left = random + '%'

trash.addEventListener('click', () => {
  score += 2
  tally.innerText = score
  trash.style.top = random + '%'
  trash.style.left = random + '%'
})

// function trashMove = () => {
//   trashX = math.floor(math.random() * gridArr)
//   trashY = math.floor(math.random() * gridArr)
// }

// div to move randomly throughout the page
// - using math.random change x and y position
// if div is clicked add to score and change position
