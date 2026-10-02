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

console.log(getComputerChoice())


/*
Pseudocode / Algorithm
Get input from the user as one of the three options ["rock", "paper" pr "scissor"]
return the input
*/
function getHumanChoice() {
    let choice = prompt('Enter ["rock", "paper" or "scissors"]')
    return choice
}

console.log(getHumanChoice())   