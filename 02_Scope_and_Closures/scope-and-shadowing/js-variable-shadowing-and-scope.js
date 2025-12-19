/*
========================================================
 JAVASCRIPT VARIABLE SHADOWING & SCOPE – DEEP EXPLANATION
========================================================

This example demonstrates:
- How JavaScript handles SAME variable names
- Global vs Function scope
- Execution Context creation
- Scope Chain resolution
- Call Stack behavior

========================================================
*/

/* ============================
   🧠 CODE UNDER DISCUSSION
   ============================ */

var x = 1;

a();
b();
console.log(x);

function a()
{
    var x = 10;
    console.log(x);
}

function b()
{
   var x = 100;
   console.log(x);
}

/* ============================
   🔹 STEP 1: GLOBAL EXECUTION CONTEXT (GEC)
   ============================ */

/*
When the program starts, JavaScript creates the
GLOBAL EXECUTION CONTEXT.

It has two phases:
1️⃣ Memory Creation Phase
2️⃣ Execution Phase
*/

/* ============================
   🔹 MEMORY CREATION PHASE (GLOBAL)
   ============================ */

/*
Memory is allocated BEFORE code execution.

GLOBAL MEMORY:

┌───────────────────────────┐
│ x        → undefined      │
│ a        → ƒ a() {...}    │
│ b        → ƒ b() {...}    │
└───────────────────────────┘

NOTE:
- `var x` is hoisted and initialized with `undefined`
- Functions `a` and `b` are hoisted with full definitions
*/

/* ============================
   🔹 EXECUTION PHASE (GLOBAL)
   ============================ */

// Line 1 executes
var x = 1; // global x is now 1

/* ============================
   🔹 CALL STACK BEHAVIOR
   ============================ */

/*
Initial Call Stack:

┌───────────────────────────┐
│ Global Execution Context  │
└───────────────────────────┘
*/

/* ============================
   🔹 a() IS CALLED
   ============================ */

a();

/*
Call Stack after calling a():

┌───────────────────────────┐
│ a() Execution Context     │ ← pushed
├───────────────────────────┤
│ Global Execution Context  │
└───────────────────────────┘
*/

/* ============================
   🔹 MEMORY CREATION PHASE (a)
   ============================ */

/*
FUNCTION a MEMORY:

┌───────────────────────────┐
│ x        → undefined      │
└───────────────────────────┘

IMPORTANT:
- `var x` inside a() creates a NEW variable
- This `x` SHADOWS the global `x`
*/

/* ============================
   🔹 EXECUTION PHASE (a)
   ============================ */

// var x = 10 executes
// local x (inside a) becomes 10

console.log(x); // prints 10 (local x)

/*
After execution, a() finishes
and its execution context is removed
from the call stack.
*/

/* ============================
   🔹 b() IS CALLED
   ============================ */

b();

/*
Call Stack after calling b():

┌───────────────────────────┐
│ b() Execution Context     │ ← pushed
├───────────────────────────┤
│ Global Execution Context  │
└───────────────────────────┘
*/

/* ============================
   🔹 MEMORY CREATION PHASE (b)
   ============================ */

/*
FUNCTION b MEMORY:

┌───────────────────────────┐
│ x        → undefined      │
└───────────────────────────┘

Again:
- Local `x` in b() SHADOWS global `x`
*/

/* ============================
   🔹 EXECUTION PHASE (b)
   ============================ */

// var x = 100 executes
// local x (inside b) becomes 100

console.log(x); // prints 100 (local x)

/*
After b() completes, its execution context
is popped from the call stack.
*/

/* ============================
   🔹 BACK TO GLOBAL EXECUTION
   ============================ */

console.log(x); // prints 1 (global x remains unchanged)

/* ============================
   📊 SCOPE CHAIN VISUALIZATION
   ============================ */

/*
Scope Chain for function a():

┌───────────────┐
│ a() Scope     │ → x = 10
├───────────────┤
│ Global Scope  │ → x = 1
└───────────────┘

Scope Chain for function b():

┌───────────────┐
│ b() Scope     │ → x = 100
├───────────────┤
│ Global Scope  │ → x = 1
└───────────────┘
*/

/* ============================
   ✅ FINAL OUTPUT
   ============================ */

/*
10
100
1
*/

/* ============================
   🎯 KEY TAKEAWAYS (INTERVIEW READY)
   ============================ */

/*
✔ Same variable name in different scopes creates DIFFERENT variables
✔ Local variables SHADOW global variables
✔ JavaScript resolves variables using SCOPE CHAIN
✔ Each function call creates a NEW execution context
✔ Global variable is NOT affected by local changes

One-liner:
"JavaScript uses lexical scoping, so variables are resolved
from the nearest scope outward via the scope chain."

========================================================
*/
