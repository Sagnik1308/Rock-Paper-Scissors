function playRound(playerSelection,computerSelection){
    computerSelection=computerSelection.toLowerCase();
    playerSelection=playerSelection.toLowerCase();
    if (playerSelection==computerSelection){
        return 0;
    }else if (playerSelection=="rock" && computerSelection=="paper"){
        return -1;
    }else if (playerSelection=='rock' && computerSelection=='scissor'){
        return 1;
    }else if (playerSelection=='paper' && computerSelection=='rock'){
        return 1;
    }else if (playerSelection=='paper' && computerSelection=='scissor'){
        return -1;
    }else if (playerSelection=='scissor' && computerSelection=='rock'){
       return -1;
    }else if (playerSelection=='scissor' && computerSelection=='paper'){
        return 1;
    }
}
function getComputerChoice(){
    let randomNumber=Math.floor(Math.random()*100)+1;
    if (randomNumber<=30) return "Rock";
    else if (randomNumber<=60) return "Paper";
    else return "Scissor";
}
function game(){
    let score=0;
    for(let i=0;i<5;i++){
        let computerChoice=getComputerChoice();
        let playerChoice=prompt('Enter Rock, Paper or Scissors...');
        let result=playRound(playerChoice,computerChoice);
        if(result<0){
            console.log("You loose this round! Computer Wins.");
            score-=1;
        }else if (result>0){
            console.log('You win this round! Computer looses.');
            score+=1;
        }else{
            console.log("Draw.");
        }
    }
    if (score>0){
        console.log("You win the Best Of 5.");
    }else{
        console.log("Computer Wins the Best Of 5.");
    }
}
game();