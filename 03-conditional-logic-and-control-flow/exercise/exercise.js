import { fileURLToPath } from "url";

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  // To run the code you write for each exercise, change the text below to match the name
  // of the exercise.
  // For Example:
  // If I want to run exercise_05 below, I would change the text from "exercise_01" to
  // "exercise_05", save this file, and then when I run this file with `node exercise.js`
  // the code for exercise_05 will run
  exercise_01();
}

export function exercise_01() {
  /* 
   
    Exercise 1
    
    Comparison Operators: 
    
    Check if a number is greater than another and log the result.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let a = 10;
  let b = 5;
  console.log(a > b); // true
  // Enter your code in the empty lines ABOVE
}

export function exercise_02() {
  /* 
   
    Exercise 2
    
    Comparison Operators: 
    
    Use `===` to compare a number and a string and log the result.
    
  
  */
  // CODE IN THE OPEN LINES BELOW
  let num = 42;
  let str = "42";
  console.log(num === str); // false
  // Enter your code in the empty lines ABOVE
}

export function exercise_03() {
  /* 
   
    Exercise 3
    
    Conditionals: 
    
    Check if a number is even or odd and log "Even" or "Odd".
    
  
  */
  // CODE IN THE OPEN LINES BELOW
  let number = 7;
  if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
  // Enter your code in the empty lines ABOVE
}

export function exercise_04() {
  /* 
   
    Exercise 4
    
    Logical Operators: 
    
    Use `&&` to check if a number is between 10 and 20.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let value = 15;
  if (value >= 10 && value <= 20) {
    console.log("Between 10 and 20");
  }
  // Enter your code in the empty lines ABOVE
}

export function exercise_05() {
  /* 
   
    Exercise 5
    
    Logical Operators: 
    
    Use `||` to check if a string is either "red" or "blue".
  
  */
  // CODE IN THE OPEN LINES BELOW
  let color = "green";
  if (color === "red" || color === "blue") {
    console.log("Color is red or blue");
  } else {
    console.log("Color is not red or blue");
  }
  // Enter your code in the empty lines ABOVE
}

export function exercise_06() {
  /* 
   
    Exercise 6
    
    Logical NOT: 
    
    Use `!` to check if a value is falsy and log the result
  
  */
  // CODE IN THE OPEN LINES BELOW
  let falsyValue = null;
  console.log(!falsyValue); // true
  // Enter your code in the empty lines ABOVE
}

