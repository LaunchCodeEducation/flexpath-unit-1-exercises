// 3. ESM Import: Use `import` to bring in a named export from a local file.
// (Assuming greet.js is a local file with `export function greet(name) {...}`)
import { greet } from "./commonJS-exercise-1";
console.log(greet("World"));

// 4. ESM Export: Export a function and a variable from a module.
export function sayHello() {
  console.log("Hello from ESM!");
}
export const author = "Jane Doe";
