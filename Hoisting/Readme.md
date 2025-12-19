# 🚀 JavaScript Hoisting – Deep Dive with Examples

This repository explains **JavaScript Hoisting** in a **clear, visual, and interview‑ready way** using real code examples.

It focuses on **how JavaScript executes code internally** using:

* Global Execution Context (GEC)
* Memory Creation Phase (Hoisting)
* Execution Phase
* Call Stack behavior

Perfect for:

* 📘 Learning JavaScript internals
* 🧑‍💻 Interview preparation
* 📂 GitHub notes / portfolio
* ✍️ Teaching & content creation

---

## 📌 What is Hoisting?

**Hoisting** is JavaScript’s default behavior of **moving declarations to the top of the scope during the Memory Creation Phase**.

⚠️ Important:

* Only **declarations** are hoisted
* **Initializations are NOT hoisted**

---

## 🧠 JavaScript Execution Model

When a JS program runs, the engine creates a **Global Execution Context (GEC)**.

### Global Execution Context has 2 phases:

### 1️⃣ Memory Creation Phase (Hoisting Phase)

* Memory is allocated for variables & functions
* No code is executed

### 2️⃣ Execution Phase

* Code runs line‑by‑line
* Values are assigned
* Functions are executed

---

## 📊 Global Execution Context (Visual)

```
┌─────────────────────────────────────┐
│ Global Execution Context (GEC)       │
├─────────────────────────────────────┤
│ 1️⃣ Memory Creation Phase            │
│ 2️⃣ Execution Phase                  │
└─────────────────────────────────────┘
```

---

## 📦 Memory Creation Phase (Hoisting)

Example code:

```js
var x = 7;
function getName() { console.log("Dibyansh Sharma"); }
```

Memory allocation:

```
┌───────────────────────────┐
│ MEMORY (GLOBAL)           │
├───────────────────────────┤
│ x        → undefined      │
│ getName  → ƒ () {...}     │
└───────────────────────────┘
```

✔ `var` → hoisted as `undefined`
✔ function declaration → hoisted with full body

---

## ▶️ Execution Phase

Now JavaScript executes the code line by line:

```js
var x = 7;      // x becomes 7
getName();      // function executes
console.log(x);// prints 7
```

Updated memory:

```
┌───────────────────────────┐
│ MEMORY (GLOBAL)           │
├───────────────────────────┤
│ x        → 7              │
│ getName  → ƒ () {...}     │
└───────────────────────────┘
```

---

## 🧱 Call Stack (How Functions Run)

JavaScript uses a **Call Stack (LIFO)** to manage execution contexts.

### When program starts:

```
┌───────────────────────────┐
│ Global Execution Context  │
└───────────────────────────┘
```

### When a function is called:

```
┌───────────────────────────┐
│ getName() EC              │ ← pushed
├───────────────────────────┤
│ Global Execution Context  │
└───────────────────────────┘
```

### After function finishes:

```
┌───────────────────────────┐
│ Global Execution Context  │ ← popped
└───────────────────────────┘
```

---

## ⚠️ Function vs Function Call

```js
console.log(getName);   // function reference
console.log(getName()); // function execution
```

| Expression  | Meaning                   |
| ----------- | ------------------------- |
| `getName`   | Refers to function object |
| `getName()` | Executes the function     |

---

## 🚨 Arrow Function Hoisting (Very Important)

```js
console.log(getName()); // ❌ TypeError

var getName = () => {
  console.log("Dibyansh Sharma");
};
```

### Memory Phase:

```
getName → undefined
```

### Execution Phase:

* JavaScript tries to execute `undefined()`
* ❌ `TypeError: getName is not a function`

📌 Arrow functions behave like variables, **not like function declarations**.

---

## 🧾 Hoisting Summary Table

| Declaration Type     | Hoisted As         |
| -------------------- | ------------------ |
| `var`                | `undefined`        |
| Function Declaration | Full function body |
| Function Expression  | `undefined`        |
| Arrow Function       | `undefined`        |
| `let` / `const`      | Temporal Dead Zone |

---

## ❌ Errors Explained

