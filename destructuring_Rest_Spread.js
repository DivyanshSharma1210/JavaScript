// -----------------------------
// Array Creation
// -----------------------------

// First array containing numbers
const oneArray = [1, 2, 3, 4];

// Second array containing numbers
const twoArray = [5, 6, 7, 8];

// Creating a nested array (array inside an array)
// Here, oneArray and twoArray are stored as elements
const threeArray = [oneArray, twoArray];

console.log(threeArray); 
// Output: [ [1, 2, 3, 4], [5, 6, 7, 8] ]

// ----------------------------------
// concat() Method
// ----------------------------------

// Combines two arrays and returns a NEW array
// Original arrays remain unchanged
const threeArray2 = oneArray.concat(twoArray);

console.log(threeArray2);
// Output: [1, 2, 3, 4, 5, 6, 7, 8]

// ----------------------------------
// Spread Operator (...)
// ----------------------------------

// Spread operator expands the elements of arrays
// into a new array
const threeArray3 = [...oneArray, ...twoArray];

console.log(threeArray3);
// Output: [1, 2, 3, 4, 5, 6, 7, 8]

// ---------------------------------------------------------------------------------------------
// Rest Operator with `arguments` object
// ---------------------------------------------------------------------------------------------

function manyArguments() {
    // 'arguments' is an array-like object (not a real array)
    console.log(typeof arguments);   // object
    console.log(arguments);

    // Converting arguments object into a real array
    let args = Array.from(arguments);

    console.log(args);
}

// Calling function with multiple arguments
manyArguments(1, 2, 3, 4, 5, 6);
manyArguments(1, 2, 3);

// ---------------------------------------------------------------------------------------------
// Rest Operator (...args)
// ---------------------------------------------------------------------------------------------

function manyArguments2(...args) {
    // Rest operator collects all arguments into an array
    console.log(typeof args);   // object (array)
    console.log(args);

    // args is already an array, no conversion needed
    let finalArgs = args;

    console.log(finalArgs);
}

// Calling function with multiple values
manyArguments2(11, 22, 33, 55, 66, 77, 88, 99, 44);

// ---------------------------------------------------------------------------------------------
// Spread Operator Example
// ---------------------------------------------------------------------------------------------

// Original array
const names = ["superman", "flash"];

// Creating a new array using spread operator
const newNames = ["Batman", ...names, "thor"];

console.log(names);     
// Output: ["superman", "flash"]

console.log(newNames);  
// Output: ["Batman", "superman", "flash", "thor"]

// Spread operator with string
// Strings are iterable, so each character is spread
const sitename = "pwskills";

console.log([...sitename]);
// Output: ['p', 'w', 's', 'k', 'i', 'l', 'l', 's']

// ---------------------------------------------------------------------------------------------
// Rest Operator Example
// ---------------------------------------------------------------------------------------------

function pwskills(...values) {
    // Collects all arguments into an array
    return values;
}

console.log(pwskills(100, 200, 300, 400, 500, 600, 700, 800, 900));
// Output: [100, 200, 300, 400, 500, 600, 700, 800, 900]
