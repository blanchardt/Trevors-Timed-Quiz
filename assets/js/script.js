// Selects element by class
var countDown = document.querySelector("#time-remaining");
var startButton = document.querySelector("#start");

var secondsRemaining = 0;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsRemaining--;
    countDown.textContent = secondsRemaining;

    if(secondsRemaining === 0) {
      // Stops the timer
      clearInterval(timerInterval);

      //call a function that ends the quiz and displays the score.

    }

  }, 1000);
}

function startQuiz() {
    secondsRemaining = 75;
    setTime();
}

startButton.addEventListener("click", startQuiz);