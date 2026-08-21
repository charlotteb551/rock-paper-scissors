const results = document.querySelector("#results");
const score = document.querySelector("#score");
const computer = document.querySelector("#computer");

//Gets Computers Selection
function getComputerChoice(){
    const a = Math.random();
    if (a<1/3){
        return "rock";
    }else if (a<2/3){
        return "paper";
    }else{
        return "scissors";
    }
}

//Scores
let humanScore = 0;
let computerScore = 0;

//Plays one round
function playRound(humanChoice, computerChoice){
    if(humanScore === 5 || computerScore === 5) {
        return;
    } 

    computer.textContent = "Computer's Weapon: " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

    if(humanChoice === "rock"){
        if(computerChoice === "rock"){
            results.innerHTML ="It's a draw!";
        }else if(computerChoice === "paper"){
            results.innerHTML = "You lose!<br>Paper beats Rock.";
            computerScore += 1;
        }else{
            results.innerHTML = "You win!<br>Rock beats Scissors.";
            humanScore += 1;
        }
    }else if(humanChoice === "paper"){
        if(computerChoice === "paper"){
            results.innerHTML ="It's a draw!";
        }else if(computerChoice === "scissors"){
            results.innerHTML ="You lose!<br>Scissors beat Paper.";
            computerScore += 1;
        }else{
            results.innerHTML ="You win!<br>Paper beats Rock.";
            humanScore += 1;
        }
    }else{
        if(computerChoice === "scissors"){
            results.innerHTML="It's a draw!";
        }else if(computerChoice === "rock"){
            results.innerHTML="You lose!<br>Rock beats Scissors.";
            computerScore += 1;
        }else{
            results.innerHTML="You win!<br>Scissors beats Paper.";
            humanScore += 1;
        }
    }

    score.textContent = "Your Score: " + humanScore + 
                        " | Computer's Score: " + computerScore;

    if (humanScore === 5){
        results.textContent = "Congratulations, you win the game!";
    }else if (computerScore === 5){
        results.textContent = "Computer wins the game! Better luck next time.";
    }

}

//Getting buttons and adding event listeners
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () =>{
    playRound("rock",getComputerChoice());
});

paperButton.addEventListener("click", () =>{
    playRound("paper",getComputerChoice());
});

scissorsButton.addEventListener("click", () =>{
    playRound("scissors",getComputerChoice());
});