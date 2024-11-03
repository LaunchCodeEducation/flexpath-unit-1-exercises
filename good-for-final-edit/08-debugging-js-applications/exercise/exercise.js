/*

Exercise 1: Understanding Debugging Importance

Description: Explain why debugging is a crucial part of software development. Provide an example of how a small bug can lead to significant issues if not addressed promptly.
Answer:

Debugging is essential because it helps developers find and fix errors that can cause a program to behave unexpectedly or crash. 
Small bugs, such as an off-by-one error in a loop, can lead to significant issues like incorrect calculations, data corruption, or security vulnerabilities.



*/

// Off-by-one error in array iteration
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

// Incorrect loop (i <= numbers.length)
for (let i = 0; i <= numbers.length; i++) {
  sum += numbers[i]; // Accesses undefined when i = numbers.length
}

console.log(sum); // NaN (Not a Number)

// This small bug causes the program to sum undefined, resulting in an incorrect total.

/*

Exercise 2: Differentiating Bugs and Critical Issues

Description: Define the difference between a minor bug and a critical issue in software development. Give an example of each in JavaScript code.
Answer:

Minor Bug: A small error that doesn't significantly affect the program's functionality but might cause unexpected behavior in certain cases.


*/

// minor bug issue
function greet(name) {
  console.log("Hello " + name.toUppercase()); // Typo in method name
}

greet("Alice"); // TypeError: name.toUppercase is not a function

/*
Critical Issue: A significant error that causes the program to crash, produce incorrect results, or expose security vulnerabilities.

*/

// critical issue example
function authenticate(userInput) {
  if (userInput.password == storedPassword) {
    // Authentication logic
  }
}

// Using '==' instead of '===' can lead to security issues
// Using == instead of === can allow type coercion, potentially bypassing authentication.

/*
Exercise 3: Importance of Documentation and Unit Testing

Description: Discuss how documentation and unit testing contribute to easier debugging and overall code quality. 
Provide an example of a simple unit test in JavaScript using Jest.
Answer:

Documentation helps developers understand code functionality, making it easier to locate and fix bugs. 
Unit testing ensures individual components work as expected, catching bugs early in the development process.


*/

// Example Unit Test:
// sum.js
function sum(a, b) {
  return a + b;
}

module.exports = sum;

// sum.test.js
const sum = require("./sum");

test("adds 2 + 3 to equal 5", () => {
  expect(sum(2, 3)).toBe(5);
});

// Running this test can quickly identify issues in the sum function.

/*

Exercise 4: Setting Up Debugging in Visual Studio Code

Description: Explain how to set up Visual Studio Code for debugging a Node.js application. Include steps to configure the launch configuration.
Answer:

1. Open your Node.js project in VS Code.
2. Configure Launch Settings:
	Click on the Run and Debug icon in the Activity Bar.
	Click "Create a launch.json file".
	Select "Node.js" as the environment.
3. Modify launch.json if necessary:

*/

// json
const json = {
  version: "0.2.0",
  configurations: [
    {
      type: "node",
      request: "launch",
      name: "Launch Program",
      program: "${workspaceFolder}/app.js", // Your entry point file
      console: "integratedTerminal",
    },
  ],
};

/*
4. Set Breakpoints:
	Open your JavaScript file.
	Click in the gutter next to the line numbers to set breakpoints.
5. Start Debugging:
	Press F5 or click the green play button to start debugging.
	The debugger will stop at your breakpoints, allowing you to inspect variables.


*/

/*



Exercise 5: Using Chrome DevTools for Frontend Debugging

Description: Describe how to open Chrome DevTools and use it to debug JavaScript code running in the browser. Include how to access the Sources panel and set breakpoints.
Answer:

1. Open Chrome DevTools:
	Right-click on the webpage and select "Inspect", or press Ctrl+Shift+I (Windows/Linux) or Cmd+Option+I (Mac).
2. Access the Sources Panel:
	Click on the "Sources" tab in DevTools.
3. Set Breakpoints:
	Navigate to the JavaScript file you want to debug under the Page or Filesystem sections.
	Click on the line number where you want to set a breakpoint.
4. Debugging:
	Reload the page if necessary.
	Execution will pause at the breakpoint, allowing you to inspect variables and step through code.

*/

