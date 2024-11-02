export function exercise_01() {
  /* 
   
    Exercise 1
    
    1. Using console.log, print the String "Hello, World!" to the console.
  
  */

  // CODE IN THE OPEN LINES BELOW
  console.log("Hello, World!");

  // Enter your code in the empty lines ABOVE
}

export function exercise_02() {
  /*

    Exercise 2

    1. Declare a variable named "myAge" using the `let` keyword, and give it a Number value correlating to your age
    2. Declare a variable named "myName" using the `const` keyword and give it a String value that matches your first name

  */

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

  /*
    Exercise 3
    
    The below variables can be declared using `let` or `const`, it's up to you!
    1. Declare a variable named "sum" that contains the sum of num1 and num2
    2. Declare a variable named "subtract" that contains the result of num1 minus num2
    3. Declare a variable named "multiply" that contains the result of num1 multiplied by num2
    4. Declare a variable named "divide" that contains the result of num1 divided by num2

  */

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
  /*

    Exercise 4
    
    1. Create a variable below named 'x'.
    2. Assign 'x' a Number value. Then log the typeof 'x' to the console
    3. Assign 'x' a String value. Then log the typeof 'x' to the console
    4. Assign 'x' a Boolean value. Then log the typeof 'x' to the console

  */

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
  /*

    Exercise 5

    1. Create a variable named 'isAvailable' with a Boolean value of 'true'
    2. Then, toggle the value of 'isAvailable' using the `!` (not) operator.
        Assign this new value back to the 'isAvailable' variable.

  */

  // CODE IN THE OPEN LINES BELOW
  let isAvailable = true;
  console.log(isAvailable);
  isAvailable = !isAvailable;
  console.log(isAvailable);
  // IGNORE the code below, enter your code ABOVE this line
  return isAvailable;
}

