// Setting the global variables and arrays

var gamePattern = [];
var userClickedPattern = []

var buttonColors = ["red", "blue", "green", "yellow"];

var started = false;

var level = 0;

// Store when a button is clicked by it's class .btn in a variable and push it to userClickedPattern

// This is executed when any key is pressed and sets the started value to true which only allows the key pressed once.
$(document).keypress(function () {
    if (!started) {

        $("#level-title").text("level " + level);
        nextSequence();
        started = true;
    }
});

// What happens when the user clicks a button
($(".btn").click(function () {
    var userChosenColor = $(this).attr('id');
    userClickedPattern.push(userChosenColor);

    // Calls the function to play a sound using userChosenColor as the input for name
    playSound(userChosenColor)

    // Calls the function to animate a button press
    animatePress(userChosenColor)

    // Calls the check answer function to see if it matches with the game pattern
    checkAnswer(userClickedPattern.length - 1)
}));

function nextSequence() {

    userClickedPattern = [];

    // Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
    level++;

    // Outputs the new level everytime
    $("#level-title").text("level " + level);

    // Chooses a random number between 0-3 and uses that to choose a random spot in the buttonColors array

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    // Animate with a flash the random color chosen

    $('#' + randomChosenColor).fadeOut(100).fadeIn(100);

    // Calls the function to play a sound using randomChosenColor as the input for name

    playSound(randomChosenColor)
}

// Function created to play sound

function playSound(name) {
    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play();

}

// Adds a class to the color clicked that animates a button press
function animatePress(currentColor) {

    $('#' + currentColor).addClass("pressed");

    setTimeout(function () {
        $('#' + currentColor).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    
    // Match the game patterns and user clicked patters and then call the nextSequence function.
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success")

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence()
            }, 1000);

        }
    }
    else {

        // This activates if the patterns are not the same and is not a success.
        playSound("wrong")

        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over")
        }, 200)

        $("#level-title").text("Game Over, Press Any Key to Restart")
        startOver()
    }

};

// Function to reset the values which will retart the game
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}
