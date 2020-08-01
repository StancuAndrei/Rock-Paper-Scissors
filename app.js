



const game = () => {
    let pScore =0;
    let cScore = 0;

    //start
    const startGame = () => {
        const playButton = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playButton.addEventListener("click",() => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        })
    };


    //play
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            })
        })

        // compt opts
        const  computerOptions = ["rock","paper","scissors"];

        options.forEach((option) => {
            option.addEventListener("click", function(){
                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                setTimeout(() => {
                                    //here we call compare hands
                compareHands(this.textContent,computerChoice);
                //update images
                playerHand.src=`./assets/${this.textContent}.png`;
                computerHand.src=`./assets/${computerChoice}.png`;
                }, 2000);


                //animation
                playerHand.style.animation="shakePlayer 2s ease";
                computerHand.style.animation="shakeComputer 2s ease";
            })
        });

    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent=cScore;

    }

    const compareHands = (playerChoise, computerChoice) =>{
        //update text
        const winner = document.querySelector(".winner");
        if(playerChoise === computerChoice){
            winner.textContent = "It is a tie";
            return;
        }
        if(playerChoise === "rock"){
            if(computerChoice === "scissors"){
                winner.textContent="Player wins";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent="Computer wins";
                cScore++;
                updateScore();
                return;
            }
        }

        if(playerChoise === "paper"){
            if(computerChoice === "scissors"){
                winner.textContent="Computer wins";
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent="Player wins";
                pScore++;
                return;
            }
        }

        if(playerChoise === "scissors"){
            if(computerChoice === "rock"){
                winner.textContent="Computer wins";
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent="Player wins";
                pScore++;
                updateScore();
                return;
            }
        }
    }


    //call functs
    startGame();
    playMatch();
};


game();