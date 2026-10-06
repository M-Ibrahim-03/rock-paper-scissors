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

let rock = document.querySelector(".rock")
let paper = document.querySelector(".paper")
let scissors = document.querySelector(".scissors")

const result = document.querySelector('div')



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

    while (humanScore <= 5 || computerScore <= 5) {
    if (humanScore >= 5 && computerScore < 5) {
        console.log('Game over you won!')
    }
    else if (humanScore < 5 && computerScore >= 5) {
        console.log('Game over you lost!')
    }

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



    rock.addEventListener("click", 
    () => {
        playRound(humanChoice="rock", computerChoice=getComputerChoice())
    }
    )

    paper.addEventListener("click", 
    () => {
        playRound(humanChoice="paper", computerChoice=getComputerChoice())
    }    
    )

    scissors.addEventListener("click", 
    () => {
        playRound(humanChoice="scissors", computerChoice=getComputerChoice())
    }  
    )

    }
   

    // else if (humanScore > computerScore) console.log(`You Won the game, congratulations.`);
    // else if (computerScore > humanScore) console.log("You lost the game, better luck next time.");
    // else console.log("It's a tie!")

}

playGame()

