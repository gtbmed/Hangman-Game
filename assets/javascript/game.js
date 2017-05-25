// VARIABLES
// ==========================================================================
    var mystery;
    var wordBank = ["mac and me", "howared the duck", "battlefield earth", "freddy got fingered", "from justin to kelly", "gigli", "catwoman", "entourage", "mortdecai", "suicide squad", "glitter", "the master of disguise", "jack and jill" ];
    var answer = [];
    var usedLetters = [];
    var lives = 12;
    var wins = 0;


// FUNCTIONS
// ===========================================================================
function newGame() {
    lives = 12;
    answer = [];
    usedLetters = [];
    mystery = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log("Mystery word: " + mystery); //FOR TESTING - Verify mystery word chosen
}

//Adds spaces to array so user doesn't have to guess " " for mystery entries of more than one word
//Also adds "-" for blanks that will be filled in
function addSpaces() {
    if (mystery.includes(" ") === true) {  //Looks for " " in string.
        for (var x= 0; x < mystery.length; x++) {
            if (" " === mystery.charAt(x)) { // Finds location of " "
                answer[x] = mystery.charAt(x);
                console.log("test " + answer); //FOR TESTING: Should show space added to array
            } else {
                answer[x] = "-";
                console.log("test " + answer); //FOR TESTING: Should show space added to array
            }
        }

    } else {
        for (var y= 0; y < mystery.length; y++) {
        answer[y] = "-";
        console.log("test " + answer); //FOR TESTING: Should show space added to array
            }
        }
}

//Checks to see if user has won or lost the current game
function checkWin(){
    var checkAnswer = answer.join("");

    if (lives === 0) {
        alert("You Lose. Try again")
        newGame();
    } else if (answer.length == mystery.length && checkAnswer == mystery) {
        alert("You Win!")
        wins++;
        document.getElementById('wins').innerHTML = "Wins: " + wins;
        newGame();
        console.log("Wins: " + wins); //FOR TESTING: Shows wins count
    }  
}

// GAME PROCESS
// ===========================================================================
newGame();
addSpaces();
document.getElementById('answer').innerHTML= answer;
document.getElementById('lives').innerHTML = "Guesses Remaining: " + lives;
document.onkeyup = function(event) {
    var inputKey = String.fromCharCode(event.keyCode).toLowerCase();
    if (usedLetters.includes(inputKey) === true) {
        alert("You used this letter already");
    } else {
        usedLetters.splice(0, 0, inputKey);
        document.getElementById('used').innerHTML = usedLetters;
        console.log("used letters " + usedLetters);

      if (mystery.includes(inputKey) === true) { //Check to see if letter is in mystery
        for (var i = 0; i < mystery.length; i++) {
            if (inputKey === mystery.charAt(i)) { // Finds location of matching letter
                answer[i] = mystery.charAt(i);
                document.getElementById('answer').innerHTML= answer;
                console.log("Answer: " + answer); //FOR TESTING: shows array being built
          }
        }
      } else { // if the letter is not in the mystery word
        lives--; //take a life away
        document.getElementById('lives').innerHTML = "Guesses Remaining: " + lives;
        console.log(lives); //FOR TESTING: shows lives count
      }
    }
    checkWin(); //Checks to see if after the loop has run, the user has won.
}