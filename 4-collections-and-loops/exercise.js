// 1. Arrays: Create an array of five numbers and log the array.
let numbers = [10, 20, 30, 40, 50];
console.log(numbers);

// 2. Array Length: Log the length of the numbers array.
console.log(numbers.length);

// 3. Access Array Elements: Log the first and last elements of the numbers array.
console.log(numbers[0]); // First element
console.log(numbers[numbers.length - 1]); // Last element

// 4. Add to Array: Use push() to add a number to the end of the array and log it.
numbers.push(60);
console.log(numbers);

// 5. Add to Beginning: Use unshift() to add a number to the beginning of the array.
numbers.unshift(5);
console.log(numbers);

// 6. Remove from Array: Use pop() to remove the last item and log the modified array.
numbers.pop();
console.log(numbers);

// 7. Remove from Beginning: Use shift() to remove the first item and log the modified array.
numbers.shift();
console.log(numbers);

// 8. Array Includes: Check if the number 30 is in the array and log the result.
console.log(numbers.includes(30));

// 9. Array Index: Use indexOf() to find the position of 40 in the array.
console.log(numbers.indexOf(40));

// 10. Splice Array: Use splice() to remove the second item in the array.
numbers.splice(1, 1);
console.log(numbers);

// 11. Maps: Create a map with three key-value pairs and log the map.
let userMap = new Map();
userMap.set("name", "John");
userMap.set("age", 25);
userMap.set("isMember", true);
console.log(userMap);

// 12. Get from Map: Retrieve and log the value associated with the key "name".
console.log(userMap.get("name"));

// 13. Delete from Map: Delete the key "age" and log the map.
userMap.delete("age");
console.log(userMap);

// 14. Map Size: Log the size of the map.
console.log(userMap.size);

// 15. Sets: Create a set with three unique values and log the set.
let uniqueNumbers = new Set();
uniqueNumbers.add(1);
uniqueNumbers.add(2);
uniqueNumbers.add(3);
console.log(uniqueNumbers);

// 16. Add to Set: Try to add a duplicate value and log the set.
uniqueNumbers.add(2);
console.log(uniqueNumbers); // Should still have three values

// 17. Set Size: Log the size of the set.
console.log(uniqueNumbers.size);

// 18. Check Set: Use has() to check if the set contains the number 1.
console.log(uniqueNumbers.has(1));

// 19. Delete from Set: Remove a value from the set and log it.
uniqueNumbers.delete(3);
console.log(uniqueNumbers);

// 20. While Loop: Use a while loop to log numbers from 1 to 5.
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// 21. Do-While Loop: Use a do-while loop to log numbers from 5 to 1.
let j = 5;
do {
  console.log(j);
  j--;
} while (j > 0);

// 22. For Loop: Use a for loop to iterate over the numbers array and log each item.
for (let k = 0; k < numbers.length; k++) {
  console.log(numbers[k]);
}

// 23. For-Of Loop: Use a for-of loop to iterate over the numbers array and log each item.
for (let num of numbers) {
  console.log(num);
}

// 24. For-In Loop: Create an object and use a for-in loop to log each key and value.
let person = { name: "Alice", age: 30, city: "Paris" };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// 25. Break and Continue: Use a loop to log numbers from 1 to 10, skipping 5 and stopping at 8.
for (let x = 1; x <= 10; x++) {
  if (x === 5) continue;
  if (x === 8) break;
  console.log(x);
}
