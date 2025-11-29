// ======================
// VARIABLES & SCOPING
// ======================

// 1. Variable Declarations
// -------------------------

// var - Function scoped (avoid in modern JS)
var name = "John";
console.log("var example:", name);

// let - Block scoped, can be reassigned
let age = 25;
age = 26; // Reassignment allowed
console.log("let example:", age);

// const - Block scoped, cannot be reassigned
const country = "Bangladesh";
// country = "USA"; // This will throw error
console.log("const example:", country);

// 2. Variable Scoping
// --------------------

function demonstrateScoping() {
    if (true) {
        var functionScoped = "I'm function scoped";
        let blockScoped = "I'm block scoped";
        const alsoBlockScoped = "I'm also block scoped";
        
        console.log("Inside block:", functionScoped);
        console.log("Inside block:", blockScoped);
    }
    
    console.log("Outside block:", functionScoped); // Works
    // console.log(blockScoped); // Error - not accessible
}

demonstrateScoping();

// 3. Variable Hoisting
// ---------------------

console.log(hoistedVar); // undefined (hoisted but not initialized)
// console.log(hoistedLet); // Error (not hoisted)
// console.log(hoistedConst); // Error (not hoisted)

var hoistedVar = "I'm hoisted";
let hoistedLet = "I'm not hoisted";
const hoistedConst = "I'm not hoisted";

// 4. Naming Conventions
// ----------------------
const userName = "Tayef"; // camelCase
const MAX_USERS = 100; // UPPER_CASE for constants
const isActive = true; // boolean prefix: is, has, can