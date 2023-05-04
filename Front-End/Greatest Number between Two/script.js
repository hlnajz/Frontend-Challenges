'use strict';

// to display the result
const displayMsg = function (message) {
  document.querySelector('.result').textContent = message;
};

// comparing the Numbers
const GreatestNumber = function () {
  const x = document.getElementById('numberOne').value;
  const y = document.getElementById('numberTwo').value;

  if (isNaN(x) || isNaN(y)) {
    displayMsg('Please Enter Valid Numbers❌');
  } else if (x > y) {
    displayMsg(`the Greater Number is ${x}✅`);
  } else if (x < y) {
    displayMsg(`the Greater Number is ${y}✅`);
  } else if (x === y) {
    displayMsg('Both numbers are equal✅');
  }
  // to change background color of body
  document.querySelector('body').style.background =
    'linear-gradient(to right, green, greenyellow, yellow)';
};

// to reset bgColor and result
const Restart = function () {
  document.querySelector('body').style.background = '';
  displayMsg('Checking...');
  document.getElementById('numberOne').value = '';
  document.getElementById('numberTwo').value = '';
};
