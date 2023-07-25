// Selects element by class
var countDown = document.querySelector("#time-remaining");
var startButton = document.querySelector("#start");
var multipleChoiceList = document.querySelector("#options");
var mainEl = document.querySelector("main");
var h1El = document.querySelector("h1");
var mainParagraph = document.querySelector("#start-and-end");
var hrEl = document.querySelector("hr");
var resultParagraph = document.querySelector("#result");
var formEl = document.querySelector("#submit-time-form");

//create number values to be used later on.
var secondsRemaining = 0;
var currentQuestion = 0;
var gotCorrect = 0;

//create an array of the questions and answers.
var questions = ["Commonly used data types DO Not Include:", "The condition in an if / else statement is enclosed with _______.",
                  "Arrays in JavaScript can be used to store _______.", "String values must be enclosed within _______ when being assigned to variables.",
                  "A very useful tool used during development and debugging for printing content to the debugger is:"];
var answers = ["1. strings", "2. booleans", "3. alerts", "4. numbers", "1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets", 
                "1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above", "1. commas", "2. curly brackets", "3. quotes", "4. parenthesis",
                "1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"];
var correctAnswers = [3, 2, 4, 3, 4];

//create a global variable to count down the timer during the quiz.
var timerInterval;

function setTime() {
  //define the timer.
  timerInterval = setInterval(function() {
    secondsRemaining--;
    countDown.textContent = secondsRemaining;

    if(secondsRemaining === 0) {
      // Stops the timer
      clearInterval(timerInterval);
      
      //resets the unordered list to be empty.
      multipleChoiceList.innerHTML = "";

      //display a message saying out of time.
      hrEl.setAttribute("style", "display: block");
      resultParagraph.textContent = "Ran out of time!";

      //call a function that ends the quiz and displays the score.
      quizFinish();
    }

  }, 1000);
}

function quizFinish () {
  //adjust the header and paragraphs acordingly.
  h1El.textContent = "All done!";
  mainParagraph.textContent = "Your final score is " + secondsRemaining + ".";

  //reveal the form field for user to submit their score.
  formEl.setAttribute("style", "display: block");
}

function generateQuestionAndAnswer() {
  //change the header to the first/next question.
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

    //append the list element and button to the unordered list.
    liEl.appendChild(buttonEl);
    multipleChoiceList.appendChild(liEl);
  }
}

function answerClicked (event) {
  var element = event.target;

  //reset the list to be empty.
  multipleChoiceList.innerHTML = "";

  //move on to the next question.
  currentQuestion++;

  hrEl.setAttribute("style", "display: block");

  //check if the correct answer was chosen.
  if (element.matches(".correct")) {
    //increase the correct amount of answers.
    gotCorrect++;
    
    //let the user know they were correct.
    resultParagraph.textContent = "Correct!";
  }
  else if (element.matches(".incorrect")){
    //penalty for getting the incorrect answer.
    secondsRemaining -= 10;
    
    //let the user know they were incorrect.
    resultParagraph.textContent = "Wrong!";
  }

  //check if the next question exists.
  if(currentQuestion <= questions.length)
  {
      generateQuestionAndAnswer();
  }
  else {
    //call a function that shows the score and asks for initials and pause the timer.
    clearInterval(timerInterval);

    quizFinish();
  }
  console.log(gotCorrect);
}

function firstQuestion() {
  currentQuestion = 1;

  //call function that sets up the question and answers.
  generateQuestionAndAnswer();

  //arange the text to left instead of center.
  mainEl.setAttribute("style", "text-align: left");

  //create a on click event for the unordered list.
  multipleChoiceList.addEventListener("click", answerClicked);
}

function startQuiz() {
    //start the timer.
    secondsRemaining = 75;
    countDown.textContent = secondsRemaining;
    setTime();

    //hide the start quiz button and paragraph.
    startButton.setAttribute("style", "display: none");
    mainParagraph.setAttribute("style", "display: none");

    //call a function that adds the multiple choice options to the page along with changing the header to the questions.
    firstQuestion();

}

hrEl.setAttribute("style", "display: none");

startButton.addEventListener("click", startQuiz);