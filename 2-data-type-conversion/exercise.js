// 1. Data Types: Create variables of different data types and use `typeof` to log their types.
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

// 2. Type Conversion: Convert a number to a string and log the result and its type.
let num = 123;
let numAsString = String(num);
console.log(numAsString); // "123"
console.log(typeof numAsString); // "string"

// 3. Boolean Conversion: Convert 0 and 1 to Boolean values and log the results.
let boolFromZero = Boolean(0);
let boolFromOne = Boolean(1);
console.log(boolFromZero); // false
console.log(boolFromOne); // true

// 4. Handling NaN: Attempt to convert a non-numeric string to a number and check if it’s NaN.
let invalidNumber = Number("not a number");
console.log(isNaN(invalidNumber)); // true

// 5. Template Literals: Create a string using template literals that embeds a variable representing your age.
let age = 30;
let ageMessage = `I am ${age} years old.`;
console.log(ageMessage);

// 6. Concatenate Strings: Join a string and number using both `+` and template literals.
let name = "Alice";
let number = 5;
console.log(name + " has " + number + " apples."); // Using +
console.log(`${name} has ${number} apples.`); // Using template literals

// 7. JSON Conversion: Create a JavaScript object, convert it to a JSON string, and log the result.
let person = { name: "Bob", age: 25, isEmployed: true };
let jsonString = JSON.stringify(person);
console.log(jsonString);

// 8. JSON Parsing: Parse a JSON string into an object and access one of its properties.
let jsonStringToParse = '{"name": "Charlie", "age": 35}';
let parsedObject = JSON.parse(jsonStringToParse);
console.log(parsedObject.name); // "Charlie"

// 9. Math Object: Use Math.round(), Math.ceil(), and Math.floor() on a decimal number.
let decimalNumber = 5.7;
console.log(Math.round(decimalNumber)); // 6
console.log(Math.ceil(decimalNumber));  // 6
console.log(Math.floor(decimalNumber)); // 5

// 10. Decimal Precision: Use toFixed() to round a decimal number to two decimal places.
let preciseNumber = 3.14159;
let roundedNumber = preciseNumber.toFixed(2);
console.log(roundedNumber); // "3.14"

// 11. Locale Number Formatting: Format a number using Intl.NumberFormat for the US locale.
let numberToFormat = 1234567.89;
let formattedNumberUS = new Intl.NumberFormat('en-US').format(numberToFormat);
console.log(formattedNumberUS); // "1,234,567.89"

// 12. Locale-Based Currency: Format a number as currency in USD using Intl.NumberFormat.
let salary = 50000;
let formattedCurrencyUSD = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(salary);
console.log(formattedCurrencyUSD); // "$50,000.00"

// 13. Other Locale Currency: Format a number as currency in Japanese Yen using Intl.NumberFormat.
let formattedCurrencyYen = new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(salary);
console.log(formattedCurrencyYen); // "¥50,000"

// 14. Date Creation: Create a new Date object and log the current date and time.
let currentDate = new Date();
console.log(currentDate);

// 15. Date Methods: Extract and log the year, month, and day from a Date object.
console.log(currentDate.getFullYear()); // Year
console.log(currentDate.getMonth() + 1); // Month (0-indexed, so add 1)
console.log(currentDate.getDate()); // Day

// 16. Date String Conversion: Convert a Date object to a human-readable string using toDateString().
console.log(currentDate.toDateString()); // "Wed Oct 25 2023"

// 17. Time String Conversion: Convert a Date object to a time string using toTimeString().
console.log(currentDate.toTimeString()); // "15:23:42 GMT+0000 (Coordinated Universal Time)"

// 18. Locale Date Formatting: Use toLocaleDateString() to format a date for the US locale.
console.log(currentDate.toLocaleDateString('en-US')); // "10/25/2023"

// 19. UK Locale Date Formatting: Format a date for the UK locale and log the result.
console.log(currentDate.toLocaleDateString('en-GB')); // "25/10/2023"

// 20. Date and Time Formatting: Format both the date and time using toLocaleString() with options.
let options = { dateStyle: 'short', timeStyle: 'short' };
console.log(currentDate.toLocaleString('en-US', options)); // "10/25/23, 3:23 PM"

// 21. Custom Date Object: Create a Date object for your birthday and log it.
let birthday = new Date(1990, 5, 15); // June 15, 1990 (months are 0-indexed)
console.log(birthday);

// 22. Error Handling: Write a script that tries to parse invalid JSON and uses a try-catch block to handle the error.
try {
  let invalidJson = JSON.parse("This is not JSON");
} catch (error) {
  console.log("Error parsing JSON:", error.message);
}

// 23. Boolean String Conversion: Convert a true Boolean value to a string and log the result.
let boolValue = true;
let boolAsString = String(boolValue);
console.log(boolAsString); // "true"

// 24. Locale Formatting Comparison: Compare number formatting between US, Greek, and Japanese locales.
let bigNumber = 1234567.89;
console.log(new Intl.NumberFormat('en-US').format(bigNumber)); // US format
console.log(new Intl.NumberFormat('el-GR').format(bigNumber)); // Greek format
console.log(new Intl.NumberFormat('ja-JP').format(bigNumber)); // Japanese format

// 25. Date Arithmetic: Calculate the difference in days between two Date objects and log the result.
let futureDate = new Date(2025, 0, 1); // January 1, 2025
let timeDifference = futureDate - currentDate;
let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
console.log(daysDifference); // Number of days until January 1, 2025
