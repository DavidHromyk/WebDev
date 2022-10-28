
// Creates a function to check the users input and that it's valid
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();

    if (
        userInput === "rock" ||
        userInput === "paper" ||
        userInput === "scissors"
    ) {
        return userInput;
    } else {
        console.log("You have not chosen a valid input!");
    }
};

// Gets a function random number from 0 - 2 and assigns it rock, paper or sciccors based on the number
const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return 'rock';
    } else if (computerChoice === 1) {
        return 'paper';
    } else { return 'scissors' }
};

// A functions that uses if else conditionals to check who wins the game. It is using nested ifs for the computer
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer wins!';
        } else { return 'User wins!' }
    };
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer wins!';
        } else { return 'User wins!' };
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer wins!';
        } else { return 'User wins!' };
    };
};

// Function for actually playing the game. Sets variable for userChoice and computerChoice and logs it. 
const playGame = () => {
    let userChoice = getUserChoice(prompt('Enter rock, paper, or scissors'));
    let computerChoice = getComputerChoice();
    console.log(`You threw ${userChoice}`);
    console.log(`The computer threw ${computerChoice}`)

    console.log(determineWinner(userChoice, computerChoice));

}

// Function for calling the game to play
playGame();
