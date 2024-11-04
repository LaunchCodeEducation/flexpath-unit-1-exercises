// Exercise 1: Write a Jest test for a simple function
function add(a, b) {
    return a + b;
}
// Jest Test
test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

// Exercise 2: Group related tests using describe
describe('Math operations', () => {
    test('should multiply two numbers', () => {
        expect(2 * 3).toBe(6);
    });
    test('should divide two numbers', () => {
        expect(6 / 3).toBe(2);
    });
});

// Exercise 3: Test an object using toEqual
const user = { name: 'John', age: 30 };
test('user object', () => {
    expect(user).toEqual({ name: 'John', age: 30 });
});

// Exercise 4: Use beforeEach to set up test data
let data;
beforeEach(() => {
    data = { value: 0 };
});
test('increments value', () => {
    data.value += 1;
    expect(data.value).toBe(1);
});

// Exercise 5: Write a Jest test using toContain
const fruits = ['apple', 'banana', 'cherry'];
test('array contains banana', () => {
    expect(fruits).toContain('banana');
});

// Exercise 6: Use toBeTruthy for Boolean values
test('true is truthy', () => {
    expect(true).toBeTruthy();
});

// Exercise 7: Test a function that throws an error
function throwError() {
    throw new Error('This is an error');
}
test('throws an error', () => {
    expect(() => throwError()).toThrow('This is an error');
});

// Exercise 8: Create a mock function and test calls
const mockFn = jest.fn();
mockFn('hello');
test('mock function called with hello', () => {
    expect(mockFn).toHaveBeenCalledWith('hello');
});

// Exercise 9: Test a simple async function using async/await
async function fetchData() {
    return 'data';
}
test('fetches data successfully', async () => {
    const data = await fetchData();
    expect(data).toBe('data');
});

// Exercise 10: Mock a function using jest.fn()
const mockCallback = jest.fn(x => x * 2);
test('mock callback multiplies by 2', () => {
    expect(mockCallback(2)).toBe(4);
    expect(mockCallback).toHaveBeenCalledTimes(1);
});

// Exercise 11: Test a promise using resolves
const asyncPromise = Promise.resolve('resolved');
test('promise resolves', () => {
    return expect(asyncPromise).resolves.toBe('resolved');
});

// Exercise 12: Use rejects to test a failed promise
const failedPromise = Promise.reject('error');
test('promise rejects', () => {
    return expect(failedPromise).rejects.toBe('error');
});

// Exercise 13: Use mockImplementation for custom mock behavior
const mockMath = jest.fn().mockImplementation(() => 42);
test('custom mock implementation', () => {
    expect(mockMath()).toBe(42);
});

// Exercise 14: Test an API call with fetch
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ message: 'success' })
    })
);
test('fetch data from API', async () => {
    const res = await fetch();
    const data = await res.json();
    expect(data.message).toBe('success');
});

// Exercise 15: Test using beforeAll and afterAll
beforeAll(() => console.log('Start tests'));
afterAll(() => console.log('End tests'));
test('simple test', () => {
    expect(1 + 1).toBe(2);
});

// Exercise 16: Test a function that returns a function
function multiplier(x) {
    return function(y) {
        return x * y;
    };
}
test('multiplier function', () => {
    const double = multiplier(2);
    expect(double(4)).toBe(8);
});

// Exercise 17: Use toBeFalsy for false values
test('0 is falsy', () => {
    expect(0).toBeFalsy();
});

// Exercise 18: Test a simple DOM interaction using Jest
document.body.innerHTML = '<div id="app">Hello</div>';
test('checks inner HTML', () => {
    const app = document.getElementById('app');
    expect(app.innerHTML).toBe('Hello');
});

// Exercise 19: Mock a module and test its functionality
jest.mock('./myModule', () => ({
    fetchData: jest.fn(() => 'mocked data')
}));
const { fetchData } = require('./myModule');
test('fetchData returns mocked data', () => {
    expect(fetchData()).toBe('mocked data');
});

// Exercise 20: Use spyOn to monitor a function call
const math = {
    add: (a, b) => a + b
};
jest.spyOn(math, 'add');
test('spy on add function', () => {
    math.add(1, 2);
    expect(math.add).toHaveBeenCalledWith(1, 2);
});

// Exercise 21: Test for array sparseness with toStrictEqual
const arr = [1, , 3];
test('checks for sparse array', () => {
    expect(arr).not.toStrictEqual([1, undefined, 3]);
});

// Exercise 22: Use a manual mock to replace a dependency
jest.mock('fs', () => ({
    readFileSync: jest.fn(() => 'mocked content')
}));
const fs = require('fs');
test('reads mocked file content', () => {
    expect(fs.readFileSync()).toBe('mocked content');
});

// Exercise 23: Use async/await with .resolves
async function asyncFunc() {
    return 'hello';
}
test('async function resolves', async () => {
    await expect(asyncFunc()).resolves.toBe('hello');
});

// Exercise 24: Test with a try-catch for async errors
async function failAsync() {
    throw new Error('Failed');
}
test('handles async error', async () => {
    try {
        await failAsync();
    } catch (e) {
        expect(e.message).toBe('Failed');
    }
});

// Exercise 25: Mock Date object
const RealDate = Date;
beforeEach(() => {
    global.Date = jest.fn(() => new RealDate('2020-01-01T00:00:00Z'));
});
afterEach(() => {
    global.Date = RealDate;
});
test('mocks Date object', () => {
    expect(new Date().toISOString()).toBe('2020-01-01T00:00:00.000Z');
});

// Exercise 26: Test a regular expression using toMatch
test('email format validation', () => {
    const email = 'test@example.com';
    expect(email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
});

// Exercise 27: Test a function with multiple async calls
async function fetchTwo() {
    const [a, b] = await Promise.all([Promise.resolve(1), Promise.resolve(2)]);
    return a + b;
}
test('fetches two values', async () => {
    const result = await fetchTwo();
    expect(result).toBe(3);
});

// Exercise 28: Use toHaveBeenCalledTimes
const mockFunction = jest.fn();
mockFunction();
mockFunction();
test('function called twice', () => {
    expect(mockFunction).toHaveBeenCalledTimes(2);
});

// Exercise 29: Test a timeout using fake timers
jest.useFakeTimers();
test('setTimeout test', () => {
    const callback = jest.fn();
    setTimeout(callback, 1000);
    jest.runAllTimers();
    expect(callback).toHaveBeenCalled();
});

// Exercise 30: Write a test using .toStrictEqual
const obj1 = { key: 'value' };
const obj2 = { key: 'value' };
test('objects are strictly equal', () => {
    expect(obj1).toStrictEqual(obj2);
});
