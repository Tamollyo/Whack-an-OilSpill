let score = 0
const trash = document.querySelector('.trash')
const tally = document.querySelector('.score')

trash.addEventListener('click', () => {
  score += 2
  tally.innerText = score
})
