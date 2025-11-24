Best Practices
Use const by default, let when reassignment needed

Use descriptive variable names

Follow camelCase naming convention

Initialize variables when declaring

🚀 Practice Exercises
Create variables for user profile (name, age, email)

Convert string "123.45" to number with 2 decimal places

Check if a variable is an array

Create an object with mixed data types

text

### 5. `02-functions/function-declarations.js`
```javascript
// ======================
// FUNCTION DECLARATIONS
// ======================

// 1. Function Declaration
// ------------------------
function greet(name) {
    return `Hello, ${name}!`;
}
console.log("Function declaration:", greet("Alice"));

// 2. Function Expression
// -----------------------
const greetExpression = function(name) {
    return `Hello, ${name}!`;
};
console.log("Function expression:", greetExpression("Bob"));

// 3. Parameters & Arguments
// --------------------------
function calculateArea(width, height = 10) { // height has default value
    return width * height;
}
console.log("Area with default:", calculateArea(5)); // Uses default height
console.log("Area with values:", calculateArea(5, 8));

// 4. Rest Parameters
// -------------------
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log("Sum with rest:", sum(1, 2, 3, 4, 5));

// 5. Return Values
// -----------------
function isAdult(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
    console.log("This won't execute"); // Unreachable code
}
console.log("Is adult?", isAdult(20));

// 6. Function Scope
// ------------------
let globalVar = "I'm global";

function demonstrateScope() {
    let localVar = "I'm local";
    console.log("Inside function - global:", globalVar);
    console.log("Inside function - local:", localVar);
    
    // Can modify global variables
    globalVar = "Modified globally";
}
demonstrateScope();
console.log("Outside function - global:", globalVar);
// console.log(localVar); // Error - localVar not accessible

// 7. IIFE (Immediately Invoked Function Expression)
// -------------------------------------------------
(function() {
    console.log("IIFE executed immediately!");
})();

// 8. Recursive Functions
// -----------------------
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log("Factorial of 5:", factorial(5));
