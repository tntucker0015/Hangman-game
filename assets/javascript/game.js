// global variables
var hitSound = new Audio(src = 'assets/media/hit.mp3');
var strikeSound = new Audio(src = 'assets/media/strike.mp3')
var crowd = new Audio(src = 'assets/media/crowd.mp3');
var lose = new Audio(src = "assets/media/alo-cry.wav");

// list of team mascots
var teams = ['brewers', 'orioles', 'reds', 'angels', 'phillies', 'diamondbacks', 'redsox', 'indians', 'dodgers', 'pirates', 'cubs', 'whitesox', 'rockies', 'marlins', 'padres', 'tigers', 'bluejays', 'nationals', 'astros', 'royals', 'braves', 'mariners', 'twins', 'mets', 'yankees', 'athletics', 'giants', 'cardinals', 'devilrays', 'rangers'];
var word = '';
var teamLetters = '';
var blanks = 0;
var incorrectGuesses = [];
var correctGuesses = [];
var guessesLeft = 9;
var wins = 0;
var losses = 0;
var usedLetter = "";

// starts new game with click of start button
function startGame() {
    guessesLeft = 9;
    word = teams[Math.floor(Math.random() * teams.length)];
    console.log(teams);
    teamLetters = this.word.split("");
    blanks = this.teamLetters.length;
    // resets incorrectGuesses and correctGuesses to start a new game
    incorrectGuesses = [];
    usedLetter = [];
    correctGuesses = [];

    for (var i = 0; i < this.blanks; i++) {
        this.correctGuesses.push("_");
        
    }
    console.log(this.correctGuesses);
    document.querySelector("#guessesLeft").innerHTML = ("You Have " + this.guessesLeft + " Strikes Left");
    document.querySelector("#letters").innerHTML = this.correctGuesses.join("");
    document.querySelector("#incorrect-letters").innerHTML = this.incorrectGuesses;
};
//     
function letters(letter) {
    
    var letterPresent = false;
    for (var i = 0; i < blanks; i++) {
        if (word[i] === usedLetter) {
            letterPresent = true;
        }
    }
    if (letterPresent) {
        for (var j = 0; j < blanks; j++) {
            if (word[j] === usedLetter) {
                correctGuesses[j] = usedLetter;
                hitSound.play();
                gameOver();
             }
            }
        }
    else {
        incorrectGuesses.push(usedLetter);
        guessesLeft--;
        strikeSound.play();
        gameOver();
    }
};
function gameOver() {
    // console.log("WINS: " + wins + "  |  Losses: " + losses);
    document.querySelector("#guessesLeft").innerHTML = guessesLeft;
    document.querySelector("#letters").innerHTML = correctGuesses;
    document.querySelector("#incorrect-letters").innerHTML = incorrectGuesses;

    if (teamLetters.toString() === correctGuesses.toString() || (wins > 0)) {
        wins++;
        console.log("wins" + wins);
        crowd.play();
        document.querySelector("#record").innerHTML = ("Wins:  " + wins + " || " + " Losses:  " + losses);
        startGame();
    } else if (guessesLeft === 0) {
        losses++;
        lose.play();
        document.querySelector("#record").innerHTML = ("Wins:  " + wins + " || " + " Losses:  " + losses);
        startGame();
    }
}

// start game on click of start button
$("#start").on("click", function () {
    startGame();
    crowd.pause();
});

    // capture user input, and store it in letter 
    document.onkeyup = function(letter) {
        usedLetter = String.fromCharCode(event.keyCode).toLowerCase();
        letters(usedLetter);
        gameOver();
};