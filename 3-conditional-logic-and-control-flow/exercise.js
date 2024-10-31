// 1. Comparison Operators: Check if a number is greater than another and log the result.
let a = 10;
let b = 5;
console.log(a > b); // true

// 2. Comparison Operators: Use `===` to compare a number and a string and log the result.
let num = 42;
let str = "42";
console.log(num === str); // false

// 3. Conditionals: Check if a number is even or odd and log "Even" or "Odd".
let number = 7;
if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// 4. Logical Operators: Use `&&` to check if a number is between 10 and 20.
let value = 15;
if (value >= 10 && value <= 20) {
  console.log("Between 10 and 20");
}

// 5. Logical Operators: Use `||` to check if a string is either "red" or "blue".
let color = "green";
if (color === "red" || color === "blue") {
  console.log("Color is red or blue");
} else {
  console.log("Color is not red or blue");
}

// 6. Logical NOT: Use `!` to check if a value is falsy and log the result.
let falsyValue = null;
console.log(!falsyValue); // true

// 7. Mathematical Operators: Add two numbers and log the result.
let sum = 4 + 6;
console.log(sum); // 10

// 8. Mathematical Operators: Subtract one number from another and log the result.
let difference = 10 - 3;
console.log(difference); // 7

// 9. Mathematical Operators: Multiply two numbers and log the result.
let product = 3 * 4;
console.log(product); // 12

// 10. Mathematical Operators: Divide two numbers and log the result.
let quotient = 20 / 5;
console.log(quotient); // 4

// 11. Remainder Operator: Use `%` to find the remainder of a division and log it.
let remainder = 10 % 3;
console.log(remainder); // 1

// 12. Exponentiation: Use `**` to calculate 2 to the power of 3 and log the result.
let power = 2 ** 3;
console.log(power); // 8

// 13. Increment: Increment a variable and log the result.
let count = 5;
count++;
console.log(count); // 6

// 14. Decrement: Decrement a variable and log the result.
let counter = 10;
counter--;
console.log(counter); // 9

// 15. Assignment Operators: Use `+=` to add to a variable and log the result.
let score = 50;
score += 10;
console.log(score); // 60

// 16. Assignment Operators: Use `*=` to multiply a variable and log the result.
let points = 4;
points *= 5;
console.log(points); // 20

// 17. Falsy Values: Check if an empty string is falsy and log the result.
let emptyString = "";
if (!emptyString) {
  console.log("Empty string is falsy"); // true
}

// 18. Truthy Values: Check if a non-empty string is truthy and log the result.
let nonEmptyString = "hello";
if (nonEmptyString) {
  console.log("Non-empty string is truthy"); // true
}

// 19. Objects: Create an object and check if two references point to the same object.
let obj1 = { name: "Alice" };
let obj2 = obj1;
console.log(obj1 === obj2); // true

// 20. Strict vs. Loose Equality: Compare `undefined` and `null` using `==` and `===`.
console.log(undefined == null); // true
console.log(undefined === null); // false

// 21. Switch Statement: Use `switch` to check a color and log the corresponding fruit.
let fruitColor = "red";
switch (fruitColor) {
  case "red":
    console.log("Apple");
    break;
  case "yellow":
    console.log("Banana");
    break;
  default:
    console.log("Unknown fruit");
}

// 22. Nested Conditionals: Check if a number is positive, negative, or zero.
let numberCheck = -10;
if (numberCheck > 0) {
  console.log("Positive");
} else if (numberCheck < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// 23. Ternary Operator: Use a ternary operator to assign a value based on a condition.
let age = 18;
let canVote = age >= 18 ? "Yes, can vote" : "No, too young";
console.log(canVote);

// 24. Combining Logical Operators: Use `&&` and `||` together in a condition.
let isMember = true;
let ageCheck = 25;
if (isMember && (ageCheck > 20 || ageCheck < 30)) {
  console.log("Eligible for discount");
}

// 25. Using `default` in Switch: Check a day of the week and log if it’s a weekday or weekend.
let day = "Saturday";
switch (day) {
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Weekday");
}
