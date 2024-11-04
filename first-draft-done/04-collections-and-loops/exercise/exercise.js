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
    
		Arrays: 
		
		Create an array of five numbers and log the array.
		Then, Log the length of the numbers array.
    
  
  */
  // CODE IN THE OPEN LINES BELOW
  let numbers = [10, 20, 30, 40, 50];
  console.log(numbers);
  console.log(numbers.length);
  // Enter your code in the empty lines ABOVE
}

export function exercise_02() {
  /* 
   
    Exercise 2

		Access Array Elements: 
    
    Create an array of five numbers.
		Log the first and last elements of the numbers array.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let numbers = [10, 20, 30, 40, 50];
  console.log(numbers[0]); // First element
  console.log(numbers[numbers.length - 1]); // Last element
  // Enter your code in the empty lines ABOVE
}

export function exercise_03() {
  /* 
   
    Exercise 3
    
    Add to Array: 
		
		Create an empty array
		Use push() to add a number to the end of the array five times.
		Then, log the array
  
  */
  // CODE IN THE OPEN LINES BELOW
  const arr = [];
  arr.push(10);
  arr.push(20);
  arr.push(40);
  arr.push(50);
  arr.push(60);
  console.log(arr);
  // Enter your code in the empty lines ABOVE
}

export function exercise_04() {
  /* 
   
    Exercise 4

    Add to Beginning: 
		
		Copy the array defined in exercise_02 and paste it below. 
		Use unshift() to add a number to the beginning of the array.
    
  
  */
  // CODE IN THE OPEN LINES BELOW
  let numbers = [10, 20, 30, 40, 50];
  numbers.unshift(5);
  console.log(numbers);
  // Enter your code in the empty lines ABOVE
}

export function exercise_05() {
  /* 
   
    Exercise 5
    
    Remove from Array: 

		Copy the array defined in exercise_02 and paste it below. 
		
		Use pop() to remove the last item and log the modified array.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let numbers = [10, 20, 30, 40, 50];
  numbers.pop();
  console.log(numbers);
  // Enter your code in the empty lines ABOVE
}

export function exercise_06() {
  /* 
   
    Exercise 6
    
    Remove from Beginning: 
		
		Copy the array defined in exercise_02 and paste it below.
		Use shift() to remove the first item and log the modified array.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let numbers = [10, 20, 30, 40, 50];
  numbers.shift();
  console.log(numbers);
  // Enter your code in the empty lines ABOVE
}

export function exercise_07() {
  /* 
   
    Exercise 7
    
    Copy the array defined in exercise_02 and paste it below.
		Check if the number 30 is in the array and log the result.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let numbers = [10, 20, 30, 40, 50];
  console.log(numbers.includes(30));
  // Enter your code in the empty lines ABOVE
}

export function exercise_08() {
  /* 
   
    Exercise 8
    
    Array Index: 
		
		Copy the array defined in exercise_02 and paste it below.
		Use indexOf() to find the position of 40 in the array.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let numbers = [10, 20, 30, 40, 50];
  console.log(numbers.indexOf(40));
  // Enter your code in the empty lines ABOVE
}

export function exercise_09() {
  /* 
   
    Exercise 9
    
    Splice Array: 
		
		Copy the array defined in exercise_02 and paste it below.
		Use splice() to remove the second item in the array.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let numbers = [10, 20, 30, 40, 50];
  numbers.splice(1, 1);
  console.log(numbers);
  // Enter your code in the empty lines ABOVE
}

export function exercise_10() {
  /* 
   
    Exercise 10

    Maps: 
		
		Create a map with three key-value pairs and log the map.
    
  
  */
  // CODE IN THE OPEN LINES BELOW
  let userMap = new Map();
  userMap.set("name", "John");
  userMap.set("age", 25);
  userMap.set("isMember", true);
  console.log(userMap);
  // Enter your code in the empty lines ABOVE
}

export function exercise_11() {
  /* 
   
    Exercise 11
    
    Get from Map: 
		
		Copy the Map creation and key-value pair setting code from exercise_10 and paste it below.
		Retrieve and log the value associated with the key "name".
  
  */
  // CODE IN THE OPEN LINES BELOW
  let userMap = new Map();
  userMap.set("name", "John");
  userMap.set("age", 25);
  userMap.set("isMember", true);
  console.log(userMap.get("name"));
  // Enter your code in the empty lines ABOVE
}

