export function exercise_01() {
  // Exercise 1
  // 1. Using console.log, print the String "Hello, World!" to the console.
  //
  // CODE IN THE OPEN LINES BELOW
  console.log("Hello, World!");

  // Enter your code in the empty lines ABOVE
}

export function exercise_02() {
  // Exercise 2
  // 1. Declare a variable named "myAge" using the `let` keyword, and give it a Number value correlating to your age
  // 2. Declare a variable named "myName" using the `const` keyword and give it a String value that matches your first name
  //
  // CODE IN THE OPEN LINES BELOW

  let myAge = 30;
  const myName = "Christian";
  // IGNORE the code below, enter your code ABOVE this line
  return {
    myAge,
    myName,
  };
}

export function exercise_03() {
  const num1 = 15;
  const num2 = 5;

  // Exercise 3
  // The below variables can be declared using `let` or `const`, it's up to you!
  // 1. Declare a variable named "sum" that contains the sum of num1 and num2
  // 2. Declare a variable named "subtract" that contains the result of num1 minus num2
  // 3. Declare a variable named "multiply" that contains the result of num1 multiplied by num2
  // 4. Declare a variable named "divide" that contains the result of num1 divided by num2
  //
  // CODE IN THE OPEN LINES BELOW

  let sum = num1 + num2;
  let subtract = num1 - num2;
  let multiply = num1 * num2;
  let divide = num1 / num2;

  // IGNORE the code below, enter your code ABOVE this line
  return {
    sum,
    subtract,
    multiply,
    divide,
  };
}

export function exercise_04() {
  // Exercise 4
  // 1. Create a variable below named 'x'.
  // 2. Assign 'x' a Number value. Then log the typeof 'x' to the console
  // 3. Assign 'x' a String value. Then log the typeof 'x' to the console
  // 4. Assign 'x' a Boolean value. Then log the typeof 'x' to the console
  //
  // CODE IN THE OPEN LINES BELOW
  let x = 23;
  console.log(typeof x);
  x = "Hello!";
  console.log(typeof x);
  x = true;
  console.log(typeof x);
  // IGNORE the code below, enter your code ABOVE this line
  return x;
}

export function exercise_05() {
  // Exercise 5
  // 1. Create a variable named 'isAvailable' with a Boolean value of 'true'
  // 2. Then, toggle the value of 'isAvailable' using the `!` (not) operator.
  //      Assign this new value back to the 'isAvailable' variable.
  //
  // CODE IN THE OPEN LINES BELOW
  let isAvailable = true;
  console.log(isAvailable);
  isAvailable = !isAvailable;
  console.log(isAvailable);
  // IGNORE the code below, enter your code ABOVE this line
  return isAvailable;
}

export function exercise_06() {
  // Exercise 6
  // 1. Create a variable named 'message' and assign it any String value you want
  // 2. Create a new variable named 'upper'.
  //      Using the toUpperCase() String method, assign 'upper' an upper-cased
  //      version of your 'message' variable. Then log 'upper' to the console.
  // 3. Create a new variable named 'lower'.
  //      Using the toLowerCase() String method, assign 'lower' a lower-cased
  //      version of your 'message' variable. Then log 'lower' to the console
  //  4. Create a new variable named 'length'.
  //      Using the 'length' property that every String type value has, log the
  //      length of your 'message' variable to the console
  // CODE IN THE OPEN LINES BELOW
  let message = "Welcome to the FlexTech program!";
  let upper = message.toUpperCase();
  console.log(upper);
  let lower = message.toLowerCase();
  console.log(lower);
  console.log("The length of my message is ", message.length, " characters");
  // IGNORE the code below, enter your code ABOVE this line
  return {
    message,
    upper,
    lower,
  };
}

export function exercise_07() {}

export function exercise_08() {}

export function exercise_09() {}

export function exercise_10() {}

export function exercise_11() {}

export function exercise_12() {}

export function exercise_13() {}

export function exercise_14() {}

export function exercise_15() {}

export function exercise_16() {}

export function exercise_17() {}

export function exercise_18() {}

export function exercise_19() {}

export function exercise_20() {}
