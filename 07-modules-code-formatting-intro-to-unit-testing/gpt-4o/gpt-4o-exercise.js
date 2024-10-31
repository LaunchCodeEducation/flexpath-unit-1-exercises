// 1. CommonJS Import: Use `require` to import the built-in `fs` module and log it.
const fs = require('fs');
console.log(fs);

// 2. CommonJS Export: Create a simple function and export it using `module.exports`.
function greet(name) {
  return `Hello, ${name}!`;
}
module.exports = greet;

// 3. ESM Import: Use `import` to bring in a named export from a local file.
// (Assuming greet.js is a local file with `export function greet(name) {...}`)
import { greet } from './greet.js';
console.log(greet("World"));

// 4. ESM Export: Export a function and a variable from a module.
export function sayHello() {
  console.log("Hello from ESM!");
}
export const author = "Jane Doe";

// 5. Import All: Use `import * as` to import all exports from a module.
import * as utilities from './utilities.js';
console.log(utilities.author);
utilities.sayHello();

// 6. Default Export: Create a function and export it as the default export.
export default function logMessage(message) {
  console.log(message);
}

// 7. npm Initialization: Write the command to initialize a `package.json` file.
console.log("Run `npm init` in the terminal to create a package.json file.");

// 8. Installing a Package: Write the command to install `express` and save it as a dependency.
console.log("Run `npm install express` to add Express to your project.");

// 9. Chalk Library: Use `chalk` to log a styled message to the console.
import chalk from 'chalk';
console.log(chalk.blue.bold("This is a blue bold message!"));

// 10. Git Ignore: Write an example of a `.gitignore` file to exclude `node_modules`.
console.log(`
node_modules
.DS_Store
.env
`);

// 11. Multi-File Structure: Create an `index.js` file that imports a function from another file.
// (Assume `utility.js` has `export function sayHi() {...}`)
import { sayHi } from './utility.js';
sayHi();

// 12. Async Function: Create an async function that fetches data from a database (mocked with a promise).
async function fetchData() {
  return new Promise(resolve => setTimeout(() => resolve("Data fetched"), 1000));
}
fetchData().then(console.log);

// 13. SQLite Connection: Use `sqlite3` to connect to an SQLite database (pseudo-code).
import sqlite3 from 'sqlite3';
const db = new sqlite3.Database(':memory:');
db.serialize(() => {
  db.run("CREATE TABLE test (id INT, name TEXT)");
});
db.close();

// 14. ESLint Setup: Write the command to install ESLint.
console.log("Run `npm install eslint --save-dev` to install ESLint.");

// 15. ESLint Configuration: Write a simple ESLint configuration in JavaScript.
console.log(`
module.exports = {
  "extends": "eslint:recommended",
  "env": {
    "node": true,
    "es6": true
  },
  "rules": {
    "quotes": ["error", "single"],
    "semi": ["error", "always"]
  }
};
`);

// 16. ESLint Fix: Explain how to automatically fix ESLint errors in VS Code.
console.log("Enable `editor.codeActionsOnSave` in VS Code settings for ESLint auto-fix.");

// 17. Jest Test: Write a simple Jest test for a `sum` function.
test('adds 1 + 2 to equal 3', () => {
  const sum = (a, b) => a + b;
  expect(sum(1, 2)).toBe(3);
});

// 18. Unit Testing Setup: Write the command to install Jest.
console.log("Run `npm install jest --save-dev` to add Jest to your project.");

// 19. Code Coverage: Explain how to generate a code coverage report with Jest.
console.log("Run `jest --coverage` to generate a code coverage report.");

// 20. Async/Await: Create an async function that uses `await` to wait for a promise.
async function exampleAsync() {
  const result = await fetchData();
  console.log(result);
}
exampleAsync();

// 21. Using ESLint in CI: Describe how to add ESLint to a CI/CD pipeline.
console.log("Add `eslint .` as a step in your CI configuration to check for lint errors.");

// 22. Database Query: Write a function to query all rows from an SQLite table (pseudo-code).
async function getAllRows() {
  const db = new sqlite3.Database(':memory:');
  db.all("SELECT * FROM test", (err, rows) => {
    if (err) throw err;
    console.log(rows);
  });
}
getAllRows();

// 23. Async Error Handling: Use `try-catch` to handle errors in an async function.
async function fetchDataWithErrorHandling() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
fetchDataWithErrorHandling();

// 24. Using Chalk with Variables: Style a message dynamically with `chalk`.
const name = "Alice";
console.log(chalk.green(`Hello, ${name}!`));

// 25. Import JSON: Demonstrate how to import a JSON file using `import`.
import data from './data.json' assert { type: 'json' };
console.log(data);
