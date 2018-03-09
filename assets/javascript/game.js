// check guessed letters against available letters
// display turns left
// need to subtract from turns when wrong guess
// need to add 1 to wins when word is guessed 
//format start button
// format guessNow button to allow user to guess the entire word at one time.
// add images baseball coutner, win and loss
// add sounds to strike and hit

// list of team mascots
var game = {
    teams: ['brewers', 'orioles', 'reds', 'angels', 'phillies', 'diamondbacks', 'redsox', 'indians', 'dodgers', 'pirates', 'cubs', 'whitesox', 'rockies', 'marlins', 'padres', 'tigers', 'bluejays', 'nationals', 'astros', 'royals', 'braves', 'mariners', 'twins', 'mets', 'yankees', 'athletics', 'giants', 'cardinals', 'devilrays', 'rangers'],
    // teams: ["BREWERS", "ORIOLES", "REDS", "ANGELS", "PHILLIES", "DIAMONDBACKS", "REDSOX", "INDIANS", "DODGERS", "PIRATES", "CUBS", "WHITESOX", "ROCKIES", "MARLINS", "PADRES", "TIGERS", "BLUEJAYS", "NATIONALS", "ASTROS", "ROYALS", "BRAVES", "MARINERS", "TWINS", "METS", "YANKEES", "ATHLETICS", "GIANTS", "CARDINALS", "DEVILRAYS", "RANGERS"],
    word: '',
    available:["abcdefghijklmnopqrstuvwxyz"],
    lettersDiv: undefined,
    incorrectLettersDiv: undefined,
    incorrectGuesses: [],
    correctGuesses: [],
    usedLetters: [],
    startGame: function () {
        //pick word
        // set word
        this.lettersDiv = document.getElementById('letters');
        this.incorrectLettersDiv = document.getElementById('incorrect-letters');
       
        // gereates random word from list of teams
        var word = game.teams[Math.floor(Math.random() * game.teams.length)];;
        this.word = word;
        console.log(word);

        this.render();

        // // capture user input, and store it in letter 
        document.onkeyup = function (letter) {
            game.guess(letter.key);
            console.log(letter);
        }
    },

    guess: function (letter) {
        if (this.word.indexOf(letter) > -1) {
            this.correctGuess(letter);
            game.usedLetters.push(letter);
        } else {
            this.incorrectGuess(letter);
            game.usedLetters.push(letter);
        }
        this.render();
        // wirtes used letters acroos the bottom of page
        document.querySelector('#x').innerHTML = game.usedLetters;   
    },

    correctGuess: function (letter) {
        this.correctGuesses.push(letter);
        // if(available.indexOf(letter) > -1) {
        //     /* has it been guessed (missed or matched) already? if so, abandon & add notice */
        //     if ((lettersMatched && lettersMatched.indexOf(guess) > -1) || (lettersGuessed && lettersGuessed.indexOf(guess) > -1)) {
        //         output.innerHTML = '"' + guess.toUpperCase() + '"' + messages.guessed;
        //         output.classList.add("warning");
        //     }
        // }
        console.log(letter, "is a match");
    },
    
    incorrectGuess: function (letter) {
        console.log(letter, "is incorrect")
        this.incorrectGuesses.push(letter);
    },

    render: function () {
        this.renderLettersDiv();
        this.incorrectLettersDiv.innerHTML = '';
        this.saveToLocalStorage();
    },

    renderLettersDiv: function () {
        this.lettersDiv.innerHTML = '';
        var html = '';
            for (var i = 0; i < this.word.length; i++) {
                if (this.correctGuesses.indexOf(this.word[i]) > -1) {
                    html += "<div class='correct-letter'>" + this.word[i] + "<div>";
                } else {
                    html += "<div class'unguessed-letter'>_</div>";
                }
            }
        this.lettersDiv.innerHTML = html;
    },

    saveToLocalStorage: function () {
        localStorage.setItem('game', JSON.stringify(this));
    }
}

game.startGame();




//     if (userGuess) {
//         // if guess is a valid letter? if so move on else erro
//         if (availLetters.indexOf(userGuess) > -1) {
//             // has it been guessed before
//             if ((lettersMatched && lettersMatched.indexof(userGuess) > -1) || (userGuess && userGuess.indexof(userGuess) > -1)) {
//             output.innerHTML = '"' + userGuess.toUpperCase() + '"' + messages.guessed;
//             output.classList.add("warning");
//             }
//             // does user Guess already exist if so add to letters already matches, if final letter added, game over with win message
//             else if (targetWord.indexof(userGuess) >-1) {
//                 var letterToShow;
//                 letterToShow = document.querySelectorAll (".letter" + userGuess.toUpperCase());
//             }
//          }
// usedLetters.push(userGuess);
// // alert(usedLetters);
// console.log(usedLetters);
// document.querySelector('#x').innerHTML = usedLetters;
