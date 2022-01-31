// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ePWYTvy2FUk.jpg') {
      myImage.setAttribute ('src','images/QwWXufNMSxY.jpg');
    } else {
      myImage.setAttribute ('src','images/ePWYTvy2FUk.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Пожалуйста, представься о_о');
  localStorage.setItem('Имя', myName);
  myHeading.textContent = 'Что будем делать, ' + myName + ' ?_?';
}

if(!localStorage.getItem('Имя')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('Имя');
  myHeading.textContent = 'Что будем делать, ' + storedName + ' ?_?';
}

myButton.onclick = function() {
  setUserName();
}