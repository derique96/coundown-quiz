var timerEl = document.getElementById("time");
var start = document.getElementById("start");
var previous = document.getElementById("previous");
var next = document.getElementById("next");
var timeLeft = 60;
var questionsArray = [
    {
      question: "What is an Object",
      answers: ["A Method", "A group of properties"],
    },
    {
      question: "Which is not a primitive data type?",
      answers: ["Boolean", "String","Conditional","Undefined"]
    }
  ];
console.log(questionsArray);

function timer() {
  var countDown = setInterval(function () {
    timerEl.textContent = "Time: " + timeLeft + " seconds";
    timeLeft--;
    if (timeLeft === 0) {
      clearInterval(countDown);
      timerEl.textContent = "";
    }
  }, 1000);
}

start.addEventListener("click", timer);
document.getElementById("questions").innerHTML = questionsArray
