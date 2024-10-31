// 1. Synchronous vs. Asynchronous: Log a message before and after a setTimeout.
console.log("Start");
setTimeout(() => console.log("Asynchronous Task"), 1000);
console.log("End");

// 2. Callback Function: Write a function that takes a callback and executes it.
function greet(callback) {
  console.log("Hello!");
  callback();
}
greet(() => console.log("Callback executed!"));

// 3. Nested Callbacks: Create a function with three nested callbacks to simulate callback hell.
function fetchData(callback1, callback2, callback3) {
  setTimeout(() => {
    console.log("Fetched data");
    callback1(() => {
      console.log("Processed data");
      callback2(() => {
        console.log("Saved data");
        callback3();
      });
    });
  }, 1000);
}
fetchData(
  next => next(() => console.log("All done")),
  next => next(() => console.log("Almost there")),
  () => console.log("Finished")
);

// 4. Promises: Create a simple promise that resolves after 2 seconds.
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise resolved!"), 2000);
});
myPromise.then(result => console.log(result));

// 5. Promise Chaining: Chain multiple `then` calls on a promise.
myPromise
  .then(result => {
    console.log(result);
    return "Next step";
  })
  .then(step => {
    console.log(step);
    return "Final step";
  })
  .then(final => console.log(final));

// 6. Creating a Custom Promise: Wrap `setTimeout` in a promise.
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
delay(1000).then(() => console.log("1 second delay complete"));

// 7. Async Function: Write an `async` function that awaits a promise.
async function asyncFunction() {
  const result = await myPromise;
  console.log(result);
}
asyncFunction();

// 8. Try-Catch with Async/Await: Use a `try-catch` block in an `async` function.
async function fetchDataAsync() {
  try {
    const data = await myPromise;
    console.log(data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
fetchDataAsync();

// 9. Top-Level Await: Use `await` outside an `async` function in a module.
// (Assuming this code is in a module)
await delay(500);
console.log("Top-level await executed");

// 10. Error Handling: Write a `try-catch` block that catches a thrown error.
try {
  throw new Error("Something went wrong");
} catch (error) {
  console.error("Caught error:", error.message);
}

// 11. Throwing an Error: Create a function that throws an error if a condition is not met.
function validateAge(age) {
  if (age < 18) throw new Error("Age must be 18 or older");
  console.log("Age is valid");
}
try {
  validateAge(16);
} catch (error) {
  console.error(error.message);
}

// 12. Using the EventEmitter: Create and use an EventEmitter.
const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.on("event", message => console.log("Event received:", message));
emitter.emit("event", "Hello, Event!");

// 13. Reading a File with Callback: Use `fs.readFile` with a callback (Node.js).
const fs = require("fs");
fs.readFile("data.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("File content:", data);
  }
});

// 14. Reading a File with Promises: Use `fs.promises.readFile` (Node.js).
const fsPromises = require("fs").promises;
fsPromises
  .readFile("data.json", "utf8")
  .then(data => console.log("File content:", data))
  .catch(err => console.error("Error reading file:", err));

// 15. Async File Read: Read a file using `async` and `await`.
async function readFileAsync() {
  try {
    const data = await fsPromises.readFile("data.json", "utf8");
    console.log("Async file content:", data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
readFileAsync();

// 16. Fetch API: Use the `fetch` API to make a GET request.
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(data => console.log("Fetched data:", data))
  .catch(error => console.error("Error:", error.message));

// 17. Using a Custom Error: Throw a custom error with a name and message.
function fetchUserData(userId) {
  if (!userId) throw new Error("User ID is required");
  console.log("Fetching data for user:", userId);
}
try {
  fetchUserData();
} catch (error) {
  console.error(error.message);
}

// 18. Retry Logic: Create a simple retry mechanism for a function.
function retry(fn, retries) {
  let attempt = 0;
  function execute() {
    try {
      fn();
    } catch (error) {
      if (attempt < retries) {
        attempt++;
        console.log(`Retrying... (${attempt})`);
        execute();
      } else {
        console.error("Failed after retries:", error.message);
      }
    }
  }
  execute();
}
retry(() => {
  if (Math.random() > 0.5) throw new Error("Random failure");
  console.log("Success!");
}, 3);

// 19. Using `Promise.all`: Make two promises run concurrently.
const promise1 = delay(1000).then(() => "First Promise");
const promise2 = delay(2000).then(() => "Second Promise");
Promise.all([promise1, promise2]).then(results => console.log("Results:", results));

// 20. Using `Promise.race`: Log the result of the first promise to complete.
Promise.race([promise1, promise2]).then(result => console.log("First to finish:", result));

// 21. Using `Promise.allSettled`: Get the status of multiple promises.
Promise.allSettled([promise1, promise2, Promise.reject("Error")]).then(results =>
  console.log("All Settled Results:", results)
);

// 22. Handling API Response: Check if a fetch response is okay.
async function fetchDataFromAPI() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    console.log("API Data:", data);
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}
fetchDataFromAPI();

// 23. Creating an API Request Wrapper: Wrap fetch in a reusable function.
async function apiRequest(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch data");
    return await response.json();
  } catch (error) {
    console.error("API Request Error:", error.message);
  }
}
apiRequest("https://jsonplaceholder.typicode.com/users").then(data =>
  console.log("User Data:", data)
);

// 24. Event Handling Example: Use Node.js's EventEmitter to handle a custom event.
const myEmitter = new EventEmitter();
myEmitter.on("greet", name => console.log(`Hello, ${name}!`));
setTimeout(() => myEmitter.emit("greet", "Alice"), 2000);

// 25. Throw and Catch Custom Error: Create and catch a custom error.
function checkFile(fileName) {
  if (!fileName.endsWith(".json")) throw new Error("Only JSON files are allowed");
  console.log("File is valid");
}
try {
  checkFile("data.txt");
} catch (error) {
  console.error("File Error:", error.message);
}
