function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase()
    let computerSelection = getComputerChoice().toLowerCase();
    let message;

    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    message = "You both picked rock, it's a tie!";
                    break;
                case "paper":
                    message = "Paper beats rock, you lose!"
                    computerScore++;
                    break;
                case "scissors":
                    message = "Rock beats scissors, you win!";
                    playerScore++;
                    break;
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "rock":
                    message = "Paper beats rock, you win!";
                    playerScore++;
                    break;
                case "paper":
                    message = "You both picked paper, it's a tie!"
                    break;
                case "scissors":
                    message = "Scissors beats paper, you lose!";
                    computerScore++;
                    break;
            }
            break;
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    message = "Rock beats scissors, you lose!";
                    computerScore++;
                    break;
                case "paper":
                    message = "Scissors beats paper, you win!"
                    playerScore++;
                    break;
                case "scissors":
                    message = "You both picked scissors, it's a tie!";
                    break;
            }
            break;
    }
    let result = document.querySelector("#result");
    result.textContent = "Result: " + message;
    let scoreboard = document.querySelector("#scoreboard");
    scoreboard.textContent = `Your score: ${playerScore} *** Computer score: ${computerScore}`;

    let finalResult = document.querySelector("#finalResult")
    if(playerScore == 3) {
        finalResult.textContent += "You have won the game!";
    }
    if(computerScore == 3) {
        finalResult.textContent += "You have lost the game!";
    }
}

let playerScore = 0;
let computerScore = 0;
let numberOfRounds = 5;
