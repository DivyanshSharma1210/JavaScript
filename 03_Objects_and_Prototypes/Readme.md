# 🧬 JavaScript Prototypes & Inheritance – Complete Guide

This README explains **JavaScript Prototypes, Prototype Chain, Inheritance, and Prototype Extension** using the given code.

It is written in a **beginner‑friendly + interview‑ready** manner with:

* Clear definitions
* Step‑by‑step explanations
* Diagrams
* Real code examples
* Common pitfalls

---

## 📌 Table of Contents

1. What is a Prototype in JavaScript?
2. Arrays & Objects – Base Setup
3. Understanding `this` Keyword
4. Object Prototype (`Object.prototype`)
5. Array Prototype (`Array.prototype`)
6. Prototype Chain Explained
7. Prototype-based Inheritance
8. `__proto__` vs `Object.setPrototypeOf`
9. Extending Built-in Prototypes (String example)
10. Internal Prototype Chain Diagrams
11. Common Mistakes
12. Interview One‑Liners

---

## 🧠 1. What is a Prototype in JavaScript?

In JavaScript, **every object has a hidden internal property called `[[Prototype]]`**.

This prototype allows objects to **inherit properties and methods** from another object.

👉 JavaScript uses **prototype-based inheritance**, not classical inheritance.

---

## 📦 2. Arrays & Objects – Base Setup

```js
let myHeros = ["thor", "spiderMan"];
let dcHeros = ["batman", "flash", "superman"];
```

Arrays are **special objects**, meaning:

* They inherit from `Array.prototype`
* `Array.prototype` itself inherits from `Object.prototype`

---

## 🎯 3. Understanding `this` Keyword

```js
let heroPower = {
  thor: "hammer",
  spiderMan: "sling",

  getSpiderManPower: function () {
    console.log(`spiderMan Power is ${this.spiderMan}`);
  }
};
```

📌 Here:

* `this` refers to the **current object (`heroPower`)**
* It allows access to object properties

---

## 🌍 4. Object Prototype (`Object.prototype`)

```js
Object.prototype.dibyansh = function () {
  console.log("Dibyansh is present in all Objects...");
};
```

### 🔹 What does this mean?

* The method is added to **Object.prototype**
* Every object in JavaScript inherits from it

```js
myHeros.dibyansh();   // works (array → object)
heroPower.dibyansh(); // works (object)
```

⚠️ This affects **ALL objects globally**.

---

## 🧺 5. Array Prototype (`Array.prototype`)

```js
Array.prototype.heyDibyansh = function () {
  console.log("Dibyansh says Hii...");
};
```

### Behavior:

* Only arrays can access this method

```js
myHeros.heyDibyansh(); // works
heroPower.heyDibyansh(); // ❌ error
```

---

## 🔗 6. Prototype Chain Explained

When JavaScript looks for a property:

1. It checks the object itself
2. Then its prototype
3. Then prototype’s prototype
4. Stops at `null`

---

## 🧬 7. Prototype-based Inheritance

```js
const user = { name: "top name", email: "top@gmail.com" };
const teacher = { makeVideos: true };
```

Linking objects:

```js
teacher.__proto__ = user;
```

Now:

* `teacher` can access `user` properties

```js
teacher.name;
teacher.email;
```

---

## ⚙️ 8. `__proto__` vs `Object.setPrototypeOf`

```js
Object.setPrototypeOf(teachingSupport, teacher);
```

✅ **Recommended approach**
❌ `__proto__` is deprecated (avoid in production)

---

## 🧵 9. Extending Built‑in Prototypes (String Example)

```js
String.prototype.trueLength = function () {
  return `True length is ${this.trim().length}`;
};
```

Usage:

```js
let str = "   Dibyansh Sharma   ";
str.trueLength();
```

📌 `this` refers to the **String object**.

---

## 🧩 10. Internal Prototype Chain Diagrams

```
Array instance
   ↓
Array.prototype
   ↓
Object.prototype
   ↓
null
```

```
teachingAssistant
   ↓
teachingSupport
   ↓
teacher
   ↓
user
   ↓
Object.prototype
   ↓
null
```

---

## ⚠️ 11. Common Mistakes

❌ Modifying `Object.prototype` carelessly
❌ Overusing prototype extension
❌ Using `__proto__` in production

✔ Prefer composition or classes for large systems

---

## 🎯 12. Interview One‑Liners

> **JavaScript uses prototype‑based inheritance where objects inherit properties via the prototype chain.**

> **Arrays and functions are objects and ultimately inherit from Object.prototype.**

> **`Object.setPrototypeOf` is the modern way to set prototypes.**

---

## ⭐ Final Notes

✔ Understand prototype chain for debugging
✔ Avoid polluting global prototypes
✔ Prototype knowledge is key for interviews

Happy Learning 🚀
