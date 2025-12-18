/*************************************************************
 *  JAVASCRIPT SCOPE, LEXICAL ENVIRONMENT & CLOSURES
 *************************************************************/

/*============================================================
  PART 1: GLOBAL vs LOCAL SCOPE & VARIABLE SHADOWING
============================================================*/

// Global scope variable
let score = 4;

function one() {
    // Local variable (shadows the global `score`)
    let score = 0;
    console.log(score); // Output: 0
}

function two() {
    // Local variable
    let score = 3;
    console.log(score); // Output: 3
}

function three() {
    // No local variable → uses global scope
    console.log(score); // Output: 4
}

one();
two();
three();

// Global variable remains unchanged
console.log(score); // Output: 4


/*============================================================
  PART 2: LEXICAL SCOPE (NESTED FUNCTIONS)
============================================================*/

function outerFunction() {
    let outerVar = "I am at scope level 1";

    function innerFunction() {
        let innerVar = "I am at scope level 2";

        // Inner function can access outer function variables
        console.log(outerVar);
    }

    // ❌ Not accessible (innerVar is block scoped)
    // console.log(innerVar);

    innerFunction();
}

outerFunction();


/*============================================================
  PART 3: SCOPE CHAIN (MULTI-LEVEL NESTING)
============================================================*/

// Global variable
const myGlobalValue = 0;

function func() {
    const val1 = 1;

    // Accessing global variable
    console.log(myGlobalValue);

    function innerOfFunc() {
        const val2 = 2;

        // Local + parent + global access
        console.log(val2);
        console.log(val1);
        console.log(myGlobalValue);

        function innerOfInnerFunc() {
            let val3 = 3;

            // Accessing all levels of scope
            console.log(val3);
            console.log(val2);
            console.log(val1);
            console.log(myGlobalValue);
        }

        innerOfInnerFunc();
    }

    innerOfFunc();
}

func();


/*============================================================
  PART 4: CLOSURES (CORE JAVASCRIPT CONCEPT)
============================================================*/

// A closure allows a function to remember variables
// from its outer scope even after execution

function superFunction() {
    let outerValue = "I am outer variable...";

    function minorFunction() {
        // Closure: accessing outerValue
        console.log(outerValue);
    }

    minorFunction();
}

superFunction();


/*============================================================
  CLOSURE EXAMPLE 1: setTimeout
============================================================*/

const errorMessage = "File not found";

// Callback remembers `errorMessage` (closure)
setTimeout(function callback() {
    console.log(errorMessage);
}, 1000);


/*============================================================
  CLOSURE EXAMPLE 2: forEach with External Counter
============================================================*/

let pageCount = 0;

const items = [2, 4, 5, 6, 7, 8, 9];

items.forEach((item) => {
    // Closure over pageCount
    pageCount++;
    console.log(item);
});

// Final count after loop execution
console.log(pageCount);


/*************************************************************
 *  END OF FILE
 *************************************************************/
