// Select DOM elements
const body = document.querySelector("body");
const numbers = document.querySelectorAll(".numbersButton");
const operators = document.querySelectorAll(".operatorsButton");
const currentDisplay = document.querySelector("#current-display");
const result = document.querySelector("#result");

let operandString = "";

/* -------------------- Utility Functions -------------------- */

/** Adds click event listeners to a group of buttons (numbers or operators). */
function addListener(buttonGroup) {
  buttonGroup.forEach((item) => {
    item.addEventListener("click", (event) => handleButtonClick(event));
  });
}

/** Handles the click event for both number and operator buttons. */
function handleButtonClick(event) {
  const value = event.target.getAttribute("data-value");
  console.log(value);

  handleCurrentDisplay(value);
  operandString += value;
  console.log(operandString);

  if (event.target.matches("#equal")) {
    handleEqualPress();
  }
}

/** Handles what happens when "=" is pressed and performs the calculation. */
function handleEqualPress() {
  operandString = operandString.substring(0, operandString.length - 1);

  const operator = detectOperator(operandString);
  let operand = operandString.split(operator);

  console.log(operand);

  const operand1 = parseFloat(operand[0]);
  const operand2 = parseFloat(operand[1]);

  result.textContent = performCalculation(operand1, operand2, operator);
  operand = [];
  operandString = result.textContent;
}

/** Detects which operator (+, -, *, /, %) exists in the current operand string. */
function detectOperator(str) {
  if (str.includes("+")) return "+";
  else if (str.includes("-")) return "-";
  else if (str.includes("*")) return "*";
  else if (str.includes("/")) return "/";
  else if (str.includes("%")) return "%";
  return "";
}

/** Updates the current display with the pressed value, unless it is "=". */
function handleCurrentDisplay(value) {
  if (value != "=") {
    currentDisplay.textContent += value;
  }
}

/** Clears both the current display and the result area. */
function clearDisplay() {
  currentDisplay.textContent = "";
  result.textContent = "";
  operandString = "";
}

/** Removes the last character from the current display and operand string. */
function undo() {
  const length = currentDisplay.textContent.length;
  currentDisplay.textContent = currentDisplay.textContent.substring(
    0,
    length - 1
  );
  operandString = operandString.substring(0, operandString.length - 1);
}

/** Performs the basic arithmetic operation based on the operator provided. */
function performCalculation(operand1, operand2, operator) {
  switch (operator) {
    case "+":
      return operand1 + operand2;
    case "-":
      return operand1 - operand2;
    case "/":
      return operand1 / operand2;
    case "*":
      return operand1 * operand2;
    case "%":
      return operand1 % operand2;
  }
}

body.addEventListener("keydown", (event) => {
  console.log(event.key);
  const keyPressValue = event.key;
  switch (keyPressValue) {
    case "+":
    case "-":
    case "/":
    case "*":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
    case "%":
    case ".":
      handleCurrentDisplay(keyPressValue);
      operandString += keyPressValue;
      console.log(operandString);

      if (event.target.matches("#equal")) {
        handleEqualPress();
      }
      break;
    case "Backspace":
      console.log("hi from backspace");
      undo();
      break;
    case "Enter":
      handleCurrentDisplay("=");
      operandString += "=";
      console.log("hi from enter");
      handleEqualPress();
      break;
    case "Escape":
      clearDisplay();
      break;
  }
});

/* -------------------- Initialize Listeners -------------------- */
addListener(numbers);
addListener(operators);
