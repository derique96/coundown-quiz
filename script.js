var timerEl = document.getElementById('time');
var start = document.getElementById('start');
var previous = document.getElementById('previous');
var next = document.getElementById('next');
var timeLeft = 60;


function timer(){
    var countDown = setInterval(function(){
        timerEl.textContent = "Time: " + timeLeft;
        timeLeft--
        if (timeLeft === 0){
            clearInterval(countDown);
            timerEl.textContent=""
        }

    }
    , 1000);
    
}
start.addEventListener('click', timer);