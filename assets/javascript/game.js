// display _ for letters in target word
// need to verify it against the random name 
// need to display letters choosen
// need to subtrack from turns when wrong guess
// need to generate new word and add 1 to wins when word is guessed 

// list of team mascots
var teams= ["BREWERS", "ORIOLES", "REDS", "ANGELS", "PHILLIES", "DIAMONDBACKS", "REDSOX", "INDIANS", "DODGERS", "PIRATES", "CUBS","WHITESOX", "ROCKIES", "MARLINS", "PADRES", "TIGERS", "BLUEJAYS", "NATIONALS", "ASTROS", "ROYALS", "BRAVES", "MARINERS", "TWINS", "METS", "YANKEES", "ATHLETICS", "GIANTS", "CARDINALS", "DEVILRAYS", " RANGERS"];
var userGuess, targetWord, usedLetters, startGame; 
var wins = 0;
var losses = 0;
var ties = 0;
// generates random team name from list of teams and places it in targetWord
function startGame() {
    var targetWord = teams[Math.floor(Math.random()*teams.length)];
    var count = targetWord.length;
    console.log(targetWord);
    console.log(count);
    // dipslays blank spaces for target word
    var dispay = "";
        for (var i=0; i<targetWord.length; i++) {
            display = i + "_";
            return display;
        }
            console.log(display);
            alert(display);
        // Allows user to end game by guessing team early
            // function guessNow() {
            //     var guessNow=promt("what is your Guess?");
            //     if (guessNow == targetWord);
            //             // then win game else loose game    
}

// capture user input, change to upper case and store it in userguess 
 document.onkeyup =function() {
    var userguess = String.fromCharCode(event.keyCode).toUpperCase();
    console.log(userguess);

    // used to print used letters
    var usedLetters = [userguess];
    usedLetters.push(userguess);
    console.log(usedLetters);
 }

//To DO List:
    // display "_" for letters of targetWord
    // if statements -
        /* if userguess == a letter in targetWord then;
        change the "_" to that letter 
        also, play hit sound, then check to see if there are any remaining
        add letter to guessed letters "-"
        
        if  userguess /= letters in the targetWord then;
        play strike sound, Display guess again, add letter to guessed letter, minus 1 from strikes left */
    // loop game to end after nine strikes
    // add guess now button //

