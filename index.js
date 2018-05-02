// calling on the npm prompt package
var prompt = require("prompt");
prompt.start();

// calling on data from word.js file
var Word = require("./word.js");

// create a game object to hold functions of the game
var game = {
    wordBank: ["skittles", "snickers", "butterfinger", "starbursts", "nerds", "twix", "reeses"],
    guessesRemaining: 15,
    currentWrd: null,

    startGame: function (wrd) {
        var randomWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
        console.log(randomWord); // Comment out after testing
        this.currentWrd = new Word(randomWord);
        this.currentWrd.getLetters();
        this.newPrompt();
    },

    newPrompt: function () {
        var user = this;
        prompt.get(["guessLetter"], function (err, result) {
            console.log("The Letter you guessed is : " + result.guessLetter);

            var userGuess = user.currentWrd.checkIfLetterFound(result.guessLetter);
            console.log("Guess" + userGuess);

            if (userGuess === false) {
                console.log("Your Wrong");
                user.guessesRemaining -= 1;
            } else {
                console.log("Your Right!");


            if (user.currentWrd.correctWord()) {
                console.log("Winning!");
                return 1;
            } else {
                console.log("Guesses Remaining:" + user.guessesRemaining);
                console.log(user.currentWrd.displayword());


            if (user.guessesRemaining > 0 && user.currentWrd.found === false) {
                        user.newPrompt();
            } else {
                if (user.guessesRemaining === 0) {
                console.log(user.randomWord);
            } else {
                console.log(user.currentWrd.displayword());
                        }
                    }
                }
            }
        });
    }
}
game.startGame();