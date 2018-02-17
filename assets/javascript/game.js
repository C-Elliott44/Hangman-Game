var words = ["toe", "foot", "ankle", "shin", "calf", "hamstring", "leg", "liliac", "shoulder", "chest", "fingers", "hand", "forarm", "bicep", "deltoid", "hip", "butt", "back", "neck", "face", "eyes", "nose", "mouth", "ears", "lips"];


var wins = 0;
var loss = 0;
var turnsLeft = 10;
var wrongLetter = [];
var underScoreArray = [];
var stringArray = [];
var previousWord;

function startGame() {
  Game();
};

function blankSpace() {

  for (i = 0; i < guessWord.length; i++) {
    underScoreArray[i] = "_";
    stringArray = underScoreArray.join("  ");
  }
};


function Game() {
  guessWord="";
  guessWord = words[Math.floor(Math.random() * words.length)];
  wrongLetter = [];
  underScoreArray = [];
  turnsLeft = 10;
  underScoreArray=[];
  stringArray=[];

  blankSpace();

  document.querySelector("#word-blanks").innerHTML = underScoreArray.join(" ");

  document.onkeyup = function innerGame(event) {
    
    wordToArray = guessWord.split("");

    var keyInput = event.key;

    keyInput = keyInput.toLowerCase();

if (event.keyCode >= 65 && event.keyCode <= 90){

  if (wrongLetter.indexOf(keyInput) > -1) {
    }
    else if (wordToArray.indexOf(keyInput) > -1) {

      for (i = 0; i < guessWord.length; i++) {
          
        if( keyInput === wordToArray[i]){
          underScoreArray[i] = keyInput;
          document.querySelector("#word-blanks").innerHTML = underScoreArray.join(" ");
        } 
      }
        }
        else {
          wrongLetter.push(keyInput);
          document.querySelector("#wrong-guesses").innerHTML = wrongLetter.join(", ");
          turnsLeft--;
          document.querySelector("#guesses-left").innerHTML = turnsLeft;
        }
      }

  if (underScoreArray.toString() === wordToArray.toString() && turnsLeft > 0) {
    wins++;
    document.querySelector("#win-counter").innerHTML = wins;
        if (previousWord = guessWord);
            alert("Correct! Press any letter for next word!");
            
            Game ();

  }
  else if (turnsLeft === 0) {
    loss++;
    document.querySelector("#loss-counter").innerHTML = loss;
    previousWord = guessWord;
    alert("No turns left! Press any letter for next word!");
    Game ();
    }

  }
};
document.onkeyup = startGame;
