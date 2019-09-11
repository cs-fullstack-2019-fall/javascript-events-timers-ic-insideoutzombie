let btnTimer = document.getElementById("timerbtn");
let secsTimer = document.getElementById("secs");
let seconds = 0;

// function to add + 1 to the total time counting up
function timer_callback() {
  secsTimer.innerText = seconds;
  seconds++;
}

// function to target the div of 0 to start the timer counting
function getTimer(ev){
  seconds = 0;
  let intervalID = window.setInterval(timer_callback, 1000);
}

// targets the button tag to start the function call for getTimer
btnTimer.addEventListener('click', getTimer);
