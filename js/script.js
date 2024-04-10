let hours = 0;
let minutes = 0;
let seconds = 10;

const hourElem = document.getElementById('hours');
// console.log(hourElem);
const minuteElem = document.getElementById('minutes');
// console.log(minuteElem);
const secondElem = document.getElementById('seconds');
// console.log(secondElem);

const timeElem = document.getElementById('time');
const buonAnnoElem = document.querySelector('.buon-anno');

// hourElem.innerHTML = hours
// minuteElem.innerHTML = minutes
secondElem.innerHTML = seconds



const clock = setInterval(function() {
  secondElem.innerHTML = seconds;
  seconds--
  let result = seconds <= 9 ? '0' + seconds : seconds;
  secondElem.innerHTML = result
}, 1000);

setTimeout(function() {
  clearTimeout(clock);
  timeElem.classList.add('hidden');
  buonAnnoElem.classList.remove('hidden')
  buonAnnoElem.classList.add('block');

  let str = 'BUONANNO'; 
  for (let i = 0; i < str.length; i++) {
    console.log('DAMMI una:', str[i])
  }

}, 10000)