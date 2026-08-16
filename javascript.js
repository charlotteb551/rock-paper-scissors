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

function getHumanChoice(){
    let b = prompt("Pick Rock, Paper or Scissors:");
    return b.toLowerCase();
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;

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
    }

    for (let i=0; i<5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log("You:"+humanSelection)
        console.log("Computer:" +computerSelection)

        playRound(humanSelection, computerSelection)  
    }
    
    return{
        humanScore: humanScore,
        computerScore: computerScore
    }
}

console.log(playGame())