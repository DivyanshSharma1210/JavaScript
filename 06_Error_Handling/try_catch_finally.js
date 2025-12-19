// ------------------------------------------------------------
// Example 1: try-catch-finally with runtime error
// ------------------------------------------------------------

try {
    // Variable is declared but its value is undefined
    let x = undefined;

    // Trying to access index 0 of undefined
    // This will throw a TypeError
    console.log(x[0]);
}
catch (err) {
    // catch block executes when an error occurs in try
    // err contains error details (name + message)
    console.log(`Error : ${err}`);
}
finally {
    // finally block ALWAYS executes
    // Whether an error occurs or not
    console.log(`Finally always gets executed...`);
}

// This line executes even after error handling
console.log("End...");


// ------------------------------------------------------------
// Example 2: try-catch-finally with ReferenceError
// ------------------------------------------------------------

try {
    console.log("Hello");

    // 'a' is not declared anywhere
    // This will throw a ReferenceError
    console.log(a);

    // This line will NOT execute
    // because the error stops try block execution
    console.log("Try block Ends here...");
}
catch (err) {
    // Handles the ReferenceError
    console.log(`Error : ${err}`);
}
finally {
    // Always runs at the end
    // Used for cleanup, closing resources, logging, etc.
    console.log(`Execution of Program Ends here...`);
}
