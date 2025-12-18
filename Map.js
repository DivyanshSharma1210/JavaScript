// Creating a new empty Map
// A Map stores data in key–value pairs
const myMap = new Map();

// Adding key–value pairs to the Map
// Keys can be of any data type (string, number, object, etc.)
myMap.set("firstName", "Dibyansh");
myMap.set("lastName", "Sharma");
myMap.set("age", 22);
myMap.set("role", "Full Stack Developer");

// Printing the entire Map
console.log(myMap);

// Returns an iterator containing all the keys of the Map
console.log(myMap.keys());

// Returns an iterator containing all the values of the Map
console.log(myMap.values());

// Returns the total number of key–value pairs in the Map
console.log(myMap.size);

// Returns an iterator of [key, value] pairs
console.log(myMap.entries());

// Accessing values using keys
console.log(myMap.get("firstName"));  // Dibyansh
console.log(myMap.get("lastName"));   // Sharma
console.log(myMap.get("age"));        // 22
console.log(myMap.get("role"));       // Full Stack Developer

// Checking whether specific keys exist in the Map
console.log(myMap.has("age"));    // true
console.log(myMap.has("role"));   // true
console.log(myMap.has("title"));  // false (key does not exist)

// Printing Map before deletion
console.log(myMap);

// Deleting a key–value pair from the Map
console.log(myMap.delete("age")); // true → key was successfully removed

// Printing Map after deletion
console.log(myMap);

// Removing all key–value pairs from the Map
myMap.clear();

// Printing Map after clearing (will be empty)
console.log(myMap);

// Size of Map after clear()
console.log(myMap.size);          // 0
