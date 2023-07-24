// Selects element by class
var countDown = document.querySelector("#time-remaining");
var startButton = document.querySelector("#start");
var multipleChoiceList = document.querySelector("#options");
var mainEl = document.querySelector("main");
var h1El = document.querySelector("h1");
var mainParagraph = document.querySelector("#start-and-end");

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

function firstQuestion() {
  //create the buttons in the list elements.
  var firstli = document.createElement("li");
  var firstButton = document.createElement("button");
  firstButton.textContent = "1. strings";

  var secondli = document.createElement("li");
  var secondButton = document.createElement("button");
  secondButton.textContent = "2. booleans";

  var thirdli = document.createElement("li");
  var thirdButton = document.createElement("button");
  thirdButton.textContent = "3. alerts";

  var fourthli = document.createElement("li");
  var fourthButton = document.createElement("button");
  fourthButton.textContent = "4. numbers";

  //append the list elements and buttons to the unordered list.
  firstli.appendChild(firstButton);
  multipleChoiceList.appendChild(firstli);

  secondli.appendChild(secondButton);
  multipleChoiceList.appendChild(secondli);

  thirdli.appendChild(thirdButton);
  multipleChoiceList.appendChild(thirdli);

  fourthli.appendChild(fourthButton);
  multipleChoiceList.appendChild(fourthli);

  //arange the text to left instead of center.
  mainEl.setAttribute("style", "text-align: left");

  //change the header to the first question.
  h1El.textContent = "Commonly used data types DO Not Include:";
}

function startQuiz() {
    //start the timer.
    secondsRemaining = 75;
    setTime();

    //hide the start quiz button and paragraph.
    startButton.setAttribute("style", "display: none");
    mainParagraph.setAttribute("style", "display: none");

    //call a function that adds the multiple choice options to the page along with changing the header to the questions.
    firstQuestion();

}

startButton.addEventListener("click", startQuiz);