// ------------------------------------------------------------
// Arrays
// ------------------------------------------------------------

// Array of Marvel heroes
let myHeros = ["thor", "spiderMan"];

// Array of DC heroes
let dcHeros = ["batman", "flash", "superman"];


// ------------------------------------------------------------
// Object with properties and method
// ------------------------------------------------------------

let heroPower = {

    // Properties
    thor: "hammer",
    spiderMan: "sling",

    // Method to access spiderMan power
    getSpiderManPower: function () {
        // 'this' refers to heroPower object
        console.log(`spiderMan Power is ${this.spiderMan}`);
    }
};


// ------------------------------------------------------------
// Adding a method to Object prototype
// (Available to ALL objects, arrays, functions, etc.)
// ------------------------------------------------------------

Object.prototype.dibyansh = function () {
    console.log(`Dibyansh is present in all Objects...`);
};

// Arrays inherit from Object → can access dibyansh()
myHeros.dibyansh();

// Objects also inherit from Object → can access dibyansh()
heroPower.dibyansh();


// ------------------------------------------------------------
// Adding a method to Array prototype
// (Only available to arrays)
// ------------------------------------------------------------

Array.prototype.heyDibyansh = function () {
    console.log(`Dibyansh says Hii...`);
};

// myHeros is an array → works
myHeros.heyDibyansh();

// heroPower is an object → would NOT work
// heroPower.heyDibyansh(); ❌


// ------------------------------------------------------------
// Prototype-based Inheritance
// ------------------------------------------------------------

// Base object
const user = {
    name: "top name",
    email: "top@gmail.com"
};

// Teacher object
const teacher = {
    makeVideos: true
};

// Teaching support object
const teachingSupport = {
    isAvailable: false
};

// Teaching assistant object
const teachingAssistant = {
    makeAssignment: "JS Assignment",
    fullTime: true,

    // Old-style prototype linking
    __proto__: teachingSupport
};

// Accessing property from teachingSupport via prototype chain
console.log(teachingAssistant.isAvailable);


// ------------------------------------------------------------
// More Prototype Linking
// ------------------------------------------------------------

// teacher inherits properties from user
teacher.__proto__ = user;

// Modern & recommended way to set prototype
Object.setPrototypeOf(teachingSupport, teacher);

// teacher → user → Object
console.log(teacher.name);
console.log(teacher.email);


// ------------------------------------------------------------
// Extending String Prototype
// ------------------------------------------------------------

String.prototype.trueLength = function () {
    // 'this' refers to the string object
    // trim() removes extra spaces from both ends
    return `True length is ${this.trim().length}`;
};

// String with extra spaces
let str1 = "     Dibyansh Sharma        ";

console.log(`Length of str1 is : ${str1.length}`);
console.log(`True length of str1 is : ${str1.trueLength()}`);
