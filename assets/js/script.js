// Selects element by class
var countDown = document.querySelector("#time-remaining");
var startButton = document.querySelector("#start");
var multipleChoiceList = document.querySelector("#options");
var mainEl = document.querySelector("main");
var h1El = document.querySelector("h1");
var mainParagraph = document.querySelector("#start-and-end");

//create number values to be used later on.
var secondsRemaining = 0;
var currentQuestion = 0;
var gotCorrect = 0;

//create an array of the questions and answers.
var questions = ["Commonly used data types DO Not Include:", "The condition in an if / else statement is enclosed with _______."];
var answers = ["1. strings", "2. booleans", "3. alerts", "4. numbers", "1. quotes", "2.curly brackets", "3. parenthesis", "4. square brackets"];
var correctAnswers = [3, 2];


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

function generateQuestionAndAnswer() {
  //change the header to the first question.
  h1El.textContent = questions[currentQuestion - 1];

  for (var i = (currentQuestion - 1) * 4; i < currentQuestion * 4; i++) {
    //create the buttons in the list elements.
    var liEl = document.createElement("li");
    var buttonEl = document.createElement("button");
    buttonEl.textContent = answers[i];

    //check if the current answer being created is the correct answer or not.
    //I have used module (%) prior to this class.
    if((i % 4) + 1 === correctAnswers[currentQuestion - 1]) {
      buttonEl.setAttribute("class", "correct answer");
    }
    else {
      buttonEl.setAttribute("class", "incorrect answer");
    }

    //append the list elements and buttons to the unordered list.
    liEl.appendChild(buttonEl);
    multipleChoiceList.appendChild(liEl);
  }
}

function firstQuestion() {
  currentQuestion = 1;

  //call function that sets up the question and answers.
  generateQuestionAndAnswer();

  //arange the text to left instead of center.
  mainEl.setAttribute("style", "text-align: left");

  //create a on click event for the unordered list.
  multipleChoiceList.addEventListener("click", function (event) {
    var element = event.target;

    // check if user clicked on the correct or incorrect answer.
    if (element.matches(".correct")) {
      //increase the correct amount of answers then call a function to move to the next question.
      gotCorrect++;

    }
    else if (element.matches(".incorrect")) {
      //call function to move to next question.
    }
  });
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