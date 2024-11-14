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
        return "Error: Division by zero";
    }
    return a / b;
}

console.log("Task 3-a");
console.log("***************")
console.log("Add: ", add(5, 3));         
console.log("Subtract: ", subtract(5, 3)); 
console.log("Multiply: ", multiply(5, 3)); 
console.log("Divide: ", divide(5, 0));    
console.log("Divide: ", divide(6, 3));    

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

console.log("Task 3-b");
console.log("***************")
console.log("Operate Add: ", operate("add", 5, 3));
console.log("Operate Subtract: ", operate("subtract", 5, 3)); 
console.log("Operate Multiply: ", operate("multiply", 5, 3)); 
console.log("Operate Divide: ", operate("divide", 6, 3));     
console.log("Operate Divide by Zero: ", operate("divide", 5, 0));
console.log("Operate Unknown Operator: ", operate("modulus", 5, 3)); 

let currentInput = "0";

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

let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

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
    
    firstOperand = parseFloat(currentInput);
    currentOperator = operator;
    currentInput = "0"; 
}

function calculateResult() {
    if (currentOperator && firstOperand !== null && currentInput !== "0") {
        secondOperand = parseFloat(currentInput);

        let result = operate(currentOperator, firstOperand, secondOperand);

        if (typeof result === "number") {
            currentInput = parseFloat(result.toPrecision(10)).toString();
        } else {
            currentInput = result;
        }

        firstOperand = null;
        currentOperator = null;
        updateDisplay();
    }
}
