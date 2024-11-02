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
    
    Data Types: 
		
		1. Create a variable with the relevant value for each of the following data types:
				- String
				- Number
				- Boolean
				- Object
		2. Then, create a variable and DON't assign it any value
		3. Then, using the `typeof` keyword, log each of their types to the console
  
  */

  // CODE IN THE OPEN LINES BELOW
  let stringType = "Hello, World!";
  let numberType = 42;
  let booleanType = true;
  let objectType = { key: "value" };
  let undefinedType;
  console.log(typeof stringType); // "string"
  console.log(typeof numberType); // "number"
  console.log(typeof booleanType); // "boolean"
  console.log(typeof objectType); // "object"
  console.log(typeof undefinedType); // "undefined"

  // Enter your code in the empty lines ABOVE
}

export function exercise_02() {
  /* 
   
    Exercise 2
    
    Type Conversion: 
		
		1. Create a variable with a Number value
		2. Create another variable that converts the first variable from a Number to a String
		3. Log this new String variable to the console
		4. Log the type of this new String variable to the console 

  */

  // CODE IN THE OPEN LINES BELOW
  let num = 123;
  let numAsString = String(num);
  console.log(numAsString); // "123"
  console.log(typeof numAsString); // "string"

  // Enter your code in the empty lines ABOVE
}
