const cheerleaderElem = document.getElementById('cheerleader');

function cheerleaders(string) {
  for (let i = 0; i < string.length; i++) {
    const wordElem = document.createElement('div');
    wordElem.innerHTML = 'Dammi un: ' + string[i];
    wordElem.classList.add('cheer-text')
    console.log(wordElem);
    cheerleaderElem.append(wordElem);
  }
}