/*


Exercise 6: Setting Breakpoints to Inspect Variables

Description: In a given JavaScript function, set a breakpoint to pause execution and inspect the value of a variable. Provide an example using a simple function.

*/

// Example function
function calculateTotal(price, taxRate) {
  const tax = price * taxRate;
  const total = price + tax;
  return total;
}

const totalPrice = calculateTotal(100, 0.08);
console.log(`Total Price: ${totalPrice}`);

/*

Steps:

1. Set Breakpoint:
	Open the JavaScript file in your debugger.
	Set a breakpoint on the line const total = price + tax;.
2. Run the Code:
	Start the debugger.
	Execution pauses at the breakpoint.
3. Inspect Variables:
	Check the values of price, taxRate, tax, and total in the debugger's variables panel.

*/

/*

Exercise 7: Using Step Over, Step Into, and Step Out

Description: Explain the difference between "Step Over", "Step Into", and "Step Out" during debugging. Provide an example of when to use each.
Answer:

* Step Over (F10): Executes the current line of code and moves to the next line without entering any called functions.

	Use When: You want to execute function calls without debugging inside them.

* Step Into (F11): Enters into the called function to debug its code line by line.

	Use When: You need to inspect the internal workings of a function.

* Step Out (Shift+F11): Executes the rest of the current function and returns to the caller.

	Use When: You're inside a function and want to finish it quickly.


*/

// example
function multiply(a, b) {
  return a * b;
}

function calculateArea(length, width) {
  return multiply(length, width);
}

const area = calculateArea(5, 10);

/*
* Step Into calculateArea to debug multiply.
* Step Over multiply if you trust it works and only want to debug calculateArea.
* Step Out of multiply if you entered it but now want to return to calculateArea.

*/

/*

Exercise 8: Setting Conditional Breakpoints

Description: Demonstrate how to set a conditional breakpoint that only pauses execution when a variable meets a certain condition. Use a loop as an example.

*/

// example loop
for (let i = 0; i < 10; i++) {
  console.log(`Iteration ${i}`);
}

/*

Setting a Conditional Breakpoint:

1. Set Breakpoint:
	Right-click on the line console.log(Iteration ${i}); in the debugger.
	Choose "Add Conditional Breakpoint".
2. Enter Condition:
	Input i === 5 as the condition.
3. Run the Code:
	The debugger will pause when i equals 5.

*/

/*

Exercise 9: Watching Expressions

Description: Explain how to use the Watch panel to monitor variables or expressions during debugging. Provide an example of watching a complex expression.

*/

// example function
function compute(a, b) {
  const result = (a + b) * (a - b);
  return result;
}

compute(10, 5);

/*

Using the Watch Panel:

1. Set a Breakpoint:
	Set a breakpoint on return result;.
2. Add Watch Expression:
	In the Watch panel, click "+ Add expression".
	Enter a + b.
	Enter a - b.
	Enter (a + b) * (a - b).
3. Run the Code:
	The debugger pauses at the breakpoint.
4. Inspect Values:
	The Watch panel shows the current values of the expressions.

*/

/*

Exercise 10: Handling Exceptions

Description: Describe how to configure the debugger to pause on exceptions. Explain the difference between caught and uncaught exceptions.
Answer:

* Pause on Exceptions:
	In the debugger, enable "Pause on Exceptions" or "Break on Exceptions".
* Caught Exceptions: Errors that occur within a try...catch block and are handled.
* Uncaught Exceptions: Errors that are not handled and cause the program to crash.

Configuring in Chrome DevTools:

1. Open Sources Panel.
2. Click on the "Pause" icon (⊥) to toggle "Pause on Exceptions".
3. Optionally, right-click and select "Pause on Caught Exceptions" to include caught exceptions.


*/

/*


Exercise 11: Reading Stack Traces

Description: Given an error message with a stack trace, explain how to read it to identify where the error occurred in the code.
Answer:


*/

// Example Error
/*

TypeError: Cannot read property 'length' of undefined
    at getStringLength (app.js:10)
    at main (app.js:20)
    at app.js:24



*/

