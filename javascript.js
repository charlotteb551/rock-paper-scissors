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

console.log(getHumanChoice())