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
console.log("Add: ", add(5, 3));         // 8
console.log("Subtract: ", subtract(5, 3)); // 2
console.log("Multiply: ", multiply(5, 3)); // 15
console.log("Divide: ", divide(5, 0));    // "Error: Division by zero"
console.log("Divide: ", divide(6, 3));    // 2
