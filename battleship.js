// The three index locations that comprise a battleship
var rand = Math.floor(Math.random() * 5)
var fwdLocation = rand;
var midLocation = rand + 1;
var aftLocation = rand + 2;

var fwdHit = false;
var midHit = false;
var aftHit = false;

var guess;        // current user input (string)
var guesses = 0;  // number of guesses the user has made
var hits = 0;     // number of hits
var isSunk = false;
var done = false;

while (!isSunk && !done) {
  // input user guess
  guess = prompt("Ready, aim, fire (enter a number from 0-6): ");
  if (isValid(guess)) {
    guesses += 1;
    if (isBattleshipHit(guess)) {
      hits += 1;
      if (hits >= 3) {
        isSunk = true;
        alert("You sank my battleship!");
      }
    }
  }
  else if (guess == null) {
      done = true;
  }
  else {
      alert("Invalid input: " + guess + " Please enter a valid number 0..6");
  }
}

// Display game stats
var accuracy = 3 / guesses;
var stats = "You took " + guesses + " guesses to sink the battleship, " +
    "which means your shooting accuracy was " + Math.round(accuracy * 100) + "%." ;
if (guesses > 0) {
  if (accuracy < .5) {
    stats += " Better luck next time."
  }
  else {
    stats += " Great Job!"
  }
  alert(stats);
}

function isValid(index) {
  return index != null && index >= 0 && index <= 6;
}

function isBattleshipHit(index) {
  var retValue = false;
  var alreadyHit = false;
  
  if (index == fwdLocation) {
    if (!fwdHit) {
      fwdHit = true;
      retValue = true;
    }
    else {
      alreadyHit = true;
    }
  }
  else if (index == midLocation) {
    if (!midHit) {
      midHit = true;
      retValue = true;
    }
    else {
      alreadyHit = true;
    }
  }
  else if (index == aftLocation) {
    if (!aftHit) {
      aftHit = true;
      retValue = true;
    }
    else {
      alreadyHit = true;
    }
  }
  if (retValue) {
    alert("HIT!")
  }
  else {
    if (alreadyHit) {
      alert("MISS, Already scored a hit with this value. Can't use it again")
    }
    else {
      alert("MISS")
    }
  }
  return retValue;
}
