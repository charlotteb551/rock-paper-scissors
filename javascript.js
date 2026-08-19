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

const results = document.querySelector("#results");
const score = document.querySelector("#score")

//Plays one round
function playRound(humanChoice, computerChoice){
    if(humanScore === 5 || computerScore === 5) {
        return;
    } 

    if(humanChoice === "rock"){
        if(computerChoice === "rock"){
            results.textContent ="It's a draw!";
        }else if(computerChoice === "paper"){
            results.textContent = "You lose! Paper beats Rock.";
            computerScore += 1;
        }else{
            results.textContent = "You win! Rock beats Scissors.";
            humanScore += 1;
        }
    }else if(humanChoice === "paper"){
        if(computerChoice === "paper"){
            results.textContent ="It's a draw!";
        }else if(computerChoice === "scissors"){
            results.textContent ="You lose! Scissors beat Paper.";
            computerScore += 1;
        }else{
            results.textContent ="You win! Paper beats Rock.";
            humanScore += 1;
        }
    }else{
        if(computerChoice === "scissors"){
            results.textContent="It's a draw!";
        }else if(computerChoice === "rock"){
            results.textContent="You lose! Rock beats Scissors.";
            computerScore += 1;
        }else{
            results.textContent="You win! Scissors beats Paper.";
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