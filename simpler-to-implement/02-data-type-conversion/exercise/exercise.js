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
		
		1. Create a 4 variables, each assigned to one of the following data types:
				- String
				- Number
				- Boolean
				- Object
		2. Then, create a variable and DON'T assign it any value, just declare it. 
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
		2. Create another variable that holds the result of converting the first variable to a String
		3. Log this new String variable to the console, along with it's type using `typeof`

  */

  // CODE IN THE OPEN LINES BELOW
  let num = 123;
  let numAsString = String(num);
  console.log(numAsString); // "123"
  console.log(typeof numAsString); // "string"

  // Enter your code in the empty lines ABOVE
}

export function exercise_03() {
  /* 
   
    Exercise 3
    
    Boolean Conversion: 
		
		1. Convert 0 and 1 to Boolean values and log the results.

  */

  // CODE IN THE OPEN LINES BELOW
  let boolFromZero = Boolean(0);
  let boolFromOne = Boolean(1);
  console.log(boolFromZero); // false
  console.log(boolFromOne); // true

  // Enter your code in the empty lines ABOVE
}

export function exercise_04() {
  /* 
   
    Exercise 4
    
    Handling NaN: 
		
		1. Attempt to convert a non-numeric string to a number and check if it’s NaN, using the method isNan(). 

  */

  // CODE IN THE OPEN LINES BELOW
  let invalidNumber = Number("not a number");
  console.log(isNaN(invalidNumber)); // true
  // Enter your code in the empty lines ABOVE
}

export function exercise_05() {
  /* 
   
    Exercise 5
    
    Template Literals: 
		
		1. Create a string using template literals that embeds a variable representing your age.
		2. Then log this string to the console

  */

  // CODE IN THE OPEN LINES BELOW
  let age = 30;
  let ageMessage = `I am ${age} years old.`;
  console.log(ageMessage);
  // Enter your code in the empty lines ABOVE
}

export function exercise_06() {
  /* 
   
    Exercise 6
    
    Concatenate Strings: 
		
		1. Join a string and number using both `+` and template literals. 
		

  */
  let name = "Alice";
  let number = 5;
  console.log(name + " has " + number + " apples."); // Using +
  console.log(`${name} has ${number} apples.`); // Using template literals
}

export function exercise_07() {
  /* 
   
    Exercise 7
    
    JSON Conversion: 
		
		1. Create a JavaScript object, convert it to a JSON string, and log the result.

  */
  let person = { name: "Bob", age: 25, isEmployed: true };
  let jsonString = JSON.stringify(person);
  console.log(jsonString);
}

export function exercise_08() {
  /* 
   
    Exercise 8
    
    JSON Parsing: 
		
		1. Parse a JSON string into an object and access one of its properties.

  */
  let jsonStringToParse = '{"name": "Charlie", "age": 35}';
  let parsedObject = JSON.parse(jsonStringToParse);
  console.log(parsedObject.name); // "Charlie"
}

export function exercise_09() {
  /* 
   
    Exercise 9
    
    Math Object: 
		
		1. Use Math.round(), Math.ceil(), and Math.floor() on a decimal number.

  */
  let decimalNumber = 5.7;
  console.log(Math.round(decimalNumber)); // 6
  console.log(Math.ceil(decimalNumber)); // 6
  console.log(Math.floor(decimalNumber)); // 5
}

export function exercise_10() {
  /* 
   
    Exercise 10
    
    Decimal Precision: 
		
		1. Use toFixed() to round a decimal number to two decimal places.

  */
  let preciseNumber = 3.14159;
  let roundedNumber = preciseNumber.toFixed(2);
  console.log(roundedNumber); // "3.14"
}

export function exercise_11() {
  /* 
   
    Exercise 11
    
    Locale Number Formatting: 
		
		1. Format a number using Intl.NumberFormat for the US locale.

  */
  let numberToFormat = 1234567.89;
  let formattedNumberUS = new Intl.NumberFormat("en-US").format(numberToFormat);
  console.log(formattedNumberUS); // "1,234,567.89"
}

