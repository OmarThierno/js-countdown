let minutes = 0;
let seconds = 55; 

minuteElem = document.getElementById('minutes');
// console.log(minuteElem);

secondElem = document.getElementById('seconds');
// console.log(secondElem);


const startElem = document.getElementById('start-btn');
// console.log(startElem);

const stopElem = document.getElementById('stop-btn');
// console.log(stopElem);

const resetElem = document.getElementById('reset-btn');
// console.log(resetElem);


startElem.addEventListener('click', handleStatBtn);

function handleStatBtn() {
  
  const clock = setInterval(function() {
    secondElem.innerHTML = seconds;
    secondElem.innerHTML = minutes;
    if (seconds < 59) {
      seconds++;
      let result = seconds <= 9 ? '0' + seconds : seconds;
      secondElem.innerHTML = result;
    } else if (minutes < 59) {
      seconds = 0;
      minutes++
      let result = minutes <= 9 ? '0' + minutes : minutes;
      minuteElem.innerHTML = result;
    }
  }, 1000)

  stopElem.addEventListener('click', handleStopBtn);
  function handleStopBtn() {
    clearInterval(clock);
  }
}

resetElem.addEventListener('click', resetCro);

function resetCro() {
  seconds = '00';
  minutes = '00';

  secondElem.innerHTML = seconds;
  minuteElem.innerHTML = minutes;
}