/*

Reading the Stack Trace:

* Error Message: Indicates the type of error and message.
* Call Stack:
	getStringLength (app.js:10): The error occurred in getStringLength function at line 10.
	main (app.js:20): getStringLength was called by main at line 20.
	app.js:24: main was called at line 24 in app.js.

* Identify the Error Source:
	Check getStringLength function at line 10 for issues with accessing .length on an undefined variable.

*/

/*

Exercise 12: Using Logpoints in VS Code

Description: Explain how to use logpoints in Visual Studio Code to log variable values without modifying the source code. Provide an example.
Answer:

Using Logpoints:

1. Set Logpoint:
	In the gutter next to the line number, right-click and select "Add Logpoint".
2. Enter Log Message:
	For example, Value of x is {x}.
3. Run the Debugger:
	The message will be logged to the console when the code executes that line.

*/

// example
function processData(x) {
  // Set a logpoint here with message: "Value of x is {x}"
  return x * 2;
}

processData(5);

/*

Exercise 13: Auto Attach in VS Code

Description: Describe how to configure Visual Studio Code to automatically attach the debugger to Node.js processes. Include the steps to enable auto attach.
Answer:

1. Enable Auto Attach:
	Open the Command Palette (Ctrl+Shift+P or Cmd+Shift+P).
	Type "Toggle Auto Attach" and select it.
	Set it to "Smart" or "Always".
2. Run Node.js Script:
	Open the integrated terminal in VS Code.
	Run your Node.js script with node app.js.
3. Debugger Auto Attaches:
	VS Code automatically attaches the debugger to the running process.
4. Debug as Usual:
	Set breakpoints, inspect variables, etc.

*/

/*

Exercise 14: Analyzing Performance with Chrome DevTools

Description: Explain how to use the Performance panel in Chrome DevTools to analyze a web application's performance. Describe how to record and interpret performance profiles.
Answer:

1. Open Performance Panel:
	Open Chrome DevTools.
	Click on the "Performance" tab.
2. Record Performance:
	Click the "Record" button.
	Interact with the web application (e.g., navigate, click buttons).
	Click "Stop" to end recording.
3. Analyze Profile:
	Timeline: Shows CPU activity over time.
	Flame Chart: Visual representation of JavaScript function calls.
	Main Thread: Displays tasks executed by the browser.
4. Identify Bottlenecks:
	Look for long tasks (tasks over 50ms).
	Investigate functions that consume significant time.

*/

/*

Exercise 15: Identifying Memory Leaks

Description: Describe how to use Chrome DevTools to detect memory leaks in a web application. Include steps to take heap snapshots and compare them.
Answer:

1. Open Memory Panel:
	In Chrome DevTools, click on the "Memory" tab.
2. Take Heap Snapshots:
	Select "Heap snapshot".
	Click "Take snapshot" before performing actions.
3. Perform Actions:
	Interact with the application (e.g., open a modal, navigate).
4. Take Another Snapshot:
	Click "Take snapshot" after actions.
5. Compare Snapshots:
	Analyze differences in memory usage.
	Look for objects that should have been garbage collected but remain.
6. Identify Leaks:
	Objects retaining memory unnecessarily indicate leaks.


*/

/*




Exercise 16: Understanding Garbage Collection

Description: Explain how JavaScript's garbage collection works. Discuss how memory leaks can occur despite garbage collection.
Answer:

* Garbage Collection:
	JavaScript uses automatic garbage collection to free memory occupied by objects that are no longer reachable.
* Memory Leaks Occur When:
	References to unused objects persist.
	Closures capture variables unnecessarily.
	Event listeners are not removed.

	Example of Memory Leak:

*/
let data = [];
function leakMemory() {
  data.push(new Array(1000000).fill("*"));
}
setInterval(leakMemory, 1000); // Memory usage increases over time

/*

Exercise 17: Taking Heap Snapshots

Description: Provide an example of how to take and analyze heap snapshots to find objects that are consuming a lot of memory.
Answer:

1. Take Initial Snapshot:
	Open Memory panel in Chrome DevTools.
	Click "Take snapshot".
2. Trigger Memory Usage:
	Perform actions that may increase memory usage.
3. Take Second Snapshot:
	Click "Take snapshot" again.
4. Analyze Snapshots:
	Compare the two snapshots.
	Sort by "Retained Size" to find large objects.
5. Investigate Objects:
	Click on objects to see where they are referenced.
	Identify if they should have been garbage collected.

*/

