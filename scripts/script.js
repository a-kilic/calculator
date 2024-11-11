/* a) Your calculator is going to contain functions for all of the basic math operators you typically
find on simple calculators, so start by creating functions for the following items and testing
them in your browser’s console.
a. add
b. subtract
c. multiply
d. divide
*/
// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

// Testing the functions in the console
console.log("Task 3-a");
console.log("***************")
console.log("Add: ", add(5, 3));         // 8
console.log("Subtract: ", subtract(5, 3)); // 2
console.log("Multiply: ", multiply(5, 3)); // 15
console.log("Divide: ", divide(5, 0));    // "Error: Division by zero"
console.log("Divide: ", divide(6, 3));    // 2


/*
* b) Create a new function operate that takes an operator and 2 numbers and then calls one of
the above functions on the numbers.
* */

// Function to operate based on the given operator
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

// Testing the operate function in the console
console.log("Task 3-b");
console.log("***************")
console.log("Operate Add: ", operate("add", 5, 3));         // 8
console.log("Operate Subtract: ", operate("subtract", 5, 3)); // 2
console.log("Operate Multiply: ", operate("multiply", 5, 3)); // 15
console.log("Operate Divide: ", operate("divide", 6, 3));     // 2
console.log("Operate Divide by Zero: ", operate("divide", 5, 0)); // "Error: Division by zero"
console.log("Operate Unknown Operator: ", operate("modulus", 5, 3)); // "Error: Unknown operator"


/*
* d) Create the functions that populate the display when you click the number buttons… you
should be storing the ‘display value’ in a variable somewhere for use in the next step.
* */

let currentInput = "0";

// Update the display
function updateDisplay() {
    const display = document.getElementById("display");
    display.textContent = currentInput;
}

// Append a number to the current input
function appendNumber(number) {
    if (currentInput === "0") {
        currentInput = number.toString();
    } else {
        currentInput += number.toString();
    }
    updateDisplay();
}


/*
* e) Make the calculator work! You’ll need to store the first number that is input into the
calculator when a user presses an operator, and also save which operation has been chosen
and then operate() on them when the user presses the “=” key.
a. You should already have the code that can populate the display, so once operate()
has been called, update the display with the ‘solution’ to the operation.
b. Figure out how to store all the values and call the operate function with them.
* */

let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

// Clear the display and reset values
function clearDisplay() {
    currentInput = "0";
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    updateDisplay();
}

// Set the operator and save the first operand
function setOperator(operator) {
    if (currentOperator) {
        calculateResult();
    }
    firstOperand = parseFloat(currentInput);
    currentOperator = operator;
    currentInput = "0";
}

// Perform the calculation
function calculateResult() {
    if (currentOperator && firstOperand !== null) {
        secondOperand = parseFloat(currentInput);

        let result = operate(currentOperator, firstOperand, secondOperand);
        // Limit result to 10 significant digits
        currentInput = parseFloat(result.toPrecision(10)).toString();

        firstOperand = null;
        currentOperator = null;
        updateDisplay();
    }
}