const rollBtn = document.querySelector('#rollBtn')
const dice1 = document.querySelector('#dice1')
const dice2 = document.querySelector('#dice2')
const title = document.querySelector('#title')

let randomNum1;
let randomNum2;

rollBtn.addEventListener('click', () => {
  rollBtn.style.opacity = 0.5
  setTimeout( () => {rollBtn.style.opacity = 1}, 50)

    randomNum1 = Math.floor((Math.random() * 6) + 1)
    randomNum2 = Math.floor((Math.random() * 6) + 1)
    console.log(randomNum1)

    condition (randomNum1, dice1)
    condition (randomNum2, dice2)
    result ()
})

  function condition (random, dice) {
    if (random === 1) {
      dice.src = "./images/dice1.svg"
    }
    else if (random === 2) {
      dice.src = "./images/dice2.svg"
    }
    else if (random === 3) {
      dice.src = "./images/dice3.svg"
    }
    else if (random === 4) {
      dice.src = "./images/dice4.svg"
    }
    else if (random === 5) {
      dice.src = "./images/dice5.svg"
    }
    else {
      dice.src = "./images/dice6.svg"
    }
  }

  function result () {
    if (randomNum1 > randomNum2) {
      title.textContent = 'Player 1 wins!'
    }
    else if (randomNum1 === randomNum2) {
      title.textContent = 'It\'s a tie.'
    }
    else {
      title.textContent = 'Player 2 wins!'
    }
  }