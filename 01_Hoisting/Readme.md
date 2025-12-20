# 🚀 JavaScript Scope, Hoisting & TDZ – Complete Guide

A **deep‑dive, interview‑ready guide** that explains how JavaScript executes code internally using **real examples, diagrams, and edge cases**.

This README is built directly from the following learning files:

* `Hoisting.js`
* `js-undefined-vs-not-defined-explained.js`
* `let-const-var-hoisting-and-tdz-explained.js`

Perfect for:

* 📘 JavaScript fundamentals & internals
* 🧑‍💻 Interview preparation
* 📂 GitHub learning repository
* ✍️ Teaching & LinkedIn content

---

## 📌 Table of Contents

1. What is JavaScript Execution Context?
2. Global Execution Context (GEC)
3. Hoisting Explained
4. `undefined` vs `not defined`
5. `var`, `let`, `const` – Hoisting Behavior
6. Temporal Dead Zone (TDZ)
7. Shadowing & Illegal Shadowing
8. Call Stack Explained
9. Common Errors (Syntax / Reference / Type)
10. Interview One‑Liners

---

## 🧠 1. JavaScript Execution Context

When a JavaScript program runs, the JS engine creates an **Execution Context**.

There are three types:

* **Global Execution Context**
* **Function Execution Context**
* **Eval Execution Context** (rare)

---

## 🌍 2. Global Execution Context (GEC)

The **Global Execution Context** is created when the program starts.

It has **two phases**:

### 1️⃣ Memory Creation Phase (Hoisting Phase)

* Memory is allocated for variables & functions
* No code is executed

### 2️⃣ Execution Phase

* Code runs line‑by‑line
* Values are assigned
* Functions are invoked

### 📊 GEC Visual

```
┌─────────────────────────────────────┐
│ Global Execution Context (GEC)       │
├─────────────────────────────────────┤
│ 1️⃣ Memory Creation Phase            │
│ 2️⃣ Execution Phase                  │
└─────────────────────────────────────┘
```

---

## ⬆️ 3. Hoisting Explained

**Hoisting** is JavaScript’s behavior of allocating memory to declarations **before execution**.

⚠️ Important:

* Only **declarations** are hoisted
* **Initializations are NOT hoisted**

### Example

```js
console.log(x);
var x = 7;
```

**Memory Phase**

```
x → undefined
```

**Execution Phase**

```
x = 7
```

✅ Output:

```
undefined
```

---

## ❓ 4. `undefined` vs `not defined`

### `undefined`

* Variable is **declared**
* Memory is allocated
* Value not assigned yet

```js
console.log(a);
var a = 10;
```

✅ Output:

```
undefined
```

---

### `not defined`

* Variable is **never declared**
* No memory allocation

```js
console.log(x);
```

❌ Output:

```
ReferenceError: x is not defined
```

### Visual Difference

```
undefined        not defined
──────────       ───────────
Declared ✔       Declared ❌
Memory ✔         Memory ❌
Value ❌          Error 💥
```

---

## 🧱 5. `var`, `let`, `const` – Hoisting Behavior

### Memory Allocation Comparison

```
┌────────┬───────────────┬───────────────┬──────────────┐
│ Type   │ Hoisted       │ TDZ           │ window obj   │
├────────┼───────────────┼───────────────┼──────────────┤
│ var    │ Yes           │ No            │ Yes          │
│ let    │ Yes           │ Yes           │ No           │
│ const  │ Yes           │ Yes (strict)  │ No           │
└────────┴───────────────┴───────────────┴──────────────┘
```

### Example

```js
console.log(b);
// undefined

console.log(a);
// ReferenceError (TDZ)

let a = 10;
var b = 20;
```

---

## ⏳ 6. Temporal Dead Zone (TDZ)

The **Temporal Dead Zone** is the time between:

* Variable being hoisted
* Variable being initialized

During TDZ:

* Accessing `let` or `const` throws **ReferenceError**

### TDZ Timeline

```
Hoisting ────── TDZ ────── Initialization
           ❌ Access        ✅ Access
```

---

## 👤 7. Shadowing & Illegal Shadowing

### Shadowing

```js
let x = 100;
{
  let x = 20;
  console.log(x); // 20
}
console.log(x); // 100
```

✔ Inner variable shadows outer variable safely.

---

### Illegal Shadowing

```js
let a = 10;
{
  var a = 20; // ❌ Illegal shadowing
}
```

🚫 You **cannot** shadow `let` with `var`.

✔ Allowed:

* let → let
* const → const

---

## 📚 8. Call Stack Explained

JavaScript uses a **Call Stack (LIFO)** to manage execution contexts.

### Example

```
Global EC
└─ getName() EC (pushed)
└─ getName() EC (popped)
```

### Arrow Function Gotcha

```js
console.log(getName());

var getName = () => {
  console.log("Hello");
};
```

❌ Output:

```
TypeError: getName is not a function
```

Reason:

* Arrow functions behave like variables
* Hoisted as `undefined`

---

## 🚨 9. Common Error Types

| Error Type     | Reason                      |
| -------------- | --------------------------- |
| SyntaxError    | Code parsing issue          |
| ReferenceError | Variable inaccessible / TDZ |
| TypeError      | Invalid operation on type   |

---

## 🎯 10. Interview One‑Liners

> **Hoisting happens during the memory creation phase where variables are initialized with `undefined` and function declarations are stored fully before execution.**

> **`undefined` means memory exists but no value; `not defined` means no declaration at all.**

> **`let` and `const` are hoisted but inaccessible due to the Temporal Dead Zone.**

---

## ⭐ Final Notes

✔ Avoid `var` in modern JavaScript
✔ Prefer `let` & `const`
✔ Understand execution context for debugging

Happy Learning 🚀
