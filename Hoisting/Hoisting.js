/*
========================================================
 JAVASCRIPT HOISTING – DETAILED EXPLANATION (ALL EXAMPLES)
========================================================

IMPORTANT CONCEPTS USED BELOW:

1️⃣ Global Execution Context (GEC)
   - Created when JS program starts
   - Has two phases:
     a) Memory Creation Phase (Hoisting Phase)
     b) Execution Phase

2️⃣ Hoisting Rules:
   - `var` variables are hoisted and initialized with `undefined`
   - Function declarations are hoisted with their FULL definition
   - Function expressions (arrow / anonymous) behave like variables

--------------------------------------------------------
*/

/* ============================
   🔹 EXAMPLE 1
   ============================ */

// -------- MEMORY CREATION PHASE --------
// x        -> undefined
// getName  -> function getName() { console.log("Dibyansh Sharma"); }

var x = 7; // during execution: x = 7

function getName()
{
    console.log("Dibyansh Sharma");
}

getName(); // prints: Dibyansh Sharma

console.log(x); // prints: 7

// ✅ OUTPUT:
// Dibyansh Sharma
// 7


/* ============================
   🔹 EXAMPLE 2
   ============================ */

// -------- MEMORY CREATION PHASE --------
// x        -> undefined
// getName  -> function getName() { console.log("Dibyansh Sharma"); }

getName(); // function already in memory → works

console.log(x); // x exists but value is undefined (not yet assigned)

var x = 7; // assignment happens here

function getName()
{
    console.log("Dibyansh Sharma");
}

// ✅ OUTPUT:
// Dibyansh Sharma
// undefined


/* ============================
   🔹 EXAMPLE 3
   ============================ */

// -------- MEMORY CREATION PHASE --------
// getName  -> function getName() { console.log("Dibyansh Sharma"); }
// x        -> ❌ NOT DECLARED (no var yet)

getName(); // works (function hoisted)

console.log(x); // ❌ ReferenceError (x is not defined)

function getName()
{
    console.log("Dibyansh Sharma");
}

// ❌ PROGRAM STOPS DUE TO ERROR


/* ============================
   🔹 EXAMPLE 4
   ============================ */

// -------- MEMORY CREATION PHASE --------
// x        -> undefined
// getName  -> function getName() {...}

var x = 7;

function getName()
{
    console.log("Dibyansh Sharma");
}

console.log(getName); 
// prints entire function definition

// ✅ OUTPUT:
// ƒ getName() { console.log("Dibyansh Sharma"); }


/* ============================
   🔹 EXAMPLE 5
   ============================ */

// -------- MEMORY CREATION PHASE --------
// x        -> undefined
// getName  -> function getName() {...}

console.log(getName); // function already hoisted

var x = 7;

function getName()
{
    console.log("Dibyansh Sharma");
}

// ✅ OUTPUT:
// ƒ getName() { console.log("Dibyansh Sharma"); }


/* ============================
   🔹 EXAMPLE 6
   ============================ */

// -------- MEMORY CREATION PHASE --------
// x        -> undefined
// getName  -> function getName() {...}

var x = 7;

function getName()
{
    console.log("Dibyansh Sharma");
}

console.log(getName()); 
// function runs → prints name
// return value = undefined

console.log(x); // 7

console.log(getName); // function reference

// ✅ OUTPUT:
// Dibyansh Sharma
// undefined
// 7
// ƒ getName() { ... }


/* ============================
   🔹 EXAMPLE 7
   ============================ */

// -------- MEMORY CREATION PHASE --------
// x        -> undefined
// getName  -> function getName() {...}

console.log(getName()); 
// function executes

console.log(x); // undefined (var hoisting)

console.log(getName); // function reference

var x = 7;

function getName()
{
    console.log("Dibyansh Sharma");
}

// ✅ OUTPUT:
// Dibyansh Sharma
// undefined
// ƒ getName() { ... }


/* ============================
   🔹 EXAMPLE 8 (IMPORTANT ⚠️)
   ============================ */

