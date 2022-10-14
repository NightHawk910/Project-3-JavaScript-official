function computerplay(){
    let choices = ['rock','paper','scissor']
    return choices[Math.floor(Math.random() * choices.length)]
}
function playRound(playerSelection, computerSelection){
    let playerPoint = 0
    
    if ((playerSelection == 'rock' && computerSelection == 'scissor') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissor' && computerSelection == 'paper')
    ){
        console.log('you win ' + playerSelection + ' beats ' + computerSelection);
    }
    else{
        console.log('you lose ' + computerSelection + ' beat ' + playerSelection)
    }
    return playerPoint
}
function game(roundsTotal = 5) {
    let roundsPlayed = 0
    let Playerscore = 0
    while (roundsPlayed < roundsTotal){
        let playerSelection = prompt('rock , paper or scissor?')
        playerSelection = playerSelection.toLowerCase();
        if ((playerSelection != 'rock') &&
        (playerSelection != 'paper') &&
        (playerSelection != 'scissor'))
        {continue}

        let computerSelection = computerplay()
        if (playerSelection == computerSelection){
            console.log('It\'s a tie. you both choose' + playerSelection)
            continue
        }
    }
    Playerscore += playRound(playerSelection, computerSelection)
    roundsPlayed++

if (Playerscore > (roundsPlayed/2)) {
    console.log('you won' + Playerscore + 'out of' + roundsPlayed + 'rounds')
}
else if (Playerscore == (roundsPlayed/2)) {
    console.log('its a tie ' + Playerscore + 'out of' + roundsPlayed)
}
else {
    console.log('you lose')
}
}