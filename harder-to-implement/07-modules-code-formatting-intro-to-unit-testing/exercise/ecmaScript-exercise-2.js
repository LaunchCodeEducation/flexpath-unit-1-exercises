// 5. Import All: Use `import * as` to import all exports from a module.
import * as utilities from "./utilities.js";
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
import chalk from "chalk";
console.log(chalk.blue.bold("This is a blue bold message!"));

// 10. Git Ignore: Write an example of a `.gitignore` file to exclude `node_modules`.
console.log(`
node_modules
.DS_Store
.env
`);
