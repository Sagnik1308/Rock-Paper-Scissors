function playRound(playerSelection,computerSelection){
    computerSelection=computerSelection.toLowerCase();
    playerSelection=playerSelection.toLowerCase();
    if (playerSelection==computerSelection){
        console.log("It's a draw!");
        return 0;
    }else if (playerSelection=="rock" && computerSelection=="scissors"){
        console.log(`You win this Round! ${playerSelection} beats ${computerSelection}`);
        return 1;
    }else if (playerSelection=='paper' && computerSelection=='rock'){
        console.log(`You win this Round! ${playerSelection} beats ${computerSelection}`);
        return 1;
    }else if (playerSelection=='scissors' && computerSelection=='paper'){
        console.log(`You win this Round! ${playerSelection} beats ${computerSelection}`);
        return 1;
    }else{
        console.log(`You Lose this Round! ${computerSelection} beats ${playerSelection}`);
        return -1;
    }
}
function getComputerChoice(){
    let randomNumber=Math.floor(Math.random()*100)+1;
    if (randomNumber<=30) return "Rock";
    else if (randomNumber<=60) return "Paper";
    else return "Scissors";
}
function game(){
    let score=0;
    for(let i=0;i<5;i++){
        let computerChoice=getComputerChoice();
        let playerChoice=prompt('Enter Rock, Paper or Scissors...');
        score+=playRound(playerChoice,computerChoice);
    }
    if (score>0){
        console.log("You win the Best Of 5.");
    }else if (score<0){
        console.log("Computer Wins the Best Of 5.");
    }else{
        console.log("It's a draw!");
    }
}
game();