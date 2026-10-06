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

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");

const result = document.querySelector('div');

const score = document.createElement("p");
const body = document.querySelector("body")

body.appendChild(score)

/*
Pseudocode
Define score for human and computer
Call playRound 5 times
While calling playRound pass computerChoice and humanChoice as arguments as function expressions
*/
function playGame() 
{
    let humanScore = 0;
    let computerScore = 0;

    let gameOver = false;
     

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

            console.log(`Human score: ${humanScore} , Computer score: ${computerScore}`)
            humanChoice = humanChoice.toLowerCase();
            if(humanChoice == computerChoice) {
                result.innerText = "It's a tie!"
            }
            else if(
                (humanChoice=="rock" && computerChoice=="scissors") ||
                (humanChoice=="paper" && computerChoice=="rock") ||
                (humanChoice=="scissors" && computerChoice=="paper")
            ) {
                result.innerText = `You Win! ${humanChoice} beats ${computerChoice}`
                humanScore++;
                score.innerText = `Your score: ${humanScore} , Computer score: ${computerScore}`
            }
            else if(
                (humanChoice=="rock" && computerChoice=="paper") ||
                (humanChoice=="paper" && computerChoice=="scissors") ||
                (humanChoice=="scissors" && computerChoice=="rock")
            ) {
                result.innerText = `You lose! ${humanChoice} gets beaten by ${computerChoice}`
                computerScore++;
                score.innerText = `Your score: ${humanScore} , Computer score: ${computerScore}`

            }

        
        // Winner Declare
        if (humanScore >= 5 && computerScore < 5) {
            result.innerText = 'Game over you won!'
            gameOver = true;
        }
        else if (humanScore < 5 && computerScore >= 5) {
            result.innerText = 'Game over you lost!'
            gameOver = true
        }
    }

    

    rock.addEventListener("click", 
    () => {
        if (gameOver == true) return
        playRound(humanChoice="rock", computerChoice=getComputerChoice())
    }
    )

    paper.addEventListener("click", 
    () => {
        if (gameOver == true) return
        playRound(humanChoice="paper", computerChoice=getComputerChoice())
    }    
    )

    scissors.addEventListener("click", 
    () => {
            if (gameOver == true) return
        playRound(humanChoice="scissors", computerChoice=getComputerChoice())
    }  
    )

   


}

playGame()

