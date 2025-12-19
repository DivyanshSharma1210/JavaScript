/*
========================================================
 JavaScript: `undefined` vs `not defined` (IN DEPTH)
========================================================

📌 THIS FILE EXPLAINS:
- What `undefined` means in JavaScript
- What `not defined` (ReferenceError) means
- How hoisting causes `undefined`
- Why accessing undeclared variables crashes
- Memory Creation vs Execution Phase
- Best practices (what NOT to do)
- Execution Context & Call Stack diagrams

========================================================
*/

/* ========================================================
   🧠 STEP 1: GLOBAL EXECUTION CONTEXT CREATION
========================================================

When this file starts running, JavaScript Engine:

1️⃣ Creates Global Execution Context (GEC)
2️⃣ Allocates memory (Hoisting phase)
3️⃣ Executes code line-by-line (Execution phase)

--------------------------------------------------------
📦 MEMORY CREATION PHASE
--------------------------------------------------------

Before execution, memory looks like this:

┌───────────────────────────────┐
│ GLOBAL MEMORY (GEC)            │
├───────────────────────────────┤
│ a      → undefined             │
│ name   → undefined             │
│ abc    → undefined             │
└───────────────────────────────┘

✔ `var` variables are hoisted
✔ They are initialized with `undefined`
✔ No code is executed yet

========================================================
*/

/* ============================
   🔹 EXAMPLE 1: undefined
============================ */

console.log(a);
// OUTPUT: undefined

// WHY?
// - `a` exists in memory (hoisted)
// - But value is not assigned yet

var a = 7;
// During execution phase:
// a = 7

console.log(a);
// OUTPUT: 7

/* ========================================================
   🔹 EXAMPLE 2: not defined (ReferenceError)
======================================================== */

// console.log(x);

/*
❌ UNCOMMENTING ABOVE LINE WILL THROW:

ReferenceError: x is not defined

WHY?
- `x` was NEVER declared
- No memory allocated for `x`
- JavaScript cannot find `x` in scope chain
*/

/* ========================================================
   🔹 EXAMPLE 3: Checking undefined safely
======================================================== */

var name;
// name is declared but not assigned

if (name === undefined)
{
    console.log("name is undefined");
}
else
{
    console.log("name is not undefined");
}

// OUTPUT:
// name is undefined

/* ========================================================
   🚫 BAD PRACTICE (NEVER DO THIS)
======================================================== */

var abc = undefined;

/*
WHY THIS IS BAD?

❌ You are manually overriding JavaScript's behavior
❌ Makes debugging difficult
❌ You lose the ability to know if variable was assigned

✔ Correct approach:
   - Declare variable
   - Let JavaScript assign `undefined`
*/

/* ========================================================
   🧠 IMPORTANT CONCEPT: Loosely Typed Language
======================================================== */

/*
JavaScript is a LOOSLEY TYPED (Weakly Typed) language.

That means:
✔ Variable type is decided at runtime
✔ Same variable can hold different types

Example:

var x = 10;        // number
x = "hello";     // string
x = true;         // boolean

No compile-time error
*/

/* ========================================================
   📊 EXECUTION CONTEXT & CALL STACK DIAGRAMS
======================================================== */

/* --------------------------------------------------------
📌 GLOBAL EXECUTION CONTEXT (GEC)
--------------------------------------------------------

┌────────────────────────────────┐
│ Global Execution Context       │
├────────────────────────────────┤
│ Memory Creation Phase          │
│ Execution Phase                │
└────────────────────────────────┘

--------------------------------------------------------
📌 MEMORY STATE (Before Execution)
--------------------------------------------------------

┌───────────────────────────────┐
│ a      → undefined             │
│ name   → undefined             │
│ abc    → undefined             │
└───────────────────────────────┘

--------------------------------------------------------
📌 EXECUTION FLOW
--------------------------------------------------------

1️⃣ console.log(a)   → undefined
2️⃣ a = 7
3️⃣ console.log(a)   → 7
4️⃣ name check       → undefined

--------------------------------------------------------
📌 ERROR FLOW (not defined)
--------------------------------------------------------

console.log(x);

❌ JS Engine searches:
- Local Scope ❌
- Global Scope ❌

➡️ ReferenceError thrown
➡️ Execution stops

--------------------------------------------------------
📌 VISUAL DIFFERENCE
--------------------------------------------------------

undefined:
┌───────────────┐
│ Declared ✔    │
│ Memory ✔      │
│ Value ❌      │
└───────────────┘

not defined:
┌───────────────┐
│ Declared ❌   │
│ Memory ❌     │
│ Error 💥      │
└───────────────┘

========================================================
🎯 INTERVIEW ONE-LINER
========================================================
"undefined means variable exists but no value assigned,
not defined means variable was never declared at all."

========================================================
*/
