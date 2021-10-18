    let score = 0;
    
    function computerPlay(){
        let random = ['rock', 'scissors', 'paper'];
        return random[Math.floor(Math.random()*3)]
    }
    
    
    function playRound(playerSelection, computerSelection) {
            if (playerSelection == "rock"){
                if(computerSelection == "scissors"){
                    score++
                   return "You Win! rock beats scissors"
                         
                }
            }
            if (playerSelection == "rock"){
                if(computerSelection == "paper"){
                    score--
                    return  "You Lose! paper beats rock"
                }
            }
            if (playerSelection == "rock"){
                if(computerSelection == "rock"){
                    return  "You draw! rock doesnt beat rock"
                }
            }
            if (playerSelection == "scissors"){
                if(computerSelection == "scissors"){
                    return  "You draw! scissors doesnt beat scissors"
                }
            }
            if (playerSelection == "scissors"){
                if(computerSelection == "paper"){
                    score++
                    return  "You win! scissors beats paper"
                }
            }
            if (playerSelection == "sicssors"){
                if(computerSelection == "rock"){
                    score--
                    return  "You lose! rock beat scissors"
                }
            }
            if (playerSelection == "paper"){
                if(computerSelection == "scissors"){
                    score--
                    return  "You lose! scissors  beat paper"
                }
            }
            if (playerSelection == "paper"){
                if(computerSelection == "paper"){
                    return   "You draw! paper deosnt beats paper"
                }
            }
            if (playerSelection == "paper"){
                if(computerSelection == "rock"){
                    score++
                    return "You win! paper beat rock"
                }
            }
            }

    
    const computerSelection = computerPlay();
    
   
    function game(){
        for(let i = 1;i<=5;i++){
            var playerSelection = prompt(String);
            var computerSelection = computerPlay();
            console.log(playRound(playerSelection, computerSelection));
        }
        return console.log("you win " + score + " times") 
    }
    game()