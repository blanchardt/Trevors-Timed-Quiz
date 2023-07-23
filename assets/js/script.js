// Selects element by class
var countDown = document.querySelector("#time-remaining");
var startButton = document.querySelector("#start");
var multipleChoiceList = document.querySelector("#options");

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
    //start the timer.
    secondsRemaining = 75;
    setTime();

    //hide the start quiz button.
    startButton.setAttribute("style", "display: none");

    //call a function that adds the multiple choice options to the page along with changing the header to the questions.

}

startButton.addEventListener("click", startQuiz);