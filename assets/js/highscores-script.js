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