export function exercise_12() {
  /* 
   
    Exercise 12
    
    Locale-Based Currency: 
		
		1. Format a number as currency in USD using Intl.NumberFormat. 

  */
  let salary = 50000;
  let formattedCurrencyUSD = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(salary);
  console.log(formattedCurrencyUSD); // "$50,000.00"
}

export function exercise_13() {
  /* 
   
    Exercise 13
    
    Other Locale Currency: 
		
		1. Format a number as currency in Japanese Yen using Intl.NumberFormat. 

  */
  let formattedCurrencyYen = new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
  }).format(salary);
  console.log(formattedCurrencyYen); // "¥50,000"
}

export function exercise_14() {
  /* 
   
    Exercise 14
    
    Date Creation: 
		
		Create a new Date object. Extract and log the year, month, and day from a Date object.
	
  */
  let currentDate = new Date();
  console.log(currentDate);
  console.log(currentDate.getFullYear()); // Year
  console.log(currentDate.getMonth() + 1); // Month (0-indexed, so add 1)
  console.log(currentDate.getDate()); // Day
}

export function exercise_15() {
  /* 
   
    Exercise 15
    
    Date String Conversion: 
		
		Convert a Date object to a human-readable string using toDateString(). 
		Then, convert it to a time string using toTimeString()
  */
  let currentDate = new Date();
  console.log(currentDate.toDateString());
  console.log(currentDate.toTimeString());
}

export function exercise_16() {
  /* 
   
    Exercise 16
    
    Locale Date Formatting:
		
		Use toLocaleDateString() to format a current date for the US locale.
		Then, format the current date for the UK locale. 
		Log both results.
		
		Convert a Date object to a human-readable string using toDateString(). 
		Then, convert it to a time string using toTimeString()
  */
  let currentDate = new Date();
  console.log(currentDate.toLocaleDateString("en-US"));
  console.log(currentDate.toLocaleDateString("en-GB"));
}

export function exercise_17() {
  /* 
   
    Exercise 17
    
    Date and Time Formatting with options: 
		
		Format both the date and time using toLocaleString() with options.
  */
  let currentDate = new Date();
  let options = { dateStyle: "short", timeStyle: "short" };
  console.log(currentDate.toLocaleString("en-US", options)); // "10/25/23, 3:23 PM"
}

export function exercise_18() {
  /* 
   
    Exercise 18
    
    Error Handling: 
		
		Write a script that tries to parse invalid JSON and uses a try-catch block to handle the error.
  */
  try {
    let invalidJson = JSON.parse("This is not JSON");
  } catch (error) {
    console.log("Error parsing JSON:", error.message);
  }
}

export function exercise_19() {
  /* 
   
    Exercise 19
    
    Boolean String Conversion: 
		
		Convert a true Boolean value to a string and log the result.
  */
  let boolValue = true;
  let boolAsString = String(boolValue);
  console.log(boolAsString); // "true"
}

export function exercise_20() {
  /* 
   
    Exercise 20
    
    Locale Formatting Comparison: 
		
		Compare number formatting between US, Greek, and Japanese locales.
  */

  let bigNumber = 1234567.89;
  console.log(new Intl.NumberFormat("en-US").format(bigNumber)); // US format
  console.log(new Intl.NumberFormat("el-GR").format(bigNumber)); // Greek format
  console.log(new Intl.NumberFormat("ja-JP").format(bigNumber)); // Japanese format
}

export function exercise_21() {
  /* 
   
    Exercise 21
    
    Date Arithmetic: 
		
		Calculate the difference in days between two Date objects and log the result. 
  */
  let currentDate = new Date();
  let futureDate = new Date(2025, 0, 1); // January 1, 2025
  let timeDifference = futureDate - currentDate;
  let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  console.log(daysDifference); // Number of days until January 1, 2025
}
