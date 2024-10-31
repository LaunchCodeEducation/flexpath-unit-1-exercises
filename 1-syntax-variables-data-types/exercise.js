// 1. Syntax & Semicolons: Write a simple JavaScript program to print "Hello, World!" to the console.
console.log("Hello, World!");

// 2. Keywords: Declare variables using let, const, and var and explain the difference between them.
let myAge = 25; // 'let' allows reassignment
const myName = "John"; // 'const' cannot be reassigned
var city = "New York"; // 'var' is function-scoped, not block-scoped

// 3. Operators: Write a script that adds, subtracts, multiplies, and divides two numbers and logs the results.
let num1 = 10;
let num2 = 5;
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);

// 4. Comments: Add both single-line and multi-line comments in a script explaining what each line does.
// Single-line comment
/* Multi-line comment
   explaining this code block */
let x = 10; // Declare a variable x and assign 10

// 5. Variables: Declare a variable to hold your age, name, and city of residence using camel case.
let age = 30;
let fullName = "Jane Doe";
let cityOfResidence = "Los Angeles";

// 6. Dynamic Typing: Write a script that changes a variable's data type multiple times and logs the typeof each time.
let variable = 42;
console.log(typeof variable); // "number"
variable = "Hello, world!";
console.log(typeof variable); // "string"
variable = true;
console.log(typeof variable); // "boolean"

// 7. Boolean Values: Create a variable with a Boolean value and toggle it using the `!` (not) operator.
let isAvailable = true;
console.log("Original:", isAvailable);
isAvailable = !isAvailable;
console.log("Toggled:", isAvailable);

// 8. String Properties & Methods: Use a string and experiment with `toUpperCase()`, `toLowerCase()`, and finding its `length`.
let message = "JavaScript is fun!";
console.log("Uppercase:", message.toUpperCase());
console.log("Lowercase:", message.toLowerCase());
console.log("Length:", message.length);

// 9. Template Literals: Create a script that logs a personalized greeting using template literals.
let userName = "Alice";
let greeting = `Hello, ${userName}! Welcome to JavaScript.`;
console.log(greeting);

// 10. Number Limits: Display the minimum and maximum safe integers in JavaScript.
console.log("Min Safe Integer:", Number.MIN_SAFE_INTEGER);
console.log("Max Safe Integer:", Number.MAX_SAFE_INTEGER);

// 11. BigInt: Create a script that defines a BigInt and demonstrates operations with very large numbers.
let bigNumber = 123456789012345678901234567890n;
let anotherBigNumber = 987654321098765432109876543210n;
console.log("BigInt Addition:", bigNumber + anotherBigNumber);

// 12. e-notation: Write a script using e-notation to represent very large and very small numbers.
let largeNumber = 1.5e6; // 1.5 million
let smallNumber = 2.3e-4; // 0.00023
console.log("Large Number:", largeNumber);
console.log("Small Number:", smallNumber);

// 13. Null vs. Undefined: Declare a variable without assigning it and log it. Then, assign `null` to another variable and log it.
let notAssigned;
console.log("Undefined:", notAssigned);
let emptyValue = null;
console.log("Null:", emptyValue);

// 14. Creating Objects: Create an object representing a book with properties like `title`, `author`, and `publishedYear`.
let book = {
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
  publishedYear: 2008
};
console.log(book);

// 15. Accessing Object Properties: Use dot and bracket notation to access properties from an object.
console.log("Title (dot):", book.title);
console.log("Author (bracket):", book["author"]);

// 16. Modifying Objects: Change the `publishedYear` of your book object and add a new property for `genre`.
book.publishedYear = 2023;
book.genre = "Programming";
console.log(book);

// 17. Delete Object Properties: Delete a property from an object and log the updated object.
delete book.author;
console.log(book);

// 18. Pass by Reference: Demonstrate how modifying an object in one variable affects another variable that references the same object.
let original = { name: "Alice" };
let copy = original;
copy.name = "Bob";
console.log("Original:", original.name); // Outputs: "Bob"

// 19. Garbage Collection: Write a short explanation and create an example illustrating garbage collection in action.
/* Explanation: JavaScript automatically frees memory that is no longer referenced */
let data = { value: 123 };
data = null; // The object { value: 123 } is now eligible for garbage collection

// 20. Date Object: Create a new `Date` object and log the current date and time.
let currentDate = new Date();
console.log(currentDate);

// 21. Date Methods: Extract the year, month, and day from the current date using the `Date` object methods.
console.log("Year:", currentDate.getFullYear());
console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed
console.log("Day:", currentDate.getDate());

// 22. Custom Dates: Create a `Date` object for your birthday and format it as a readable string.
let birthday = new Date(1990, 5, 15); // June 15, 1990 (months are zero-indexed)
console.log("Birthday:", birthday.toDateString());

// 23. Date Arithmetic: Calculate the number of days between today and another date using JavaScript.
let anotherDate = new Date(2025, 0, 1); // January 1, 2025
let timeDifference = anotherDate - currentDate;
let daysDifference = timeDifference / (1000 * 60 * 60 * 24);
console.log("Days until 2025:", Math.ceil(daysDifference));

// 24. String Concatenation: Concatenate two strings using both `+` operator and template literals, and compare the output.
let part1 = "Hello";
let part2 = "World";
console.log("Using +:", part1 + " " + part2);
console.log("Using Template Literals:", `${part1} ${part2}`);

// 25. Include Method: Write a script that checks if a string includes a particular substring and logs the result.
let text = "Learning JavaScript is great!";
console.log("Includes 'JavaScript':", text.includes("JavaScript"));
console.log("Includes 'Python':", text.includes("Python"));