export function exercise_07() {
  /* 
   
    Exercise 7
    
    Mathematical Operators: 
    
    Add two numbers and log the result.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let sum = 4 + 6;
  console.log(sum); // 10
  // Enter your code in the empty lines ABOVE
}

export function exercise_08() {
  /* 
   
    Exercise 8
    
    Mathematical Operators: 
    
    Subtract one number from another and log the result.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let difference = 10 - 3;
  console.log(difference); // 7
  // Enter your code in the empty lines ABOVE
}

export function exercise_09() {
  /* 
   
    Exercise 9
    
    Mathematical Operators: 
    
    Multiply two numbers and log the result.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let product = 3 * 4;
  console.log(product); // 12
  // Enter your code in the empty lines ABOVE
}

export function exercise_10() {
  /* 
   
    Exercise 10
    
    Mathematical Operators: 
    
    Divide two numbers and log the result.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let quotient = 20 / 5;
  console.log(quotient); // 4
  // Enter your code in the empty lines ABOVE
}

export function exercise_11() {
  /* 
   
    Exercise 11
    
    Remainder Operator: 
    
    Use `%` to find the remainder of a division and log it.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let remainder = 10 % 3;
  console.log(remainder); // 1
  // Enter your code in the empty lines ABOVE
}

export function exercise_12() {
  /* 
   
    Exercise 12
    
    Exponentiation: 
    
    Use `**` to calculate 2 to the power of 3 and log the result.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let power = 2 ** 3;
  console.log(power); // 8
  // Enter your code in the empty lines ABOVE
}

export function exercise_13() {
  /* 
   
    Exercise 13
    
    Increment: 
    
    Increment a variable and log the result.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let count = 5;
  count++;
  console.log(count); // 6
  // Enter your code in the empty lines ABOVE
}

export function exercise_14() {
  /* 
   
    Exercise 14
    
    Decrement: 
    
    Decrement a variable and log the result.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let counter = 10;
  counter--;
  console.log(counter); // 9
  // Enter your code in the empty lines ABOVE
}

export function exercise_15() {
  /* 
   
    Exercise 15
    
    Assignment Operators: 
    
    Use `+=` to add to a variable and log the result.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let score = 50;
  score += 10;
  console.log(score); // 60
  // Enter your code in the empty lines ABOVE
}

export function exercise_16() {
  /* 
   
    Exercise 16
    
    Assignment Operators: 
    
    Use `*=` to multiply a variable and log the result.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let points = 4;
  points *= 5;
  console.log(points); // 20
  // Enter your code in the empty lines ABOVE
}

export function exercise_17() {
  /* 
   
    Exercise 17
    
    Falsy Values: 
    
    Check if an empty string is falsy and log the result.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let emptyString = "";
  if (!emptyString) {
    console.log("Empty string is falsy"); // true
  }
  // Enter your code in the empty lines ABOVE
}

export function exercise_18() {
  /* 
   
    Exercise 18
    
    Truthy Values: 
    
    Check if a non-empty string is truthy and log the result.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let nonEmptyString = "hello";
  if (nonEmptyString) {
    console.log("Non-empty string is truthy"); // true
  }
  // Enter your code in the empty lines ABOVE
}

export function exercise_19() {
  /* 
   
    Exercise 19
    
    Objects: 
    
    Create an object and check if two references point to the same object.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let obj1 = { name: "Alice" };
  let obj2 = obj1;
  console.log(obj1 === obj2); // true
  // Enter your code in the empty lines ABOVE
}

export function exercise_20() {
  /* 
   
    Exercise 20

    Strict vs. Loose Equality: 
    
    Compare `undefined` and `null` using `==` and `===`.
    
  
  */
  // CODE IN THE OPEN LINES BELOW
  console.log(undefined == null); // true
  console.log(undefined === null); // false
  // Enter your code in the empty lines ABOVE
}

export function exercise_21() {
  /* 
   
    Exercise 21
    Switch Statement: 
    
    Use `switch` to check a color and log the corresponding fruit.
    
  
  */
  // CODE IN THE OPEN LINES BELOW
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
  // Enter your code in the empty lines ABOVE
}

export function exercise_22() {
  /* 
   
    Exercise 22
    
    Nested Conditionals: 
    
    Check if a number is positive, negative, or zero.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let numberCheck = -10;
  if (numberCheck > 0) {
    console.log("Positive");
  } else if (numberCheck < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
  // Enter your code in the empty lines ABOVE
}

export function exercise_23() {
  /* 
   
    Exercise 23
    
    Ternary Operator: 
    Use a ternary operator to assign a value based on a condition.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let age = 18;
  let canVote = age >= 18 ? "Yes, can vote" : "No, too young";
  console.log(canVote);
  // Enter your code in the empty lines ABOVE
}

export function exercise_24() {
  /* 
   
    Exercise 24
    
    Combining Logical Operators: 
    
    Use `&&` and `||` together in a condition.

  
  */
  // CODE IN THE OPEN LINES BELOW
  let isMember = true;
  let ageCheck = 25;
  if (isMember && (ageCheck > 20 || ageCheck < 30)) {
    console.log("Eligible for discount");
  }
  // Enter your code in the empty lines ABOVE
}

export function exercise_25() {
  /* 
   
    Exercise 25
    
    Using `default` in Switch: Check a day of the week and log if it’s a weekday or weekend.

  
  */
  // CODE IN THE OPEN LINES BELOW
  let day = "Saturday";
  switch (day) {
    case "Saturday":
    case "Sunday":
      console.log("Weekend");
      break;
    default:
      console.log("Weekday");
  }
  // Enter your code in the empty lines ABOVE
}
