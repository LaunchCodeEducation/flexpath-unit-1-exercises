// 1. CommonJS Import: Use `require` to import the built-in `fs` module and log it.
const fs = require("fs");
console.log(fs);

// 2. CommonJS Export: Create a simple function and export it using `module.exports`.
function greet(name) {
  return `Hello, ${name}!`;
}
module.exports = greet;
