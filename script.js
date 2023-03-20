var timerEl = document.getElementById("time");
var start = document.getElementById("start");
var previous = document.getElementById("previous");
var next = document.getElementById("next");
var timeLeft = 60;
var index = 0;
var questionsArray = [
  {
    question: "What is an Object",
    answers: ["A Method", "A group of properties"],
    correct: "A group of properties",
  },
  {
    question: "Which is not a primitive data type?",
    answers: ["Boolean", "String", "Conditional", "Undefined"],
    correct: "Conditional",
  },
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

function quiz(){
    var option1 = document.getElementById("b1");
    var option2 = document.getElementById("b2");
    var option3 = document.getElementById("b3");
    var option4 = document.getElementById("b4");
    document.getElementById("questions").textContent = questionsArray[index].question
    option1.textContent = questionsArray[index].answers[0]
    option2.textContent = questionsArray[index].answers[1]
    option3.textContent = questionsArray[index].answers[2]
    option4.textContent = questionsArray[index].answers[3]
    option1.addEventListener('click',checkAnswer);
    option2.addEventListener('click',checkAnswer);
    option3.addEventListener('click',checkAnswer);
    option4.addEventListener('click',checkAnswer);
}

function checkAnswer(event){
console.log(this);
// console.log(event.target.innerText);
    var chosenAnswer = this.textContent;
    console.log(chosenAnswer,questionsArray[index].correct)
    if(chosenAnswer === questionsArray[index].correct){

    } else{
        timeLeft -= 10
    }

}
next.addEventListener("click", function(){
    if(index < questionsArray.length - 1)
    index++
    quiz();
})
previous.addEventListener("click", function(){
    if(index > 0){
        index--
        quiz();
    }
})
start.addEventListener("click", function(){
    timer()
    quiz()
});
