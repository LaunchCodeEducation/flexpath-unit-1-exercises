// 1. Function Declaration: Create a function named `greet` that logs "Hello, World!" to the console.
function greet() {
	console.log("Hello, World!");
  }
  greet();
  
  // 2. Function Expression: Define a function named `add` that takes two numbers and returns their sum.
  const add = function (a, b) {
	return a + b;
  };
  console.log(add(5, 3)); // 8
  
  // 3. Arrow Function: Write an arrow function named `multiply` that takes two numbers and returns their product.
  const multiply = (a, b) => a * b;
  console.log(multiply(4, 2)); // 8
  
  // 4. Function with Parameters: Create a function named `subtract` that takes two parameters and returns the difference.
  function subtract(a, b) {
	return a - b;
  }
  console.log(subtract(10, 5)); // 5
  
  // 5. Function with Return Value: Write a function named `divide` that returns the division of two numbers.
  function divide(a, b) {
	return a / b;
  }
  console.log(divide(20, 4)); // 5
  
  // 6. Default Parameters: Create a function named `greetUser` with a default parameter value "Guest".
  function greetUser(name = "Guest") {
	console.log(`Hello, ${name}!`);
  }
  greetUser(); // Hello, Guest!
  greetUser("Alice"); // Hello, Alice!
  
  // 7. Scope: Demonstrate function scope by declaring a variable inside a function and trying to access it outside.
  function scopeTest() {
	let localVar = "I'm local";
	console.log(localVar); // Works
  }
  scopeTest();
  // console.log(localVar); // Error: localVar is not defined
  
  // 8. Global vs Local Scope: Define a global and a local variable with the same name.
  let name = "Global Name";
  function showName() {
	let name = "Local Name";
	console.log(name); // Local Name
  }
  showName();
  console.log(name); // Global Name
  
  // 9. Recursion: Write a recursive function named `countdown` that logs numbers from a given number down to 1.
  function countdown(num) {
	if (num <= 0) return;
	console.log(num);
	countdown(num - 1);
  }
  countdown(5);
  
  // 10. Higher-Order Function: Create a function named `operate` that takes two numbers and a function.
  function operate(a, b, func) {
	return func(a, b);
  }
  console.log(operate(3, 4, add)); // 7
  
  // 11. Function Returning Function: Write a function named `createMultiplier`.
  function createMultiplier(multiplier) {
	return function (num) {
	  return num * multiplier;
	};
  }
  const double = createMultiplier(2);
  console.log(double(5)); // 10
  
  // 12. Validator Function: Create a function named `isValidString`.
  function isValidString(str) {
	return typeof str === "string" && str.trim() !== "";
  }
  console.log(isValidString("Hello")); // true
  
  // 13. Boolean Transformer: Write a function named `toBoolean`.
  function toBoolean(input) {
	return input.toLowerCase() === "yes";
  }
  console.log(toBoolean("Yes")); // true
  
  // 14. Array Iteration with forEach: Use `forEach` to iterate over an array.
  const arr = [1, 2, 3, 4, 5];
  arr.forEach(num => console.log(num));
  
  // 15. Array Filtering: Use `filter` to create a new array.
  const filteredArr = arr.filter(num => num > 2);
  console.log(filteredArr); // [3, 4, 5]
  
  // 16. Finding an Item: Use `find` to locate a specific item in an array.
  const people = [{ name: "John" }, { name: "Jane" }];
  const person = people.find(p => p.name === "Jane");
  console.log(person); // { name: "Jane" }
  
  // 17. Using includes: Check if an array includes a specific value.
  console.log(arr.includes(3)); // true
  
  // 18. Switch Case in Function: Write a function with a `switch` statement.
  function getGreeting(hour) {
	switch (true) {
	  case hour < 12:
		return "Good Morning";
	  case hour < 18:
		return "Good Afternoon";
	  default:
		return "Good Evening";
	}
  }
  console.log(getGreeting(15)); // Good Afternoon
  
  // 19. Nested Functions: Create a function named `outerFunction`.
  function outerFunction() {
	function innerFunction() {
	  console.log("I'm the inner function");
	}
	innerFunction();
  }
  outerFunction();
  
  // 20. Anonymous Function: Use an anonymous function in an example.
  setTimeout(function () {
	console.log("This is an anonymous function");
  }, 1000);
  
  // 21. Arrow Function and this: Show how `this` behaves differently.
  const obj = {
	name: "John",
	regularFunction: function () {
	  console.log(this.name); // John
	},
	arrowFunction: () => {
	  console.log(this.name); // undefined or global `this`
	}
  };
  obj.regularFunction();
  obj.arrowFunction();
  
  // 22. Function Composition: Combine two functions.
  const square = x => x * x;
  const doubleThenSquare = x => square(double(x));
  console.log(doubleThenSquare(3)); // 36
  
  // 23. Callback Function: Write a function that takes a callback.
  function executeCallback(callback) {
	console.log("Before callback");
	callback();
	console.log("After callback");
  }
  executeCallback(() => console.log("This is the callback"));
  
  // 24. Immediate Function: Use an IIFE.
  (function () {
	console.log("This is an IIFE");
  })();
  
  // 25. Memoization: Create a simple memoization function.
  function memoize(fn) {
	const cache = {};
	return function (arg) {
	  if (cache[arg]) {
		return cache[arg];
	  } else {
		const result = fn(arg);
		cache[arg] = result;
		return result;
	  }
	};
  }
  const squareMemo = memoize(x => x * x);
  console.log(squareMemo(4)); // 16
  console.log(squareMemo(4)); // Cached 16
  