/*

Exercise 18: Using the Network Panel

Description: Explain how to use the Network panel in Chrome DevTools to inspect API requests made by a web application. Describe how to view request headers and responses.
Answer:

1. Open Network Panel:
	In Chrome DevTools, click on the "Network" tab.
2. Reload Page:
	Ensure "Record Network Log" is active.
	Reload the page to capture network activity.
3. Inspect Requests:
	Click on a request to view details.
	Headers Tab: Shows request and response headers.
	Preview Tab: Displays parsed response data.
	Response Tab: Shows raw response.
4. Filter Requests:
	Use filters to focus on XHR, Fetch, or specific file types.

*/

/*

Exercise 19: Diagnosing Failed Requests

Description: A web application is failing to load data from an API. Use the Network panel to diagnose why the requests are failing. Provide steps to identify common issues like incorrect URLs or server errors.
Answer:

1. Observe Failed Requests:
	In the Network panel, look for requests with status codes like 404 or 500.
2. Check URL:
	Verify the request URL in the "Headers" tab.
	Ensure it is correct and accessible.
3. Inspect Response:
	In the "Response" tab, look for error messages returned by the server.
4. Review Request Payload:
	Check the "Payload" or "Request Body" to ensure data is sent correctly.
5. Analyze CORS Errors:
	Look for Cross-Origin Resource Sharing (CORS) issues in the console.
*/

/*

Exercise 20: Understanding HTTP Status Codes

Description: List common HTTP status codes and their meanings. Explain what status codes 200, 404, and 500 indicate.
Answer:

200 OK: The request was successful, and the server returned the requested data.
301 Moved Permanently: The requested resource has been permanently moved to a new URL.
400 Bad Request: The server could not understand the request due to invalid syntax.
401 Unauthorized: Authentication is required to access the resource.
403 Forbidden: The server understands the request but refuses to authorize it.
404 Not Found: The requested resource could not be found on the server.
500 Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.
502 Bad Gateway: The server received an invalid response from an upstream server.
503 Service Unavailable: The server is not ready to handle the request.


*/

/*

Exercise 21: Setting Up VS Code for Frontend Debugging

Description: Explain how to configure Visual Studio Code to debug a frontend JavaScript application running in Chrome. Include steps to install necessary extensions and launch configurations.
Answer:

1. Install Extension:
	Install the "Debugger for Chrome" extension in VS Code.
2. Create Launch Configuration:
	Click on the Run and Debug icon.
	Click "Create a launch.json file".
	Select "Chrome" as the environment.
3. Configure launch.json:

*/
const launch_json = {
  version: "0.2.0",
  configurations: [
    {
      type: "chrome",
      request: "launch",
      name: "Launch Chrome against localhost",
      url: "http://localhost:8080", // Adjust to your server's URL
      webRoot: "${workspaceFolder}",
    },
  ],
};

/*

4. Start Debugging:
	Press F5 to launch Chrome with debugging enabled.
	Set breakpoints in VS Code; execution will pause when hit.

*/

/*

Exercise 23: Using Console Assertions

Description: Explain how to use console.assert() for debugging purposes. Provide an example where an assertion helps identify incorrect assumptions in code.
Answer:

* console.assert():
	Writes a message to the console only if an expression evaluates to false.

Example:
*/
function divide(a, b) {
  console.assert(b !== 0, "Denominator should not be zero");
  return a / b;
}

divide(10, 0); // Assertion failed: Denominator should not be zero

/*

Usage:

Helps catch errors early by verifying conditions that should always be true.

*/

/*

Exercise 24: Debugging Asynchronous Code

Description: Describe strategies for debugging asynchronous JavaScript code, such as promises and async/await functions. Provide an example using breakpoints in an async function.
Answer:

Strategies:

* Set Breakpoints in Async Functions:
	Place breakpoints inside async functions or .then() callbacks.
* Use Console Logging:
	Log values at different stages of the asynchronous flow.
* Handle Rejections:
	Catch errors using .catch() or try...catch blocks.
*/

async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    // Set breakpoint here to inspect 'data'
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