export function exercise_06() {
  /*

    Exercise 6

    1. Create a variable named 'message' and assign it any String value you want
    2. Create a new variable named 'upper'.
        Using the toUpperCase() String method, assign 'upper' an upper-cased
        version of your 'message' variable. Then log 'upper' to the console.
    3. Create a new variable named 'lower'.
        Using the toLowerCase() String method, assign 'lower' a lower-cased
        version of your 'message' variable. Then log 'lower' to the console
    4. Create a new variable named 'length'.
        Using the 'length' property that every String type value has, log the
        length of your 'message' variable to the console

  */

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

export function exercise_07() {
  /* 

    Exercise 7
    
    1. Create a variable named 'name' and give it a value matching your name.
    2. Then, create a variable named 'greeting'.
    3. Using a String template literal, assign this variable the message below, swapping out
       the '[name]' spot in the string with a dynamic reference to your 'name' variable
      
       "Hello, [name]! Welcome to JavaScript!"

       So if I set name = "Christian", this template literal would insert the 'name' variable inside of the 
       String and it would say:

       "Hello, Christian! Welcome to JavaScript!"

    4. Then, log the 'message' variable to the console
  */

  // CODE IN THE OPEN LINES BELOW
  const name = "Christian";
  const message = `Hello, ${name}. Welcome to JavaScript!`;
  console.log(message);
  // IGNORE the code below, enter your code ABOVE this line
  return message;
}

export function exercise_08() {
  /* 

  Exercise 8

  Null vs. Undefined
  
  1. Declare a variable without assigning a value to it. Log it to the console. 
  2. Then, assign `null` to another variable. Log it to the console.

  */

  // CODE IN THE OPEN LINES BELOW
  let notAssigned;
  console.log("Undefined: ", notAssigned);
  let nullValue = null;
  console.log("Null: ", nullValue);
  // IGNORE the code below, enter your code ABOVE this line
}

export function exercise_09() {
  /* 

  Exercise 9

  Creating Objects: 
  
  1. Create an object representing a book with these exact properties: `title`, `author`, and `publishedYear`.
     Assign this object to a variable named 'book'
  2. Log this new variable to the console

  */

  // CODE IN THE OPEN LINES BELOW
  let book = {
    title: "2666",
    author: "Roberto Bolano",
    publishedYear: 2004,
  };
  console.log(book);

  // IGNORE the code below, enter your code ABOVE this line
  return book;
}

export function exercise_10() {
  /* 

  Exercise 10

  Accessing Object Properties
  
  1. Copy your completed 'book' variable code from exercise_09 and paste it below
  2. Then, use dot notation to access the 'title' property from your 'book' variable, and log it to the console
  3. Then, use bracket notation to access the 'author' property from your 'book' variable, and log it to the console

  */

  // PASTE your Exercise_09 code IN THE OPEN LINES BELOW
  // Then, add the code from the instructions above on the lines AFTER your copied code

  let book = {
    title: "2666",
    author: "Roberto Bolano",
    publishedYear: 2004,
  };
  console.log("Title (dot):", book.title);
  console.log("Author (bracket):", book["author"]);

  // Enter your code ABOVE this line
}

export function exercise_11() {
  /* 

  Exercise 11

  Modifying Objects: 
  
  Change the `publishedYear` of your book object and add a new property for `genre`.
  
  1. Copy your completed 'book' variable code from exercise_09 and paste it below
  2. Then, using dot notation, change the value tied to the 'publishedYear' property of your 'book' object
  3. Then, using bracket notation, create a new property named 'genre' for your 'book' object and assign it a String value
  4. Then, log your 'book' variable to the console

  */
  // PASTE your Exercise_09 code IN THE OPEN LINES BELOW
  // Then, add the code from the instructions above on the lines AFTER your copied code
  let book = {
    title: "2666",
    author: "Roberto Bolano",
    publishedYear: 2004,
  };

  book.publishedYear = 2024;
  book["genre"] = "Detective Fiction";

  console.log("Look at these changes!: ", book);

  // Enter your code ABOVE this line
}

export function exercise_12() {
  /* 

  Exercise 12

  Delete Object Properties: 
  
  Delete a property from an object and log the updated object.

  
  1. Copy your completed 'book' variable code from exercise_09 and paste it below
  2. Then, log your 'book' variable to the console. Notice that your object no longer has the 'author' property

  */
  // PASTE your Exercise_09 code IN THE OPEN LINES BELOW
  // Then, add the code from the instructions above on the lines AFTER your copied code

  let book = {
    title: "2666",
    author: "Roberto Bolano",
    publishedYear: 2004,
  };
  delete book.author;
  console.log(book);

  // Enter your code ABOVE this line
}

export function exercise_13() {
  const original = { name: "Alice" };
  const copy = original;
  console.log("original: ", original);
  console.log("copy: ", copy);
  /* 

  Exercise 13

  Object Pass by Reference: 
  
  1. Notice the code above. We create an 'original' object with the name set to 'Alice'.
     We then create a new variable 'copy' that has the 'original' variable set as its value.
     Due to how objects are stored in JavaScript, the 'copy' variable doesn't actually contain
     a unique copy of the 'original' object. It simply stores a REFERENCE to the 'original' object.
  2. In the space below, using dot notation, change the 'name' property of the 'copy' object to the value "Bob"
  3. Then, log the 'name' property of the 'original' object variable to the console. 
     LOOK! It's name was changed too!

  */
  // CODE IN THE OPEN LINES BELOW

  copy.name = "Bob";
  console.log("Original name is now changed as well: ", original.name);

  // Enter your code ABOVE this line
}

export function exercise_14() {
  /* 

  Exercise 14

  Date Object: 
  
  1. Create a new `Date` object and assign it to the variable 'currentDate'. 
  2. Then log the 'currentDate' variable to the console to see the current date and time 
     generated by the `Date` object

  */
  // CODE IN THE OPEN LINES BELOW

  const currentDate = new Date();
  console.log("Current Date and Time: ", currentDate);
}

export function exercise_15() {}

export function exercise_16() {}

export function exercise_17() {}

export function exercise_18() {}

export function exercise_19() {}

export function exercise_20() {}
