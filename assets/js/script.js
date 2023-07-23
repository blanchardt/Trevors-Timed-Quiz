// Selects element by class
var countDown = document.querySelector("#time-remaining");

var secondsRemaining = 75;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsRemaining--;
    countDown.textContent = secondsRemaining;

    if(secondsRemaining === 0) {
      // Stops the timer
      clearInterval(timerInterval);
    }

  }, 1000);
}

setTime();