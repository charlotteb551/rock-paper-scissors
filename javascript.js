function getComputerChoice(){
    const a = Math.random()
    if (a<1/3){
        result = "rock"
    }else if (a<2/3){
        result = "paper"
    }else{
        result = "scissors"
    }
    return result
}

function getHumanChoice(){
    let b = prompt("Pick Rock, Paper or Scissors:")
    return b.toLowerCase()
}

console.log(getHumanChoice())