| Error          | Reason                     |
| -------------- | -------------------------- |
| ReferenceError | Variable not declared      |
| TypeError      | Trying to call `undefined` |

---

## 🎯 Interview One‑Liners

> **“Hoisting happens during the memory creation phase where variables are initialized with `undefined` and function declarations are stored completely before execution begins.”**

> **“Arrow functions are not hoisted like normal functions because they behave like variables.”**

---

## 📂 Files in This Repository

* `js-hoisting-examples-explained.js` → All examples with inline explanations & diagrams
* `README.md` → Conceptual explanation with visuals

---

## ⭐ If You Found This Helpful

* Star ⭐ the repository
* Share it with friends
* Use it for revision & interviews

Happy Learning! 🚀

---

## 🧪 JavaScript Hoisting – All Examples Explained (With Output)

Below are **real hoisting examples** embedded directly into this README, along with **memory creation phase, execution behavior, and outputs**.

---

### 🔹 Example 1 – Normal Order (No Surprise)

```js
var x = 7;

function getName() {
  console.log("Dibyansh Sharma");
}

getName();
console.log(x);
```

**Memory Creation Phase**

```
x       → undefined
getName → function definition
```

**Execution Phase**

* `x` gets value `7`
* `getName()` executes
* `console.log(x)` prints `7`

✅ **Output**

```
Dibyansh Sharma
7
```

---

### 🔹 Example 2 – Access Before Initialization

```js
getName();
console.log(x);

var x = 7;

function getName() {
  console.log("Dibyansh Sharma");
}
```

**Why it works?**

* Function is fully hoisted
* `var x` exists but is `undefined`

✅ **Output**

```
Dibyansh Sharma
undefined
```

---

### 🔹 Example 3 – Undeclared Variable

```js
getName();
console.log(x);

function getName() {
  console.log("Dibyansh Sharma");
}
```

❌ `x` was never declared → **ReferenceError**

⛔ Program stops immediately after error.

---

### 🔹 Example 4 – Logging Function Reference

```js
var x = 7;

function getName() {
  console.log("Dibyansh Sharma");
}

console.log(getName);
```

📌 `getName` (without `()`) refers to the function object itself.

✅ **Output**

```
ƒ getName() { ... }
```

---

### 🔹 Example 5 – Function Hoisting Proof

```js
console.log(getName);

var x = 7;

function getName() {
  console.log("Dibyansh Sharma");
}
```

✔ Function declarations are hoisted completely.

---

### 🔹 Example 6 – Function Call vs Reference

```js
var x = 7;

function getName() {
  console.log("Dibyansh Sharma");
}

console.log(getName());
console.log(x);
console.log(getName);
```

🧠 `getName()` executes function and returns `undefined`.

✅ **Output**

```
Dibyansh Sharma
undefined
7
ƒ getName() { ... }
```

---

### 🔹 Example 7 – Hoisting in Action

```js
console.log(getName());
console.log(x);
console.log(getName);

var x = 7;

function getName() {
  console.log("Dibyansh Sharma");
}
```

✔ Function is available
✔ `var x` exists but is `undefined`

---

### 🔹 Example 8 – Arrow Function Hoisting ⚠️

```js
console.log(getName());

var x = 7;

var getName = () => {
  console.log("Dibyansh Sharma");
};
```

❌ Arrow functions behave like variables.

**Memory Phase**

```
getName → undefined
```

Calling `undefined()` causes:

🚫 **TypeError: getName is not a function**

---

## 📊 Execution Context & Call Stack (Visual Recap)

```
Global Execution Context
├─ Memory Creation Phase
│  ├─ var → undefined
│  └─ function → full body
└─ Execution Phase
```

Call Stack follows **LIFO**:

```
Global EC
  ↑
Function EC (push → pop)
```

---

## 🎯 Final Takeaways

✔ Function declarations are fully hoisted
✔ `var` is hoisted as `undefined`
✔ Arrow functions are NOT hoisted like functions
✔ ReferenceError ≠ TypeError

---

> **Interview One-Liner:**
> *Hoisting happens during the memory creation phase where variables get `undefined` and function declarations
