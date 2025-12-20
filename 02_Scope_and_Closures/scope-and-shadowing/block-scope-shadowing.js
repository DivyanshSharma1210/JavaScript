/******************************************************************************************
 * TOPIC: Block Scope, Shadowing & Illegal Shadowing in JavaScript
 *
 * This file explains:
 * 1. What blocks are
 * 2. Difference between var, let, and const scoping
 * 3. Shadowing behavior
 * 4. Illegal shadowing
 * 5. Scope types in JavaScript
 *
 * All explanations are written INSIDE the CODE as comments with examples.
 ******************************************************************************************/

// let and const are BLOCK SCOPED
// var is FUNCTION / GLOBAL SCOPED

/*
------------------------------------------------------------------------------------------
WHAT IS A BLOCK?
------------------------------------------------------------------------------------------

A block is defined using curly braces { }

{
   // This is a block (also called a Compound Statement)
}

Why do we need blocks?
→ JavaScript sometimes expects only ONE statement.
→ Blocks allow us to group MULTIPLE statements and treat them as ONE.

Block Scope means:
→ Which variables/functions are accessible INSIDE a block.
*/

// ---------------------------------------------------------------------------------------
// BLOCK SCOPE DEMONSTRATION
// ---------------------------------------------------------------------------------------

{
    var a = 10;     // var → NOT block scoped
    let b = 20;     // let → block scoped
    const c = 30;   // const → block scoped

    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30
}

// Outside the block
console.log(a);    // ✅ 10 (var leaks outside the block)

// console.log(b); // ❌ ReferenceError: b is not defined
// console.log(c); // ❌ ReferenceError: c is not defined

/*
OBSERVATION:
→ `a` is accessible outside because `var` ignores block scope.
→ `b` and `c` are NOT accessible because `let` and `const` are block scoped.

If you use debugger:
→ `a` is in GLOBAL scope
→ `b` and `c` exist only inside the BLOCK
*/

// ---------------------------------------------------------------------------------------
// SHADOWING IN JAVASCRIPT
// ---------------------------------------------------------------------------------------

/*
Shadowing means:
→ Declaring a variable with the SAME NAME in a nested scope.

The inner variable "shadows" (hides) the outer variable.
*/

var a = 100;

{
    var a = 10;   // Shadows and OVERWRITES global `a`
    let b = 20;
    const c = 30;

    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30
}

console.log(a); // 10 ❗ NOT 100

/*
IMPORTANT:
→ `var` does NOT respect block boundaries.
→ Inner `var a` modifies the SAME global `a`.

This is why `var` is considered unsafe and discouraged.
*/

// ---------------------------------------------------------------------------------------
// SHADOWING WITH let (SAFE SHADOWING)
// ---------------------------------------------------------------------------------------

let b = 100;

{
    let b = 200;   // Different variable (BLOCK scoped)
    console.log(b); // 200
}

console.log(b); // 100

/*
WHY?
→ Outer `b` → SCRIPT scope
→ Inner `b` → BLOCK scope

They are TWO DIFFERENT VARIABLES.
*/

// ---------------------------------------------------------------------------------------
// TYPES OF SCOPES IN JAVASCRIPT
// ---------------------------------------------------------------------------------------

/*
1. Global Scope  → variables declared outside everything
2. Script Scope  → variables declared with let/const in a JS file
3. Block Scope   → variables inside { }
4. Function Scope→ variables inside functions
*/

// ---------------------------------------------------------------------------------------
// FUNCTION SCOPE SHADOWING
// ---------------------------------------------------------------------------------------

var c = 100;

function x() {
    var c = 30;   // Shadows outer `c`
    console.log(c); // 30
}

x();
console.log(c); // 100

/*
Here:
→ Function creates its OWN scope
→ Inner `c` does NOT affect outer `c`
*/

// ---------------------------------------------------------------------------------------
// ILLEGAL SHADOWING
// ---------------------------------------------------------------------------------------

/*
Illegal Shadowing happens when:
→ You try to shadow a `let` variable using `var`
*/

// VALID
var a = 20;
{
    var a = 30; // ✅ Allowed (but unsafe)
}

// INVALID
let x1 = 50;
{
    // var x1 = 60; // ❌ SyntaxError: Illegal shadowing
}

/*
RULES:
✔ let  → can be shadowed by let
✔ const → can be shadowed by const
❌ let  → CANNOT be shadowed by var
*/

// ---------------------------------------------------------------------------------------
// SHADOWING WITH const (NESTED BLOCKS)
// ---------------------------------------------------------------------------------------

const z = 20;

{
    const z = 100;
    {
        const z = 200;
        console.log(z); // 200
    }
    console.log(z); // 100
}

console.log(z); // 20

/*
Each block creates a NEW scope.
Variables with same name live independently.
*/

// ---------------------------------------------------------------------------------------
// ARROW FUNCTIONS
// ---------------------------------------------------------------------------------------

/*
All the scope rules that apply to NORMAL functions
also apply to ARROW functions.
*/

// Example:
const arrow = () => {
    let msg = "Hello from arrow function";
    console.log(msg);
};

arrow();

/******************************************************************************************
 * SUMMARY
 *
 * var   → function/global scoped, unsafe, causes bugs
 * let   → block scoped, safe
 * const → block scoped, immutable reference
 *
 * Prefer:
 * ✅ let & const
 * ❌ var
 ******************************************************************************************/