export function exercise_12() {
  /* 
   
    Exercise 12
    
    Delete from Map:
		 
		Copy the Map creation and key-value pair setting code from exercise_10 and paste it below.
		Delete the key "age" and log the map.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let userMap = new Map();
  userMap.set("name", "John");
  userMap.set("age", 25);
  userMap.set("isMember", true);
  userMap.delete("age");
  console.log(userMap);
  // Enter your code in the empty lines ABOVE
}

export function exercise_13() {
  /* 
   
    Exercise 13
    
    Map Size: 
		
		Copy the Map creation and key-value pair setting code from exercise_10 and paste it below.
		Log the size of the map.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let userMap = new Map();
  userMap.set("name", "John");
  userMap.set("age", 25);
  userMap.set("isMember", true);
  console.log(userMap.size);
  // Enter your code in the empty lines ABOVE
}

export function exercise_14() {
  /* 
   
    Exercise 14
    
    Sets: 
		
		Create a set with three unique values and log the set.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let uniqueNumbers = new Set();
  uniqueNumbers.add(1);
  uniqueNumbers.add(2);
  uniqueNumbers.add(3);
  console.log(uniqueNumbers);
  // Enter your code in the empty lines ABOVE
}

export function exercise_15() {
  /* 
   
    Exercise 15
    
		Add to Set: 
		Copy the Set creation and value adding code from exercise_14 and paste it below.
		Try to add a duplicate value and log the set.
    
  
  */
  // CODE IN THE OPEN LINES BELOW
  let uniqueNumbers = new Set();
  uniqueNumbers.add(1);
  uniqueNumbers.add(2);
  uniqueNumbers.add(3);
  uniqueNumbers.add(2);
  console.log(uniqueNumbers); // Should still have three values
  // Enter your code in the empty lines ABOVE
}

export function exercise_16() {
  /* 
   
    Exercise 16
    
    Set Size: 
		
		Copy the Set creation and value adding code from exercise_14 and paste it below.
		Log the size of the set.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let uniqueNumbers = new Set();
  uniqueNumbers.add(1);
  uniqueNumbers.add(2);
  uniqueNumbers.add(3);

  uniqueNumbers.add(2);
  console.log(uniqueNumbers.size);
  // Enter your code in the empty lines ABOVE
}

export function exercise_17() {
  /* 
   
    Exercise 17
    
		Check Set: 

		Copy the Set creation and value adding code from exercise_14 and paste it below.
		Use has() to check if the set contains the number 1.

  */
  // CODE IN THE OPEN LINES BELOW
  let uniqueNumbers = new Set();
  uniqueNumbers.add(1);
  uniqueNumbers.add(2);
  uniqueNumbers.add(3);
  console.log(uniqueNumbers.has(1));
  // Enter your code in the empty lines ABOVE
}

export function exercise_18() {
  /* 
   
    Exercise 18

		Delete from Set: 
    
		Copy the Set creation and value adding code from exercise_14 and paste it below.
		Remove a value from the set and log it.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let uniqueNumbers = new Set();
  uniqueNumbers.add(1);
  uniqueNumbers.add(2);
  uniqueNumbers.add(3);
  uniqueNumbers.delete(3);
  console.log(uniqueNumbers);
  // Enter your code in the empty lines ABOVE
}

export function exercise_19() {
  /* 
   
    Exercise 19
    
		While Loop: 
		
		Use a while loop to log numbers from 1 to 5.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let i = 1;
  while (i <= 5) {
    console.log(i);
    i++;
  }
  // Enter your code in the empty lines ABOVE
}

export function exercise_20() {
  /* 
   
    Exercise 20
    
    Do-While Loop: 
		
		Use a do-while loop to log numbers from 5 to 1.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let j = 5;
  do {
    console.log(j);
    j--;
  } while (j > 0);
  // Enter your code in the empty lines ABOVE
}

export function exercise_21() {
  /* 
   
    Exercise 21
    
    For Loop: 

		Copy the array defined in exercise_02 and paste it below.
		Use a for loop to iterate over the numbers array and log each item.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let numbers = [10, 20, 30, 40, 50];
  for (let k = 0; k < numbers.length; k++) {
    console.log(numbers[k]);
  }
  // Enter your code in the empty lines ABOVE
}

export function exercise_22() {
  /* 
   
    Exercise 22
    
		For-Of Loop: 
		
    Copy the array defined in exercise_02 and paste it below.
		Use a for-of loop to iterate over the numbers array and log each item.
  
  */
  // CODE IN THE OPEN LINES BELOW
  for (let num of numbers) {
    console.log(num);
  }
  // Enter your code in the empty lines ABOVE
}

export function exercise_23() {
  /* 
   
    Exercise 23
    
    For-In Loop: 
		
		Create an object and use a for-in loop to log each key and value.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let person = { name: "Alice", age: 30, city: "Paris" };
  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  // Enter your code in the empty lines ABOVE
}

export function exercise_24() {
  /* 
   
    Exercise 24
    
    Break and Continue: 
		
		Use a loop to log numbers from 1 to 10, skipping 5 and stopping at 8.
  
  */
  // CODE IN THE OPEN LINES BELOW
  for (let x = 1; x <= 10; x++) {
    if (x === 5) continue;
    if (x === 8) break;
    console.log(x);
  }
  // Enter your code in the empty lines ABOVE
}
