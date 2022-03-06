const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    //* Start the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    //* Play the match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.playerHand');
        const computerHand = document.querySelector('.computerHand');

        //* Computer options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function () {
                //* Computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                // console.log(computerChoice);

                compareHands(this.textContent, computerChoice);

                //* Update images
                playerHand.src = `./img/${this.textContent}.png`;
                computerHand.src = `./img/${computerChoice}.png`;
            });
        });
    };

    const updateScore = () => {
        const pScore = document.querySelector('.playerScore p');
        const cScore = document.querySelector('.computerScore p');
        pScore.textContent = playerScore;
        cScore.textContent = computerScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
        //* Update text
        const winner = document.querySelector('.winner');

        //* Case tie
        if (playerChoice === computerChoice) {
            winner.textContent = 'It is a tie';
            return;
        };

        //* Case rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Player wins!';
                playerScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer wins';
                computerScore++;
                updateScore();
                return;
            };
        };

        //* Case paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Computer wins';
                computerScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player wins!';
                playerScore++;
                updateScore();
                return;
            };
        };

        //* Case scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Computer wins';
                computerScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player wins!';
                playerScore++;
                updateScore();
                return;
            };
        };
    };

    // console.log(computerNumber);

    startGame();
    playMatch();
};

game();