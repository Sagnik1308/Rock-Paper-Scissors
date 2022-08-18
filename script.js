function playRound(playerSelection,computerSelection){
    computerSelection=computerSelection.toLowerCase();
    playerSelection=playerSelection.toLowerCase();
    if (playerSelection==computerSelection){
        console.log("Draw");
    }else if (playerSelection=="rock" && computerSelection=="paper"){
        console.log("You loose! Paper beats Rock.");
    }else if (playerSelection=='rock' && computerSelection=='scissor'){
        console.log("You win! Rock beats Scissor.");
    }else if (playerSelection=='paper' && computerSelection=='rock'){
        console.log('You win! Paper beats Rock.');
    }else if (playerSelection=='paper' && computerSelection=='scissor'){
        console.log('You loose. Scissor beats paper.');
    }else if (playerSelection=='scissor' && computerSelection=='rock'){
        console.log('You loose. Scissor beats Rock.');
    }else if (playerSelection=='scissor' && computerSelection=='paper'){
        console.log('You win.Scissor beats paper.');
    }else{
        console.log('You entered wrong input.')
    }
}
function getComputerChoice(){
    let randomNumber=Math.floor(Math.random()*100)+1;
    if (randomNumber<=30) return "Rock";
    else if (randomNumber<=60) return "Paper";
    else return "Scissors";
}
let computerChoice=getComputerChoice();
let playerChoice=prompt('Enter Rock, Paper or Scissors...');
playRound(playerChoice,computerChoice);