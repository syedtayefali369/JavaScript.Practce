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
