let playerturn = true
let diceHistory = []

function getElement(id) {
  return document.getElementById(id)
}

const player1 = getElement('player1')
const player2 = getElement('player2')
const player1HistorySection = getElement('player1-history')
const player2HistorySection = getElement('player2-history')

function onload() {.0
  player1.disabled = !playerturn
  player2.disabled = playerturn
}

function diceRoll(player) {
  
  if(diceHistory.length > 0) {
    // if last rolled number is not 6
    // or
    // if 3 times rolled by a player already
    // empty the dice history
    if(diceHistory[diceHistory.length - 1] !== 6 || diceHistory.length === 3) {
      diceHistory = []
    }
  }

  // generate a random number between 1 to 6
  const numberRolled = Math.floor((Math.random() * 6) + 1)
  console.log(`${player} rolled ${numberRolled}`);

  // change turn if not rolled a 6
  if(numberRolled !== 6) {
    playerturn = !playerturn // toggle the flag
    onload() // update the dom
  }

  diceHistory.push(numberRolled)

  // change turn if 6 is rolled 3rd time in a row by a player
  if (numberRolled === 6 && diceHistory.length === 3) {
    playerturn = !playerturn // toggle the flag
    onload() // update the dom
  }

  // update history section
  if(player === 'player1') {
    player1HistorySection.innerHTML += `<div>Hunny rolled: ${diceHistory[diceHistory.length - 1]}</div>`
  } else {
    player2HistorySection.innerHTML += `<div>Rahul rolled: ${diceHistory[diceHistory.length - 1]}</div>`
  }
}

player1.addEventListener('click', () => diceRoll('player1'))
player2.addEventListener('click', () => diceRoll('player2'))