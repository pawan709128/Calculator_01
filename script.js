// script.js
function clearDisplay() {
  document.getElementById('display').innerText = '';
}

function appendToDisplay(value) {
  document.getElementById('display').innerText += value;
}

function backspace() {
  const display = document.getElementById('display');
  display.innerText = display.innerText.slice(0, -1);
}

function calculateResult() {
  const display = document.getElementById('display');
  try {
      display.innerText = eval(display.innerText.replace('%', '/100'));
  } catch {
      display.innerText = 'Error';
  }
}
