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

  const clockCheeleaders = setInterval(function() {
    buonAnnoElem.classList.remove('block')
    buonAnnoElem.classList.add('hidden');
    let str = 'BUONANNO'; 
    cheerleaders(str);
  }, 2000);

  setTimeout(function() {
    clearInterval(clockCheeleaders);
    cheerleaderElem.classList.add('hidden');
    buonAnnoElem.classList.remove('hidden');
    buonAnnoElem.classList.add('block');
  }, 3900)

}, 10000)