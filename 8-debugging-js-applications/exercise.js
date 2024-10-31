// 1. Console Logging: Print values of two variables.
let a = 5;
let b = 10;
console.log("Value of a:", a);
console.log("Value of b:", b);

// 2. Setting Breakpoints: Breakpoints pause execution to inspect variables.
// (Set a breakpoint in VS Code on the next line to inspect variables)
let x = 42;
console.log("Debugging x:", x);

// 3. Step Over Example: Skip function call.
function add(a, b) {
  return a + b;
}
let result = add(3, 4);
console.log("Result:", result); // Step over 'add' in debugger

// 4. Step Into Example: Step into the function call.
function multiply(a, b) {
  return a * b;
}
let product = multiply(2, 5);
console.log("Product:", product); // Step into 'multiply' in debugger

// 5. Try-Catch Block: Handle division errors.
function divide(a, b) {
  try {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
  } catch (error) {
    console.error("Error:", error.message);
  }
}
console.log(divide(10, 0));

// 6. Reading Stack Trace: Create an error and read the trace.
function problematicFunction() {
  throw new Error("Something went wrong");
}
problematicFunction(); // Check the stack trace in the console

// 7. Logpoint in VS Code: Log a variable's value without pausing.
// (Set a logpoint in VS Code to log 'y' instead of using console.log)
let y = 20;
console.log("Value of y:", y);

// 8. Using Watch Expressions: Monitor variable values.
let count = 0;
function increment() {
  count++;
  console.log("Count:", count);
}
increment(); // Watch 'count' in the debugger

// 9. Fix a Syntax Error: Identify and fix the error.
let message = "Hello, World!";
console.log(message); // Missing semicolon fixed

// 10. Identify a Reference Error: Code that generates an error.
function showName() {
  console.log(name); // 'name' is not defined, generates ReferenceError
}
showName();

// 11. Use the Elements Panel: Change an element's color.
// (Right-click an element in DevTools and change its CSS color property)

// 12. Network Request Inspection: Check the status of a request.
// fetch("https://example.com/api")
//   .then(response => console.log("Status:", response.status))
//   .catch(error => console.error("Request failed:", error));

// 13. Fix a Type Error: Correct a wrong data type usage.
let num = 42;
console.log(num.toUpperCase()); // Error: toUpperCase is not a function
console.log(num.toString().toUpperCase()); // Fixed

// 14. Optimize Code Performance: Identify slow code in the Performance panel.
// (Use Performance panel to find bottlenecks in a loop)
for (let i = 0; i < 1e7; i++) {} // Heavy loop to analyze

// 15. Memory Leak Example: Demonstrate and fix a memory leak.
let elements = [];
function createElement() {
  let div = document.createElement("div");
  elements.push(div); // Potential memory leak if not cleared
}
createElement();
elements = null; // Clear the reference

// 16. Conditional Breakpoint: Pause only if a condition is met.
// (Set a conditional breakpoint: count === 5)
for (let count = 0; count < 10; count++) {
  console.log("Count:", count);
}

// 17. Handle Undefined Behavior: Fix a function returning undefined.
function getUserName(user) {
  if (!user) return "Guest"; // Handle undefined case
  return user.name;
}
console.log(getUserName()); // Returns 'Guest'

// 18. Using Chrome's Application Panel: Clear local storage.
// (Use Application panel in DevTools to clear local storage)

// 19. Handling Browser Compatibility: Use Array.includes safely.
let arr = [1, 2, 3];
if (arr.indexOf(2) !== -1) console.log("Found 2"); // Compatible version

// 20. Analyze a Failed Request: Debug a 404 error using DevTools.
// fetch("https://example.com/invalid-endpoint")
//   .then(response => console.log("Status:", response.status))
//   .catch(error => console.error("Error:", error));

// 21. Detecting Logical Errors: Use breakpoints to debug logic.
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(3)); // Set breakpoint to debug logic

// 22. Garbage Collection Example: Explain garbage collection.
let obj = {};
obj = null; // Garbage collector will reclaim this memory

// 23. Performance Insights: Identify a blocking script.
// (Use Performance Insights tab to analyze script load times)

// 24. Async/Await Error Handling: Handle async errors.
async function fetchData() {
  try {
    let response = await fetch("https://example.com/data");
    let data = await response.json();
    console.log("Data:", data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
fetchData();

// 25. Network Latency Simulation: Simulate a slow network in DevTools.
// (Use the Network tab in DevTools to throttle network speed)
