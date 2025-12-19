// Creating a new empty Set
// A Set stores only UNIQUE values (duplicates are automatically ignored)
const setA = new Set();

// Adding primitive values to the Set
setA.add(1);                    // Adds number 1
setA.add(2);                    // Adds number 2
setA.add(3);                    // Adds number 3
setA.add("Dibyansh Sharma");     // Adds a string value

// Creating an object to store employee details
const employeeDetails = {
    firstName : "Dibyansh",
    lastName  : "Sharma",
    age       : 22,
    role      : "Software Developer"
};

// Adding an object to the Set
// Objects are stored by reference, so each object is treated as unique
setA.add(employeeDetails);

// Checking whether specific values exist in the Set
console.log(setA.has(1));                 // true → 1 exists in the Set
console.log(setA.has(5));                 // false → 5 does not exist
console.log(setA.has("Dibyansh Sharma")); // true → string exists in the Set

// Getting the total number of elements present in the Set
console.log(setA.size);                   // Size of the Set

// Removing a specific value from the Set
console.log(setA.delete(3));              // true → 3 was successfully deleted

// Adding a new value after deletion
setA.add(4);

// Printing the current state of the Set
console.log(setA);

// Returns an iterator containing all the values of the Set
// In Set, keys and values are the same
console.log(setA.keys());

// Returns an iterator of values present in the Set
console.log(setA.values());

// Returns an iterator of [value, value] pairs
// This is done to keep consistency with the Map API
console.log(setA.entries());

// Removes all elements from the Set
setA.clear();

// Printing the Set after clearing (will be empty)
console.log(setA);
