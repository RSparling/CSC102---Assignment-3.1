// Play Craps Function
function playCraps() {
    // to notify that that the program has begun
    console.log("Playing Craps");
    //variable declarations
    let craps = false;
    let win = false;
    //mathRandom used to determine outcome
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    //gets total
    let total = dice1 + dice2;
    //conditional operator to determine game outcome
    if (total == 7 || total == 11) {
        craps = true;
    }
    // Checks to see if the player has won
    else if (dice1 == dice2 && dice1 % 2 == 0) {
        win = true;
    }
    console.log(dice1 + "," + dice2 + ", Total: " + total + ", Has Won: " + win + ", Craps: " + craps);
    //Output
    document.getElementById("Die1").innerHTML = "Dice 1: " + dice1;
    document.getElementById("Die2").innerHTML = "Dice 2: " + dice2;
    document.getElementById("Total").innerHTML = "Total: " + total;

    //Simple if-elif-else setup to determine which of the three game results the roll ended in.
    if (craps) {
        document.getElementById("Game State").innerHTML = "Craps!";
    }
    else if (win) {
        document.getElementById("Game State").innerHTML = "You Win!";
    }
    else {
        document.getElementById("Game State").innerHTML = "Push!";
    }
}