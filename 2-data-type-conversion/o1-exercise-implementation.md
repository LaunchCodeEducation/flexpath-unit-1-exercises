1. **Determine the data type using `typeof`:**
    

    
    `function getType(input) {   return typeof input; }`
    
2. **Convert a number to a string using template literals:**
    

    
    ``function numberToString(num) {   return `${num}`; }``
    
3. **Convert a string to a number and handle invalid input gracefully:**
    

    
    `function stringToNumber(str) {   const num = Number(str);   return isNaN(num) ? null : num; }`
    
4. **Check if a string contains another substring using `includes`:**
    

    
    `function containsSubstring(str, substring) {   return str.includes(substring); }`
    
5. **Round a number to the nearest integer using `Math.round`:**
    

    
    `function roundNumber(num) {   return Math.round(num); }`
    
6. **Format a date to a human-readable string using `toDateString`:**
    

    
    `function formatDate(date) {   return date.toDateString(); }`
    
7. **Format a number to two decimal places using `toFixed`:**
    

    
    `function formatTwoDecimalPlaces(num) {   return num.toFixed(2); }`
    
8. **Convert a boolean value to a string:**
    

    
    `function booleanToString(bool) {   return String(bool); }`
    
9. **Check if a value is truthy or falsy:**
    

    
    `function isTruthy(value) {   return !!value; }`
    
10. **Format a date and time for a specified locale using `toLocaleString`:**
    

    
    `function formatDateTimeForLocale(date, locale) {   return date.toLocaleString(locale); }`
    
11. **Parse a JSON string and handle parsing errors:**
    

    
    `function parseJsonSafe(jsonString) {   try {     return JSON.parse(jsonString);   } catch (e) {     return null; // Handle error as needed   } }`
    
12. **Convert an object to a JSON string using `JSON.stringify`:**
    

    
    `function objectToJsonString(obj) {   return JSON.stringify(obj); }`
    
13. **Return the smallest integer greater than a given number using `Math.ceil`:**
    

    
    `function ceilNumber(num) {   return Math.ceil(num); }`
    
14. **Convert a string to uppercase using `toUpperCase`:**
    

    
    `function toUpperCaseString(str) {   return str.toUpperCase(); }`
    
15. **Extract the year from a `Date` object:**
    

    
    `function getYearFromDate(date) {   return date.getFullYear(); }`
    
16. **Check if a value is `NaN` using `isNaN`:**
    

    
    `function isValueNaN(value) {   return isNaN(value); }`
    
17. **Convert a string representation of a boolean to an actual boolean:**
    

    
    `function stringToBoolean(str) {   return str.toLowerCase() === 'true'; }`
    
18. **Format a number as currency for a given locale using `Intl.NumberFormat`:**
    

    
    `function formatCurrency(amount, locale, currency) {   return new Intl.NumberFormat(locale, {     style: 'currency',     currency: currency,   }).format(amount); }`
    
19. **Compare two dates and return which one is earlier:**
    

    
    `function earlierDate(date1, date2) {   if (date1 < date2) {     return date1;   } else if (date1 > date2) {     return date2;   } else {     return null; // Dates are equal   } }`
    
20. **Generate a random number between two specified values:**
    

    
    `function randomBetween(min, max) {   return Math.random() * (max - min) + min; }`