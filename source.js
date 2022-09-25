function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    if (playerSelection == computerSelection)
        return "It's a tie, you both picked " + playerSelection

    if (playerSelection == "rock") {
        if (computerSelection == "paper")
            return "Paper beats rock, you lose!"
        else return "Rock beats scissors, you win!"
    }

    if (playerSelection == "paper") {
        if (computerSelection == "rock")
            return "Paper beats rock, you win!"
        else return "Scissors beats paper, you lose!"
    }

    if (playerSelection == "scissors") {
        if (computerSelection == "paper")
            return "Scissors beats paper, you win!"
        else return "Rock beats scissors, you lose!"
    }
}

function game(numberOfRounds) {
    let playerScore = 0
    let computerScore = 0
    let message
    while(playerScore + computerScore < 5) {
        playerSelection = prompt("Pick rock, paper or scissors")
        message = playRound(playerSelection, getComputerChoice())
        console.log(message)
        if(message.substr(-2) == "n!") playerScore++
        else if(message.substr(-2) == "e!") computerScore++
    }
    if (playerScore > computerScore) {
        console.log("You won the game by winning " + playerScore + " out of 5 rounds!")
    } else {
        console.log("You lost the game. Your opponent won " + computerScore + " out of 5 rounds.")
    }
}

game(5)