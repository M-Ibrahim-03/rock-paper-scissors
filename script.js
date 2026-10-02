/*
Pseudocode / Algorithm
generate random number from 1 to 3 [1,2, or 3]
if 1 then choose rock
if 2 then choose paper
if 3 then choose scissor
return the choice
*/
function getComputerChoice() {
    num = Math.floor(Math.random() * 3) + 1;
    num = num == 1 ? "rock" : num == 2 ? "paper" : "scissor" 
    return num;
}

console.log(getComputerChoice())