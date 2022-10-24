function playRound(playerSelection,computerSelection){
    computerSelection=computerSelection.toLowerCase();
    playerSelection=playerSelection.toLowerCase();
    if (playerSelection==computerSelection){
        return 0;
    }else if (playerSelection=="rock" && computerSelection=="scissors"){
        return 1;
    }else if (playerSelection=='paper' && computerSelection=='rock'){
        return 1;
    }else if (playerSelection=='scissors' && computerSelection=='paper'){
        return 1;
    }else{
        return -1;
    }
}
function getComputerChoice(){
    let randomNumber=Math.floor(Math.random()*100)+1;
    if (randomNumber<=30) return "Rock";
    else if (randomNumber<=60) return "Paper";
    else return "Scissors";
}
const res=document.querySelector('.Result');
let playerScore=0, compScore=0;
function game(update){
    if (update>0){
        playerScore+=1;
    }else if (update<0){
        compScore+=1;
    }
    res.textContent=`Player Score: ${playerScore}  Computer Score: ${compScore}`;
    if (playerScore==5 || compScore==5){
        if (playerScore==5){
            alert('You Win!');
        }else{
            alert('The Computer Wins!');
        }
        playerScore=0;
        compScore=0;
        res.textContent=`Player Score: 0  Computer Score: 0`;
    }
}
function playTheGame(btn){
    btn.addEventListener('click',(e)=>{
        const btnName=e.target.id;
        let k=playRound(btnName,getComputerChoice());
        game(k);
    });
}
const btns=document.querySelectorAll('button');
btns.forEach(playTheGame);