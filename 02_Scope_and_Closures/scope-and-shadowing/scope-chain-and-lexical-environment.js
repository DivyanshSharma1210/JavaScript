/************************************************************
 *  JAVASCRIPT SCOPE, SCOPE CHAIN & LEXICAL ENVIRONMENT
 *
 *  IMPORTANT CONCEPTS USED:
 *  1. Execution Context
 *  2. Memory Creation Phase
 *  3. Execution Phase
 *  4. Lexical Environment
 *  5. Scope Chain
 ************************************************************/


/************************************************************
 *  GLOBAL EXECUTION CONTEXT (GEC)
 *
 *  WHEN IS IT CREATED?
 *  ➜ As soon as the JS file starts executing
 *
 *  PHASE 1: MEMORY CREATION PHASE
 *  --------------------------------
 *  b → undefined
 *  a → function a() {...}
 *  this → window (in browser)
 *
 *  PHASE 2: EXECUTION PHASE
 *  --------------------------------
 *  Code runs line-by-line
 ************************************************************/


// =======================
// Example 1
// =======================

function a() {
    // FUNCTION EXECUTION CONTEXT for a() is created
    // Memory Creation Phase of a():
    // --------------------------------
    // No local variable b here
    // c → function c() {...}

    console.log(b); // ❓ JS looks for b
    // 1️⃣ Not found in local memory of a()
    // 2️⃣ Goes to parent lexical environment (Global)
    // 3️⃣ Finds b = 10 → prints 10

    function c() {
        // FUNCTION EXECUTION CONTEXT for c() is created
        // Memory Creation Phase of c():
        // --------------------------------
        // No local b

        console.log(b);
        // ❓ b not in c()
        // ➜ go to a()
        // ➜ not found
        // ➜ go to Global
        // ➜ FOUND → 10
    }

    c(); // invoke c()
}

// Memory Creation Phase (Global):
// b → undefined
var b = 10; // Execution Phase: b gets value 10

a();

/*
OUTPUT:
10
10
*/


/************************************************************
 *  LEXICAL ENVIRONMENT DIAGRAM (Example 1)
 *
 *  c() Lexical Env
 *      ↓
 *  a() Lexical Env
 *      ↓
 *  Global Lexical Env (b = 10)
 *      ↓
 *  null
 ************************************************************/


// =======================
// Example 2
// =======================

function a() {
    // Memory Creation Phase of a():
    // b → undefined
    var b = 10; // Execution Phase: b = 10

    function c() {
        console.log(b);
        // b found in parent (a)'s lexical environment
    }

    c();
}

a();

/*
OUTPUT:
10
*/


/************************************************************
 *  LEXICAL ENVIRONMENT DIAGRAM (Example 2)
 *
 *  c()
 *   ↓
 *  a()  → b = 10
 *   ↓
 *  Global
 *   ↓
 *  null
 ************************************************************/


// =======================
// Example 3
// =======================

function a() {
    var b = 10;

    function c() {
        // no console.log here
    }

    c();
}

a();

console.log(b); // ❌ ReferenceError

/*
WHY?
----
b was created inside function a()
It lives ONLY inside a()'s lexical environment
Global scope DOES NOT have b
*/


/************************************************************
 *  SCOPE ERROR DIAGRAM (Example 3)
 *
 *  Global
 *   ↓
 *  null
 *
 *  b ❌ NOT FOUND → ReferenceError
 ************************************************************/


// =======================
// Example 4
// =======================

function a() {
    var b = 10;

    function c() {
    }

    c();
}

a();

/*
No output
No error

WHY?
----
b exists but never accessed outside a()
*/


/************************************************************
 *  IMPORTANT THEORY (INTERVIEW GOLD)
 ************************************************************/

/*
1️⃣ Whenever an Execution Context is created,
   a Lexical Environment is ALSO created.

2️⃣ Lexical Environment =
   Local Memory + Reference to Parent Lexical Environment

3️⃣ Global Lexical Environment’s parent is NULL

4️⃣ Scope Chain =
   Chain of all Lexical Environments

5️⃣ JavaScript uses the Scope Chain to resolve variables
*/


/************************************************************
 *  CALL STACK VISUALIZATION
 ************************************************************/

/*
When a() is called:

Call Stack
-----------
|  a()   |
-----------
|  GEC   |
-----------

After a() finishes:

-----------
|  GEC   |
-----------
*/


/************************************************************
 *  FINAL ONE-LINE SUMMARY
 ************************************************************/

/*
JavaScript first creates memory for variables and functions
(Creation Phase), then executes code line-by-line
(Execution Phase), resolving variables using the Scope Chain
formed by Lexical Environments.
*/
