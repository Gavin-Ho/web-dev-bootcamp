// Initializing variables
const buttonColours = ["green", "red", "yellow", "blue"];

var gamePattern = Array();
var level = 0;

$(document).keydown(function(){
    nextSequence();
});

var userClickedPattern = Array();

// Awaits user input to start game
$(".btn").click(function(event){
    var userChosenColour = event.currentTarget.id;
    userClickedPattern.push(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);

    playSound(userChosenColour);
    animateButton(userChosenColour);
});

// Check if the user input matches the game pattern
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("Success");
        if(currentLevel === gamePattern.length - 1){
            setTimeout(function(){ 
                nextSequence();
            }, 1000);
        }
    }else{
        console.log("Wrong");

        wrongSound = new Audio("sounds/wrong.mp3");
        wrongSound.volume = 0.3;
        wrongSound.play();

        $("body").addClass("game-over");
        $("#level-title").html("Game Over, Press Any Key to Restart")
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        
        restartGame();
    }
}

// Play the next randomized sequence
function nextSequence(){
    userClickedPattern = Array();
    level++;
    $("#level-title").html("Level " + level);

    randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);
    animateButton(randomChosenColour);
}

// Animates button
function animateButton(buttonColour){
    $("#" + buttonColour).addClass("pressed");
    setTimeout(function(){
        $("#" + buttonColour).removeClass("pressed");
    }, 200);
}

// Plays button sound
function playSound(name){
    colourSound = new Audio("sounds/" + name + ".mp3");
    colourSound.volume = 0.2;
    colourSound.play();
}

// Resets game to starting position
function restartGame(){
    level = 0;
    userClickedPattern = Array();
    gamePattern = Array();
}