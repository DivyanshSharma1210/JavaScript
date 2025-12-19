/*
========================================================
 JAVASCRIPT GLOBAL OBJECT, WINDOW & THIS – IN-DEPTH
========================================================

📌 THIS FILE EXPLAINS:
- When and how the Global Execution Context is created
- How the Global Object (`window`) is created
- Why `window === this` in the global scope (browser)
- How variables & functions attach to the global object
- Line-by-line execution with outputs
- Execution Context & Call Stack diagrams

⚠️ NOTE:
This explanation assumes **Browser Environment**.
(In Node.js, `global` is used instead of `window`.)
========================================================
*/

/* ========================================================
   🧠 STEP 1: GLOBAL EXECUTION CONTEXT (GEC) CREATION
========================================================

When this JS file starts executing, the JS Engine does:

1️⃣ Creates the Global Execution Context (GEC)
2️⃣ Creates the Global Object
   → In browser: `window`
3️⃣ Creates `this` keyword
   → In global scope: `this === window`

--------------------------------------------------------
📦 MEMORY CREATION PHASE (HOISTING PHASE)
--------------------------------------------------------

Before executing a single line, memory is allocated:

┌───────────────────────────────┐
│ GLOBAL MEMORY (GEC)            │
├───────────────────────────────┤
│ a        → undefined           │
│ b        → function b() {...}  │
│ window   → Global Object       │
│ this     → window              │
└───────────────────────────────┘

✔ `var a` is hoisted with `undefined`
✔ `function b` is hoisted with full definition
✔ `window` object is created by browser
✔ `this` points to `window`

========================================================
*/

/* ============================
   🔹 CODE EXECUTION STARTS
============================ */

var a = 10;
// During execution phase:
// a = 10
// window.a = 10 (var attaches to global object)

function b()
{
    // A NEW FUNCTION EXECUTION CONTEXT WILL BE CREATED
    var x = 100;
    console.log(x);
}

/* ========================================================
   🧠 EXECUTION PHASE (LINE-BY-LINE)
======================================================== */

console.log(window.a);
// window.a → 10
// Because:
// var a is attached to window object

console.log(a);
// Direct access to variable a → 10

console.log(window.b());
// window.b → function reference
// () executes the function

/*
--------------------------------------------------------
📌 FUNCTION EXECUTION CONTEXT FOR b()
--------------------------------------------------------

When b() is called:

┌───────────────────────────────┐
│ FUNCTION EXECUTION CONTEXT    │
├───────────────────────────────┤
│ x → undefined (memory phase)  │
└───────────────────────────────┘

Execution Phase:
- x = 100
- console.log(x) → prints 100

Return value:
- No return statement → undefined
--------------------------------------------------------
*/

// OUTPUT SO FAR:
// 10
// 10
// 100
// undefined

console.log(this.a);
// this → window (in global scope)
// window.a → 10

/* ========================================================
   ✅ FINAL OUTPUT
========================================================

10
10
100
undefined
10

======================================================== */

/* ========================================================
   📊 EXECUTION CONTEXT & CALL STACK DIAGRAMS
========================================================

--------------------------------------------------------
📌 GLOBAL EXECUTION CONTEXT (GEC)
--------------------------------------------------------

┌───────────────────────────────┐
│ Global Execution Context      │
├───────────────────────────────┤
│ Memory Creation Phase         │
│ Execution Phase               │
└───────────────────────────────┘

--------------------------------------------------------
📌 CALL STACK FLOW
--------------------------------------------------------

Program start:

┌───────────────────────────────┐
│ Global Execution Context      │
└───────────────────────────────┘

Calling b():

┌───────────────────────────────┐
│ b() Execution Context         │ ← pushed
├───────────────────────────────┤
│ Global Execution Context      │
└───────────────────────────────┘

After b() finishes:

┌───────────────────────────────┐
│ Global Execution Context      │ ← popped
└───────────────────────────────┘

--------------------------------------------------------
📌 GLOBAL OBJECT RELATIONSHIP
--------------------------------------------------------

window === this  → true (in browser global scope)

┌───────────────────────────────┐
│ window (Global Object)        │
├───────────────────────────────┤
│ a : 10                        │
│ b : function b() {...}        │
│ this → window                 │
└───────────────────────────────┘

--------------------------------------------------------
🎯 KEY TAKEAWAYS (INTERVIEW GOLD)
--------------------------------------------------------

✔ Global Execution Context is created first
✔ Browser creates `window` object
✔ `var` declarations attach to window
✔ Function declarations attach to window
✔ `this === window` in global scope (browser)
✔ Functions create their own execution context
✔ If no return → function returns undefined

========================================================
*/
