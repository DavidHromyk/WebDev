// Ask for the user to enter a number
let bigNum = parseInt(prompt('Enter a number'));

// Ensures that the number is an integer and not a NaN using parseInt(checks to see if an integer)
while (!bigNum) {
    bigNum = parseInt(prompt('Please guess again not a valid number'));
}

// Sets a random number between 1 and bigNum(which is users chosen number)
let randomNum = Math.floor(Math.random() * bigNum) + 1

// Prompts the user to enter a guess number
let guess = parseInt(prompt('Please input your guess number'));

// Logs the starting point for attempts we use 1 because it doesn't make sense to start at 0
let attempts = 1;

// Starts the while loop. The while loop runs while the users guess and the randNum chosen numbers are not equal
while (parseInt(guess) !== randomNum) {

    // Adds 1 to attempts everytime the number isn't guess correctly. attempts++ is used by itself because it is auto read everytime we run through the while loop
    attempts++;

    // If the user wants to quit the prompt will check for the 'q' string and then break
    if (guess === 'q') {
        break;
    }

    // If the guessed number by the user is great it will prompt guess again with a too high warning
    if (guess > randomNum) {
        guess = (prompt('Guess too high'));
    }

    // Else if the guess is too low it will prompt with guess again with a too low warning
    else {
        guess = prompt('Guess too low');
    }
}

// Checks if the guess is 'q` and logs the quit game after the break in the while loop
if (guess === 'q') {
    console.log('You quit the game!')
}

// Else it just states the win and how many attempts it took
else {console.log(`Congrats you win! It took you ${attempts} attempts!`)
}
