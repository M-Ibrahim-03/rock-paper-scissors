/*
Pseudocode / Algorithm
generate random number from 1 to 3 [1,2, or 3]
if 1 then choose rock
if 2 then choose paper
if 3 then choose scissors
return the choice
*/
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    num = num == 1 ? "rock" : num == 2 ? "paper" : "scissors" 
    return num;
}


/*
Pseudocode / Algorithm
Get input from the user as one of the three options ["rock", "paper" pr "scissor"]
return the input
*/
function getHumanChoice() {
    let choice = prompt('Enter ["rock", "paper" or "scissors"]')
    return choice
}


let humanScore = 0;
let computerScore = 0;

/*
Pseudocode / Algorithm
Get user input and computer choice
Convert user input to lower case so that it matches computer choice
If both choices are same then it's a tie.
Else If user choice is rock and computer choice is scissors the user wins. same for both paper and scissors if computer chooses rock and paper respectively.
Else If user choice is rock and computer choice is paper the user loses. same for both paper and scissors if computer chooses scissors and rock respectively.
log the result
*/
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice == computerChoice) {
        console.log("It's a tie!")
    }
    else if(
        (humanChoice=="rock" && computerChoice=="scissors") ||
        (humanChoice=="paper" && computerChoice=="rock") ||
        (humanChoice=="scissors" && computerChoice=="paper")
    ) {
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
        humanScore++;
    }
    else if(
        (humanChoice=="rock" && computerChoice=="paper") ||
        (humanChoice=="paper" && computerChoice=="scissors") ||
        (humanChoice=="scissors" && computerChoice=="rock")
    ) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        computerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);