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
    if(humanChoice === "rock"){
        if(computerChoice === "rock"){
            console.log("It's a draw!");
        }else if(computerChoice === "paper"){
            console.log("You lose!");
            computerScore += 1;
        }else{
            console.log("You win!");
            humanScore += 1;
        }
    }else if(humanChoice === "paper"){
        if(computerChoice === "paper"){
            console.log("It's a draw!");
        }else if(computerChoice === "scissors"){
            console.log("You lose!");
            computerScore += 1;
        }else{
            console.log("You win!");
            humanScore += 1;
        }
    }else{
        if(computerChoice === "scissors"){
            console.log("It's a draw!");
        }else if(computerChoice === "rock"){
            console.log("You lose!");
            computerScore += 1;
        }else{
            console.log("You win!");
            humanScore += 1;
        }
    }

    console.log("Your Score:" + humanScore);
    console.log("Computer's Score:" + computerScore);

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