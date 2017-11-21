// Hangman Stage
Hanging_man = new Array("--------\n|      |\n|\n|\n|\n|\n=====",
"--------\n|      O\n|\n|\n|\n|\n=====",
"--------\n|      O\n|      |\n|\n|\n|\n=====",
"--------\n|      O\n|     \\|\n|\n|\n|\n=====",
"--------\n|      O\n|     \\|/\n|\n|\n|\n=====",
"--------\n|      O\n|     \\|/\n|      |\n|\n|\n=====",
"--------\n|      O\n|     \\|/\n|      |\n|     /\n|\n=====",
"--------\n|      O\n|     \\|/\n|      |\n|     / \\\n|\n=====")


guessChoices = new

// Shows to Guess
Array("Golden Girls","NYPD Blues","Monk","All In The Family", "Family Matters", "Steven Unverse", "Avator")
function reset() {
 guesses = 0
 max = Hanging_man.length-1
 guessed = " "
 len = guessChoices.length - 1
 guessIt = guessChoices[Math.round(len*Math.random())].toUpperCase()
 displayHangman()
 displayguess()
 displayGuesses()
}
// Starts Hangman function
function displayHangman() {
 document.game.status.value=Hanging_man[guesses]
}
function displayguess() {
 pattern=""
 for(i=0;i<guessIt.length;++i) {
  if(guessed.indexOf(guessIt.charAt(i)) != -1)
   pattern += (guessIt.charAt(i)+" ")
  else pattern += "_ "
 }
 document.game.guessIt.value=pattern
}
function displayGuesses() {
 document.game.guessed.value=guessed
}
function badGuess(s) {
 if(guessIt.indexOf(s) == -1) return true
 return false
}
function winner() {
 for(i=0;i<guessIt.length;++i) {
  if(guessed.indexOf(guessIt.charAt(i)) == -1) return false
 }
 return true
}
function myFunction(s){
 if(guessed.indexOf(s) == -1) guessed = s + guessed
 if(badGuess(s)) ++guesses
 displayHangman()
 displayguess()
 displayGuesses()
 if(guesses >= max){
 alert("DEAD. The word was: "+guessIt+".")
  reset()
 }
 if(winner()) {
  alert("You've won!")
  reset()
 }
}
