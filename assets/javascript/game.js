// check guessed letters against available letters
// for loop stopping game when guessses left reaches 0 or correct guesses matches target word
// need to add 1 to wins when word is guessed 

var hitSound = new Audio(src = 'assets/media/hit.mp3');
var strikeSound = new Audio(src = 'assets/media/strike.mp3')
var crowd = new Audio(src = 'assets/media/crowd.mp3');
var lose = new Audio(src = "assets/media/alo-cry.wav");
// list of team mascots
var game = {
    teams: ['brewers', 'orioles', 'reds', 'angels', 'phillies', 'diamondbacks', 'redsox', 'indians', 'dodgers', 'pirates', 'cubs', 'whitesox', 'rockies', 'marlins', 'padres', 'tigers', 'bluejays', 'nationals', 'astros', 'royals', 'braves', 'mariners', 'twins', 'mets', 'yankees', 'athletics', 'giants', 'cardinals', 'devilrays', 'rangers'],
    word: '',
    // list of available letters to use
    available: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    lettersDiv: undefined,
    incorrectLettersDiv: undefined,
    strikes: undefined,
    incorrectGuesses: [],
    correctGuesses: [],
    usedLetters: [],
    guessesLeft: [9],
    wins: 0,
    losses: 0,


    startGame: function () {

        this.lettersDiv = document.getElementById('letters');
        this.incorrectLettersDiv = document.getElementById('incorrect-letters');
        var word = game.teams[Math.floor(Math.random() * game.teams.length)];
        this.word = word;
        console.log(word);
        this.render();

        // // capture user input, and store it in letter 
        document.onkeyup = function (letter) {
            if (game.guessesLeft >=1) {
                game.guess(letter.key);    
        } else {
            this.render();
            };
        };
    },

    guess: function (letter) {
        if (this.word.indexOf(letter) > -1) {
            this.correctGuess(letter);
            game.usedLetters.push(letter);
            // this.compare();
        } else {
            this.incorrectGuess(letter);
            game.usedLetters.push(letter);
            // strikes left in the game
            this.guessesLeft--;
            if (game.guessesLeft === 0) {
                this.youLose(letter);
                this.render();
            }
        }
        this.render();
        // wirtes used letters across the bottom of page
        document.querySelector('#x').innerHTML = game.usedLetters;
        document.querySelector('#guessesLeft').innerHTML = ("You have " + game.guessesLeft + " STRIKES Left");
    },
// plays crying sound and adds one to losses var
    youLose: function (letter) {
        lose.play();
        this.losses++;
    },


    correctGuess: function (letter) {
        this.correctGuesses.push(letter);
        hitSound.play();
    },

    incorrectGuess: function (letter) {
        this.incorrectGuesses.push(letter);
        strikeSound.play();
    },

    render: function () {
        this.renderLettersDiv();
        this.incorrectLettersDiv.innerHTML = '';
    },
// joins correctGuesses
    compare: function(){
        var joined = this.correctGuesses.join('');
        console.log(joined);
        console.log(this.word);
        //     crowd.play();
},

    renderLettersDiv: function () {
        this.lettersDiv.innerHTML = '';
        var html = '';
        for (var i = 0; i < this.word.length; i++) {
            if (this.correctGuesses.indexOf(this.word[i]) > -1) {
                html += "<span class='correct-letter'>" + this.word[i] + "</span>";
            } else {
                html += "<span class='unguessed-letter'>_</span>";
            }
        }
        this.lettersDiv.innerHTML = html;
    
    },
    
}
$("#start").on("click", function () {
    game.startGame();
    window.onload = setup();

    /* buttons */
    // document.getElementById("restart").onclick = setup;

    // /* reset letter to guess on click */
    // guessInput.onclick = function () {
    //     this.value = '';
    // };
});
