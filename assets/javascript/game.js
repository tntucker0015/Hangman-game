
// need to verify userguess against the against targetWord 
// need to display usedLettes
// display turns left
// need to subtrack from turns when wrong guess
// need to generate new word and add 1 to wins when word is guessed 
// format guessNow button to allow user to guess the entire word at one time.

// list of team mascots
var teams = ["BREWERS", "ORIOLES", "REDS", "ANGELS", "PHILLIES", "DIAMONDBACKS", "REDSOX", "INDIANS", "DODGERS", "PIRATES", "CUBS", "WHITESOX", "ROCKIES", "MARLINS", "PADRES", "TIGERS", "BLUEJAYS", "NATIONALS", "ASTROS", "ROYALS", "BRAVES", "MARINERS", "TWINS", "METS", "YANKEES", "ATHLETICS", "GIANTS", "CARDINALS", "DEVILRAYS", " RANGERS"];

var availLetters = ("ABCDEFGHIJKLMNOPQRSTUVWYXZ");
var userGuess, targetWord, usedLetters, lettersMatched, startGame;
var wins = 0;
var losses = 0;
var ties = 0;
var usedLetters = [];
var dashes = [];
messages = {
    win: "You Win!",
    loose: "Game Over!",
    guessed: "Foultip! You Already pick that letter, Try Again.",
    validletter: "please Pick a letter between A-Z"};


// generates random team name from list of teams and places it in targetWord
function startGame() {
    var targetWord = teams[Math.floor(Math.random() * teams.length)];
    var count = targetWord.length;
        console.log(targetWord);
        console.log(count);
    //replace targetWord with dashes for each letter
    for (var i = 0; i < targetWord.length; i++) {
        dashes[i] = "__";
 }
    // displays dashes on the screen
    document.getElementById("hiddenword").innerHTML = dashes.join(" ");
 }

// capture user input, change to upper case and store it in userguess 
document.onkeyup = function (words) {
    var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
    console.log(userGuess);
    usedLetters.push(userGuess);
    // alert(usedLetters);
    console.log(usedLetters);
    document.querySelector('#x').innerHTML = usedLetters;
    if (userGuess) {
        // if guess is a valid letter? if so move on else erro
        if (availLetters.indexOf(userGuess) > -1) {
            // has it been guessed before
            if ((lettersMatched && lettersMatched.indexof(userGuess) > -1) || (userGuess && userGuess.indexof(userGuess) > -1)) {
            output.innerHTML = '"' + userGuess.toUpperCase() + '"' + messages.guessed;
        }

    }
    }
}

