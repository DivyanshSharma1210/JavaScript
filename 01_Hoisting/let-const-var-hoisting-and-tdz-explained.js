/*
========================================================
 JAVASCRIPT: let, const & var — HOISTING + TDZ (IN DEPTH)
========================================================

📌 THIS FILE EXPLAINS (WITH DIAGRAMS INSIDE CODE):
- How `var`, `let`, and `const` are hoisted
- What the Temporal Dead Zone (TDZ) is
- Why `let/const` throw ReferenceError before initialization
- Why `var` behaves differently
- Re-declaration & reassignment rules
- SyntaxError vs ReferenceError vs TypeError

⚠️ Assumes Browser Environment (window object)
========================================================
*/

/* ========================================================
   🧠 GLOBAL EXECUTION CONTEXT (GEC) CREATION
========================================================

WHEN?
→ As soon as this JS file starts executing

GEC has TWO PHASES:
1️⃣ Memory Creation Phase (Hoisting)
2️⃣ Execution Phase

--------------------------------------------------------
📦 MEMORY CREATION PHASE (HOISTING PHASE)
--------------------------------------------------------

JavaScript scans the entire code and allocates memory:

┌──────────────────────────────────────┐
│ GLOBAL MEMORY (GEC)                   │
├──────────────────────────────────────┤
│ a (let)   → <uninitialized> (TDZ)    │
│ b (var)   → undefined                │
│ c (const) → <uninitialized> (TDZ)    │
│ this      → window                   │
└──────────────────────────────────────┘

IMPORTANT:
✔ `var` → initialized with undefined
✔ `let/const` → hoisted BUT kept in TDZ
✔ TDZ = memory exists but access is forbidden

========================================================
*/

// ============================
// 🔹 CODE EXECUTION STARTS
// ============================

console.log(b);
// OUTPUT: undefined
// WHY?
// - `b` is declared using var
// - var is hoisted & initialized with undefined
// - b is attached to window object

// console.log(a);
// ❌ ReferenceError: Cannot access 'a' before initialization
// WHY?
// - `a` is hoisted using let
// - a is in Temporal Dead Zone (TDZ)
// - Access before initialization is illegal

let a = 10;
// TDZ for `a` ends here
// a is now initialized with value 10

console.log(a);
// OUTPUT: 10

var b = 100;
// During execution phase:
// b was already undefined
// now b = 100
// window.b = 100

// console.log(x);
// ❌ ReferenceError: x is not defined
// WHY?
// - x was never declared
// - no memory allocated

/* ========================================================
   🧠 TEMPORAL DEAD ZONE (TDZ) — VISUAL
======================================================== */

/*
Timeline for `let a`:

┌───────────────┬─────────────────────────────┬──────────┐
│ Hoisting      │  Temporal Dead Zone (TDZ)    │ Init     │
│ (Memory)      │  (Access ❌)                 │ (OK)     │
└───────────────┴─────────────────────────────┴──────────┘
                ↑                             ↑
         Access throws ReferenceError      a = 10
*/

/* ========================================================
   🌐 window OBJECT RELATIONSHIP
======================================================== */

/*
window.b → 100   ✅ (var attaches to window)
window.a → ❌ undefined (let NOT attached)
window.c → ❌ undefined (const NOT attached)
*/

/* ========================================================
   🔁 RE-DECLARATION RULES
======================================================== */

/*
❌ INVALID (SyntaxError):

let a = 10;
let a = 100;

WHY?
- let does NOT allow re-declaration in same scope
*/

/*
✅ VALID (var allows re-declaration):

var a = 10;
var a = 100;
*/

/* ========================================================
   🔒 const BEHAVIOR (MORE STRICT)
======================================================== */

const c = 1000;
// const is hoisted and placed in TDZ
// MUST be initialized at declaration

/*
❌ INVALID:

const x;

SyntaxError: Missing initializer in const declaration
*/

/*
❌ INVALID:

const y = 10;
y = 20;

TypeError: Assignment to constant variable
*/

/* ========================================================
   🧠 ERROR TYPES — VERY IMPORTANT
======================================================== */

/*
1️⃣ SyntaxError
   - Error while parsing code
   - Program does NOT run
   - Example:
     let a = 10;
     let a = 20;

2️⃣ ReferenceError
   - Variable exists in memory but cannot be accessed
   - Example:
     console.log(a); // TDZ

3️⃣ TypeError
   - Operation performed on wrong type
   - Example:
     const x = 10;
     x = 20;
*/

/* ========================================================
   📊 HOISTING COMPARISON TABLE
======================================================== */

/*
┌────────┬───────────────┬───────────────┬──────────────┐
│ Type   │ Hoisted       │ TDZ           │ window obj   │
├────────┼───────────────┼───────────────┼──────────────┤
│ var    │ Yes           │ No            │ Yes          │
│ let    │ Yes           │ Yes           │ No           │
│ const  │ Yes           │ Yes (strict)  │ No           │
└────────┴───────────────┴───────────────┴──────────────┘
*/

/* ========================================================
   🎯 FINAL INTERVIEW ONE-LINER
======================================================== */

/*
`let` and `const` are hoisted but kept in the Temporal Dead
Zone, so accessing them before initialization throws a
ReferenceError, unlike `var` which is initialized with
undefined and attached to the window object.
*/
