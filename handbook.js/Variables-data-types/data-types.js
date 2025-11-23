// ======================
// DATA TYPES
// ======================

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

// 2. Reference Data Types
// ------------------------

// Object
const person = {
    name: "Alice",
    age: 30,
    isStudent: false
};
console.log("Object:", person);

// Array
const colors = ["red", "green", "blue"];
console.log("Array:", colors);

// Function
function greet() {
    return "Hello!";
}
console.log("Function:", greet);

// 3. Type Checking
// -----------------
console.log("Type of string:", typeof firstName);
console.log("Type of number:", typeof integer);
console.log("Type of boolean:", typeof isLoggedIn);
console.log("Type of object:", typeof person);
console.log("Type of array:", typeof colors); // Returns 'object'
console.log("Array check:", Array.isArray(colors));

// 4. Type Conversion
// -------------------

// String to Number
const stringNum = "123";
console.log("String to number:", Number(stringNum));
console.log("String to number (parse):", parseInt(stringNum));

// Number to String
const num = 456;
console.log("Number to string:", String(num));
console.log("Number to string (template):", `${num}`);

// Boolean Conversion
console.log("Truthy values:", Boolean(1), Boolean("hello"), Boolean([]));
console.log("Falsy values:", Boolean(0), Boolean(""), Boolean(null), Boolean(undefined));

// 5. Common Operations
// ---------------------

// String operations
const fullName = "John Doe";
console.log("String length:", fullName.length);
console.log("Uppercase:", fullName.toUpperCase());
console.log("Substring:", fullName.substring(0, 4));
console.log("Includes:", fullName.includes("Doe"));

// Number operations
const price = 9.99;
console.log("Fixed decimal:", price.toFixed(2));
console.log("Is integer?", Number.isInteger(price));