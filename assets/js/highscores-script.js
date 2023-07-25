// create variables getting commonly used elements.
var mainEl = document.querySelector("main");
var ulEl = document.querySelector("#high-scores");
var backBtn = document.querySelector("#go-back");
var clearBtn = document.querySelector("#clear");

//create some global variables.
var results = [];

//arange the text to left instead of center.
mainEl.setAttribute("style", "text-align: left");

//get the stored scores and then add them to the unordered list.
var storedScores = JSON.parse(localStorage.getItem("scores"));
if (storedScores !== null) {
  results = storedScores;
}

//generate the list.
for (var i = 0; i < results.length; i++) {
  var result = results[i];

  var li = document.createElement("li");
  li.textContent = (i + 1) + ". " + result.initials + " - " + result.score;
  
  ulEl.appendChild(li);
}

//create on click events for the buttons.
backBtn.addEventListener("click", function() {
  //Went to https://stackoverflow.com/questions/13071967/adding-an-onclick-function-to-go-to-url-in-javascript to find info on how to make 
  //an on click event open up a new url page that allows the user to hit the back button as well.  Also credited in the README file.
  window.location = "./index.html";
});

clearBtn.addEventListener("click", function() {
  //remove the list.
  ulEl.innerHTML = "";
  
  //store an empty array into the local storage.
  results = [];
  localStorage.setItem("scores", JSON.stringify(results));
});