// -------- MEMORY CREATION PHASE --------
// x        -> undefined
// getName  -> undefined   (because arrow function = var)

console.log(getName()); 
// ❌ TypeError: getName is not a function
// because getName is undefined at this moment

console.log(x); // undefined

console.log(getName); // undefined

var x = 7;

var getName = () =>
{
    console.log("Dibyansh Sharma");
};

/*
🚨 KEY TAKEAWAY FROM EXAMPLE 8:
- Arrow functions are NOT hoisted like normal functions
- They behave like variables
- Until assignment, they are `undefined`
*/

/* ============================
   🎯 FINAL SUMMARY
   ============================

✔ Function declarations → fully hoisted
✔ var variables → hoisted with `undefined`
✔ Arrow / function expressions → NOT callable before assignment
✔ Accessing undeclared variable → ReferenceError
✔ Calling undefined as function → TypeError

========================================================
*/

/* ============================
   📊 EXECUTION CONTEXT & CALL STACK DIAGRAMS
   ============================ */

/*
--------------------------------------------------
📌 GLOBAL EXECUTION CONTEXT (GEC) – OVERVIEW
--------------------------------------------------

When a JS program starts, the JS Engine creates:

┌─────────────────────────────────────┐
│ Global Execution Context (GEC)       │
├─────────────────────────────────────┤
│ 1️⃣ Memory Creation Phase            │
│ 2️⃣ Execution Phase                  │
└─────────────────────────────────────┘

--------------------------------------------------
📌 MEMORY CREATION PHASE (HOISTING)
--------------------------------------------------

Example:

var x = 7;
function getName() { ... }

Memory is allocated like this:

┌───────────────────────────┐
│ MEMORY (GLOBAL)           │
├───────────────────────────┤
│ x        → undefined      │
│ getName  → ƒ () {...}     │
└───────────────────────────┘

⚠️ No code is executed here
⚠️ Only memory allocation happens

--------------------------------------------------
📌 EXECUTION PHASE
--------------------------------------------------

Now code runs line-by-line:

1️⃣ var x = 7        → x = 7
2️⃣ getName()        → function executes
3️⃣ console.log(x)   → prints 7

Updated memory:

┌───────────────────────────┐
│ MEMORY (GLOBAL)           │
├───────────────────────────┤
│ x        → 7              │
│ getName  → ƒ () {...}     │
└───────────────────────────┘

--------------------------------------------------
📌 CALL STACK (HOW FUNCTIONS EXECUTE)
--------------------------------------------------

Call Stack follows LIFO (Last In, First Out)

When program starts:

┌───────────────────────────┐
│ Global Execution Context  │
└───────────────────────────┘

When getName() is called:

┌───────────────────────────┐
│ getName() EC              │ ← pushed
├───────────────────────────┤
│ Global Execution Context  │
└───────────────────────────┘

After getName() finishes:

┌───────────────────────────┐
│ Global Execution Context  │ ← popped
└───────────────────────────┘

--------------------------------------------------
📌 CALL STACK WITH ERROR (Example 8)
--------------------------------------------------

console.log(getName());

Memory Phase:
getName → undefined

Execution Phase:

┌───────────────────────────┐
│ Global Execution Context  │
└───────────────────────────┘
        ↓
Trying to execute:
undefined()

❌ TypeError: getName is not a function
❌ No new execution context is created

--------------------------------------------------
📌 VISUAL SUMMARY
--------------------------------------------------

Hoisting Table:

┌─────────────────────┬────────────────────────┐
│ Declaration Type    │ Hoisted As             │
├─────────────────────┼────────────────────────┤
│ var                 │ undefined              │
│ function declaration│ full function body     │
│ arrow function      │ undefined              │
│ let / const         │ TDZ (not accessible)   │
└─────────────────────┴────────────────────────┘

--------------------------------------------------
🎯 INTERVIEW ONE-LINER
--------------------------------------------------
"JavaScript hoisting happens in the memory creation
phase where variables get undefined and function
declarations get their full definitions before
execution starts."

==================================================
*/
