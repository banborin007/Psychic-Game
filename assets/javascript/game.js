    //set div "class" beginning scores and number of guesses

var wins = 0;
var losses = 0;
var guessLeft = 9;

    //display "your guesses so far"
var guesses = [];

    //letter options as array? *update: yes.
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    //add event for "when key is pressed on key down"
document.onkeydown = function(event) {
    
    var userGuess = event.key;
    
    //computer generate random guess
    var computerGuess = options[Math.floor(Math.random() * options.length)];

    //limit guess to just items in array otherwise any key can be pressed... this is bad.
    if (options.indexOf(userGuess) > -1) {
   
    //when guess is correct, add 1 point to wins... not sure which "equal sign" to use. So I referred to the rps game and used "===".
    if (userGuess === computerGuess) {
        wins++;
        guessLeft = 9;
        guesses = [];
    }

    //when guess is wrong, decrease guesses left by 1 and display current letter guessed
    if (userGuess !=  computerGuess) {
        guessLeft --;
        guesses.push(userGuess);
    }

    //give 9 guesses and auto decrease number by 1 as user make guess... reset guessLeft when number reaches 0
    if (guessLeft === 0) {
        guessLeft = 9;
        losses ++;
        guesses = [];
    }

    //prompt end game
    if (wins === 10) {
        alert("You can read my mind!... Welcome to the X-Men!!!")
    }
    //losses is set to 25 because the probability of a user selecting the matching letter is low.
    if (losses === 25) {
        alert("I don't think you can read minds.....maybe Palm Reading?")
    };

    //referred to rps game to tie the scores class with variables from js
    var html = 
    "<p>Guess what letter I'm thinking of" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessLeft + "</p>" +
    "<p>Your Guesses so far: " + guesses.join(", ") + "</p>"; 
    
    document.querySelector(".score").innerHTML = html;

    } 
} 
