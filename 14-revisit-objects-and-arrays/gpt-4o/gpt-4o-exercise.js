// Exercise 1: Create an object using object literal syntax
const person = { name: 'John', age: 30, location: 'New York' };
console.log(person);

// Exercise 2: Access and update object properties
person.age = 31;
console.log(person['location']);

// Exercise 3: Create a method in an object that uses `this`
const car = {
    brand: 'Toyota',
    model: 'Camry',
    getDetails: function() {
        return `${this.brand} ${this.model}`;
    }
};
console.log(car.getDetails());

// Exercise 4: Use `Object.create` to create an object with a prototype
const animal = { type: 'Mammal' };
const dog = Object.create(animal);
dog.name = 'Buddy';
console.log(dog.type); // Inherited property

// Exercise 5: Demonstrate objects are passed by reference
function modifyObject(obj) {
    obj.newProp = 'Added';
}
const myObj = { originalProp: 'Original' };
modifyObject(myObj);
console.log(myObj);

// Exercise 6: Use `Object.freeze` and attempt to modify properties
const frozenObj = Object.freeze({ key: 'value' });
frozenObj.key = 'newValue'; // No effect
console.log(frozenObj.key);

// Exercise 7: Use `Object.seal` and try adding or deleting properties
const sealedObj = Object.seal({ name: 'Alice' });
sealedObj.name = 'Bob'; // Can modify
delete sealedObj.name; // Can't delete
console.log(sealedObj);

// Exercise 8: Enumerate object properties using `for...in` and `Object.keys`
const book = { title: '1984', author: 'George Orwell' };
for (let key in book) {
    console.log(key, book[key]);
}
console.log(Object.keys(book));

// Exercise 9: Use `Object.assign` to create a shallow copy
const original = { a: 1, b: { c: 2 } };
const shallowCopy = Object.assign({}, original);
shallowCopy.b.c = 42;
console.log(original.b.c); // Both objects share the nested reference

// Exercise 10: Create an array using literal syntax and access elements
const numbers = [10, 20, 30];
console.log(numbers[1]);

// Exercise 11: Use `push` and `pop` methods
numbers.push(40);
console.log(numbers);
numbers.pop();
console.log(numbers);

// Exercise 12: Use `shift` and `unshift` methods
numbers.unshift(5);
console.log(numbers);
numbers.shift();
console.log(numbers);

// Exercise 13: Check if a variable is an array
console.log(Array.isArray(numbers)); // true

// Exercise 14: Use `splice` to remove elements from the middle
const fruits = ['apple', 'banana', 'cherry'];
fruits.splice(1, 1); // Removes 'banana'
console.log(fruits);

// Exercise 15: Use `slice` to create a new array
const slicedFruits = fruits.slice(0, 1);
console.log(slicedFruits);

// Exercise 16: Combine two arrays using `concat` and spread operator
const moreFruits = ['grape', 'orange'];
const combined = fruits.concat(moreFruits);
console.log(combined);
const combinedSpread = [...fruits, ...moreFruits];
console.log(combinedSpread);

// Exercise 17: Clone an array using the spread operator
const clonedArray = [...numbers];
console.log(clonedArray);

// Exercise 18: Use `Array.from` to create an array from a string
const chars = Array.from('hello');
console.log(chars);

// Exercise 19: Use `forEach` to iterate over an array
numbers.forEach(num => console.log(num));

// Exercise 20: Use `map` to create a new array with modified elements
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// Exercise 21: Use `filter` to create a new array with elements that satisfy a condition
const filtered = numbers.filter(num => num > 15);
console.log(filtered);

// Exercise 22: Use `reduce` to sum up numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

// Exercise 23: Sort an array of numbers
const unsorted = [30, 10, 20];
unsorted.sort((a, b) => a - b); // Ascending
console.log(unsorted);
unsorted.sort((a, b) => b - a); // Descending
console.log(unsorted);

// Exercise 24: Use `find` to locate the first element that matches a condition
const found = numbers.find(num => num > 15);
console.log(found);

// Exercise 25: Use `some` and `every` to check conditions
console.log(numbers.some(num => num > 25)); // true
console.log(numbers.every(num => num > 5)); // true

// Exercise 26: Use `includes` to check if an array contains a specific element
console.log(numbers.includes(20)); // true

// Exercise 27: Use `join` to convert an array into a string
console.log(fruits.join(', '));

// Exercise 28: Use `split` to convert a string into an array
const sentence = 'hello world';
const words = sentence.split(' ');
console.log(words);

// Exercise 29: Create a function that returns a deep copy of an object
function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}
const deepCloned = deepCopy(original);
console.log(deepCloned);

// Exercise 30: Merge two objects and handle nested objects
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2, nested: { ...obj1.nested, ...obj2.nested } };
}
const merged = mergeObjects({ a: 1, nested: { x: 1 } }, { b: 2, nested: { y: 2 } });
console.log(merged);
