// 1. Primitive Data Types
// ------------------------

// String
const firstName = "John";
const lastName = 'Doe';
const message = `Hello ${firstName}`; // Template literal
console.log("String:", message);

// Number
const integer = 42;
const float = 3.14;
const negative = -10;
console.log("Number examples:", integer, float, negative);

// Boolean
const isLoggedIn = true;
const hasPermission = false;
console.log("Boolean:", isLoggedIn, hasPermission);

// Undefined
let undefinedVar;
console.log("Undefined:", undefinedVar);

// Null
const emptyValue = null;
console.log("Null:", emptyValue);

// Symbol (ES6)
const uniqueId = Symbol("id");
console.log("Symbol:", uniqueId);

// BigInt (ES2020)
const bigNumber = 9007199254740991n;
console.log("BigInt:", bigNumber);