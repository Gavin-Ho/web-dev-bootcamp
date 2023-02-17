// Returns a random number from 1-6
function randomNumber(){
    var randomNumber = Math.ceil((Math.random() * 6));
    return randomNumber;
}

// Changes the images of the dice when page refreshes
function diceRoll(numberOne, numberTwo){ 
    var diceImage1 = "images/dice" + numberOne + ".png";
    var diceImage2 = "images/dice" + numberTwo + ".png";
    document.querySelector("img.img1").setAttribute("src", diceImage1);
    document.querySelector("img.img2").setAttribute("src", diceImage2);
}

// Displays the winner
function results(numberOne, numberTwo){
    if(numberOne > numberTwo){
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    }
    if(numberOne < numberTwo){
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }
    if(numberOne === numberTwo){
        document.querySelector("h1").innerHTML = "Tie!";
    }
}

rollOne = randomNumber();
rollTwo = randomNumber();

diceRoll(rollOne, rollTwo);
results(rollOne, rollTwo);