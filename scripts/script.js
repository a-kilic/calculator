document.addEventListener("keydown", handleKeyboardInput);
let currentInput = "0";
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

const keyMap = {
  0: () => appendNumber("0"),
  1: () => appendNumber("1"),
  2: () => appendNumber("2"),
  3: () => appendNumber("3"),
  4: () => appendNumber("4"),
  5: () => appendNumber("5"),
  6: () => appendNumber("6"),
  7: () => appendNumber("7"),
  8: () => appendNumber("8"),
  9: () => appendNumber("9"),
  ".": appendDecimal,
  "+": () => setOperator("add"),
  "-": () => setOperator("subtract"),
  "*": () => setOperator("multiply"),
  "/": () => setOperator("divide"),
  Enter: calculateResult,
  "=": calculateResult,
  Escape: clearDisplay,
  c: clearDisplay,
  Backspace: backspace,
};

function handleKeyboardInput(event) {
  if (keyMap[event.key]) {
    event.preventDefault();
    keyMap[event.key]();
  }
}

function backspace() {
  if (currentInput.length > 1) {
    currentInput = currentInput.slice(0, -1);
  } else {
    currentInput = "0";
  }
  updateDisplay();
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Nice try!";
  }
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case "add":
      return add(a, b);
    case "subtract":
      return subtract(a, b);
    case "multiply":
      return multiply(a, b);
    case "divide":
      return divide(a, b);
    default:
      return "Error: Unknown operator";
  }
}


function updateDisplay() {
  const display = document.getElementById("display");
  display.textContent = currentInput;
}

function appendNumber(number) {
  if (currentInput === "0") {
    currentInput = number.toString();
  } else {
    currentInput += number.toString();
  }
  updateDisplay();
}

function appendDecimal() {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    updateDisplay();
  }
}


function clearDisplay() {
  currentInput = "0";
  firstOperand = null;
  secondOperand = null;
  currentOperator = null;
  updateDisplay();
}

function setOperator(operator) {
  if (currentOperator && currentInput !== "0") {
    calculateResult();
  }

  if (firstOperand === null) {
    firstOperand = parseFloat(currentInput);
  }

  currentOperator = operator;
  currentInput = "0";
}

function calculateResult() {
  if (currentOperator && firstOperand !== null) {
    let secondOperand = parseFloat(currentInput);
    let result = operate(currentOperator, firstOperand, secondOperand);

    if (typeof result === "string") {
      currentInput = result;
      updateDisplay();

      setTimeout(() => {
        clearDisplay();
      }, 1000);
    } else {
      currentInput = parseFloat(result.toPrecision(10)).toString();
      firstOperand = parseFloat(currentInput);
      currentOperator = null;
      updateDisplay();
    }
  }
}
