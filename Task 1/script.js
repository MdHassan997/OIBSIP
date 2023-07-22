// Get DOM elements
const inputDisplay = document.getElementById("input-display");
const resultDisplay = document.getElementById("result-display");
const buttons = document.getElementsByTagName("button");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const sqrtButton = document.getElementById("sqrt");
const percentageButton = document.getElementById("percentage");
const equalButton = document.getElementById("equal");

let inputExpression = ""; // To store the user's input expression

// Add click event listeners to buttons
for (let button of buttons) {
  button.addEventListener("click", handleButtonPress);
}

// Handle button press
function handleButtonPress() {
  const buttonValue = this.innerText;

  if (buttonValue === "=") {
    calculate();
  } else if (buttonValue === "C") {
    clear();
  } else if (buttonValue === "DEL") {
    deleteLast();
  } else if (buttonValue === "√") {
    squareRoot();
  } else if (buttonValue === "%") {
    percentage();
  } else {
    addToInput(buttonValue);
  }
}

// Add button value to input display
function addToInput(value) {
  inputExpression += value;
  inputDisplay.value = inputExpression;
}

// Clear the input display
function clear() {
  inputExpression = "";
  inputDisplay.value = "";
  resultDisplay.value = "";
}

// Delete the last character from input display
function deleteLast() {
  inputExpression = inputExpression.slice(0, -1);
  inputDisplay.value = inputExpression;
}

// Perform calculation
function calculate() {
  try {
    const result = eval(inputExpression);
    resultDisplay.value = result;
  } catch (error) {
    resultDisplay.value = "Error";
  }
}

// Calculate square root
function squareRoot() {
  const inputValue = parseFloat(inputExpression);
  if (inputValue >= 0) {
    const result = Math.sqrt(inputValue);
    resultDisplay.value = result;
  } else {
    resultDisplay.value = "Error";
  }
}

// Calculate percentage
function percentage() {
  const inputValue = parseFloat(inputExpression);
  const result = inputValue / 100;
  resultDisplay.value = result;
}
