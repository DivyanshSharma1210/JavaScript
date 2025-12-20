# 🗺️ JavaScript Map – Complete Guide with Examples

This README provides a **deep, beginner‑to‑intermediate level explanation** of the **JavaScript `Map` object**, using the given code as the core reference.

It covers:

* Definitions
* Why Maps exist
* Methods
* Diagrams
* Real examples
* Differences from Objects
* Interview notes

---

## 📌 Table of Contents

1. What is a Map in JavaScript?
2. Why Do We Need Map?
3. Creating a Map
4. Adding Data to a Map (`set`)
5. Accessing Data (`get`)
6. Checking Keys (`has`)
7. Map Properties (`size`)
8. Iterators in Map (`keys`, `values`, `entries`)
9. Deleting Data (`delete`)
10. Clearing a Map (`clear`)
11. Internal Working (Diagram)
12. Map vs Object
13. Common Mistakes
14. Interview One‑Liners

---

## 🧠 1. What is a Map in JavaScript?

A **Map** is a built‑in JavaScript object that stores data in **key–value pairs**, where:

* Keys can be **any data type** (string, number, object, function, etc.)
* The **insertion order is preserved**

```js
const myMap = new Map();
```

---

## 🤔 2. Why Do We Need Map?

Before Maps, developers used **objects** for key–value storage. However, objects have limitations:

❌ Keys are converted to strings
❌ No direct size property
❌ Not optimized for frequent additions/removals

Maps solve these problems by providing:

✅ Any data type as key
✅ Ordered entries
✅ Built‑in iteration support
✅ Better performance for dynamic data

---

## 🆕 3. Creating a Map

```js
const myMap = new Map();
```

This creates an **empty Map**.

---

## ➕ 4. Adding Data to a Map (`set`)

The `set(key, value)` method adds or updates entries.

```js
myMap.set("firstName", "Dibyansh");
myMap.set("lastName", "Sharma");
myMap.set("age", 22);
myMap.set("role", "Full Stack Developer");
```

📌 If the key already exists, its value is updated.

---

## 📥 5. Accessing Data (`get`)

The `get(key)` method retrieves the value for a given key.

```js
myMap.get("firstName"); // Dibyansh
myMap.get("age");       // 22
```

❗ If the key does not exist, `undefined` is returned.

---

## 🔍 6. Checking Keys (`has`)

The `has(key)` method checks if a key exists.

```js
myMap.has("age");   // true
myMap.has("title"); // false
```

Returns a **boolean value**.

---

## 📏 7. Map Property – `size`

Unlike objects, Maps provide a built‑in `size` property.

```js
myMap.size; // 4
```

No need for manual counting.

---

## 🔁 8. Iterators in Map

Maps are **iterable** and provide special iterator methods.

### 🔑 `keys()` – Returns all keys

```js
myMap.keys();
```

### 📦 `values()` – Returns all values

```js
myMap.values();
```

### 🧩 `entries()` – Returns [key, value] pairs

```js
myMap.entries();
```

These return **iterators**, commonly used with `for...of`.

```js
for (let [key, value] of myMap) {
  console.log(key, value);
}
```

---

## ❌ 9. Deleting Data (`delete`)

The `delete(key)` method removes a specific entry.

```js
myMap.delete("age"); // true
```

Returns:

* `true` → key existed and was deleted
* `false` → key not found

---

## 🧹 10. Clearing a Map (`clear`)

The `clear()` method removes **all entries**.

```js
myMap.clear();
myMap.size; // 0
```

---

## 🧩 11. Internal Working (Diagram)

```
Map Structure

┌───────────────┐
│  "firstName" │ → "Dibyansh"
│  "lastName"  │ → "Sharma"
│  "age"       │ → 22
│  "role"      │ → "Full Stack Developer"
└───────────────┘
```

Insertion order is preserved.

---

## 🆚 12. Map vs Object

| Feature     | Map                         | Object         |
| ----------- | --------------------------- | -------------- |
| Key Types   | Any                         | String/Symbol  |
| Order       | Preserved                   | Not guaranteed |
| Size        | `size` property             | Manual         |
| Iteration   | Easy                        | Less intuitive |
| Performance | Better for frequent updates | Slower         |

---

## ⚠️ 13. Common Mistakes

❌ Using dot notation with Map

```js
myMap.firstName; // undefined
```

✅ Correct way

```js
myMap.get("firstName");
```

---

## 🎯 14. Interview One‑Liners

> **A Map is a collection of key–value pairs where keys can be of any type and insertion order is preserved.**

> **Maps are preferred over objects when frequent additions, deletions, and iterations are required.**

---

## 🧺 15. JavaScript Set – Embedded Guide

Along with `Map`, JavaScript also provides a **`Set`**, which is used to store **unique values only**.

---

## 🧠 What is a Set?

A **Set** is a built-in JavaScript collection that:

* Stores **only unique values**
* Automatically ignores duplicates
* Can store **any data type** (primitive or reference)

```js
const setA = new Set();
```

---

## ➕ Adding Values to a Set (`add`)

```js
setA.add(1);
setA.add(2);
setA.add(3);
setA.add("Dibyansh Sharma");
```

📌 If the value already exists, it will **not be added again**.

---

## 🧩 Storing Objects in a Set

```js
const employeeDetails = {
  firstName: "Dibyansh",
  lastName: "Sharma",
  age: 22,
  role: "Software Developer"
};

setA.add(employeeDetails);
```

🔑 Objects are stored by **reference**, so each object is considered unique.

---

## 🔍 Checking Values (`has`)

```js
setA.has(1);                 // true
setA.has(5);                 // false
setA.has("Dibyansh Sharma"); // true
```

Returns a boolean value.

---

## 📏 Set Size (`size`)

```js
setA.size; // Total elements in Set
```

---

## ❌ Removing Values (`delete`)

```js
setA.delete(3); // true
```

Returns:

* `true` if value existed
* `false` otherwise

---

## 🧹 Clearing a Set (`clear`)

```js
setA.clear();
```

Removes all values from the Set.

---

## 🔁 Iterators in Set

```js
setA.keys();    // same as values()
setA.values(); // iterator of values
setA.entries(); // [value, value]
```

📌 `entries()` exists to maintain consistency with `Map`.

---

## 🧩 Internal Structure (Set Diagram)

```
Set Structure

┌───────────────┐
│ 1             │
│ 2             │
│ 4             │
│ "Dibyansh"    │
│ {object}      │
└───────────────┘
```

---

## 🆚 Map vs Set

| Feature           | Map             | Set                |
| ----------------- | --------------- | ------------------ |
| Stores            | Key–Value pairs | Unique values      |
| Duplicate allowed | Keys ❌          | Values ❌           |
| Access            | get(key)        | has(value)         |
| Use case          | Dictionaries    | Unique collections |

---

## ⚠️ Common Mistakes with Set

❌ Expecting duplicate values

```js
setA.add(1);
setA.add(1); // ignored
```

❌ Comparing objects by value

```js
setA.has({}); // false (different reference)
```

---

## 🎯 Set Interview One-Liners

> **A Set stores unique values and automatically removes duplicates.**

> **Objects inside a Set are compared by reference, not by value.**

---

## ⭐ Final Notes

✔ Use `Set` for uniqueness (IDs, tags, visited nodes)
✔ Use `Map` for key–value relationships
✔ Both are iterable and more powerful than plain objects

Happy Coding 🚀
