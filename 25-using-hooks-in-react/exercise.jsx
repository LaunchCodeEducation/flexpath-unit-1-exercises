// Exercise 1: Create a counter component using useState
import { useState } from 'react';
function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
export default Counter;

// Exercise 2: Fetch and display data using useEffect
import { useEffect, useState } from 'react';
function FetchData() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(json => setData(json));
    }, []);
    return <div>{data ? data.title : "Loading..."}</div>;
}
export default FetchData;

// Exercise 3: Build a simple form using useState
import { useState } from 'react';
function SimpleForm() {
    const [name, setName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Name: ${name}`);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Enter your name" 
            />
            <button type="submit">Submit</button>
        </form>
    );
}
export default SimpleForm;

// Exercise 4: Implement a toggle button using useReducer
import { useReducer } from 'react';
function reducer(state) {
    return !state;
}
function ToggleButton() {
    const [isOn, toggle] = useReducer(reducer, false);
    return (
        <button onClick={toggle}>
            {isOn ? "ON" : "OFF"}
        </button>
    );
}
export default ToggleButton;

// Exercise 5: Create a theme toggler using Context API
import { createContext, useContext, useState } from 'react';
const ThemeContext = createContext();
function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
function ThemeToggler() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <button onClick={toggleTheme}>
            Current theme: {theme}
        </button>
    );
}
export { ThemeProvider, ThemeToggler };

// Exercise 6: Create a memoized component using React.memo
import { memo } from 'react';
const MemoizedComponent = memo(({ value }) => {
    console.log("Rendered!");
    return <div>Value: {value}</div>;
});
export default MemoizedComponent;

// Exercise 7: Optimize a callback function using useCallback
import { useState, useCallback } from 'react';
function UseCallbackExample() {
    const [count, setCount] = useState(0);
    const increment = useCallback(() => setCount(count + 1), [count]);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}
export default UseCallbackExample;

// Exercise 8: Access a DOM element using useRef
import { useRef } from 'react';
function FocusInput() {
    const inputRef = useRef();
    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={() => inputRef.current.focus()}>Focus Input</button>
        </div>
    );
}
export default FocusInput;

// Exercise 9: Track component renders using useRef
import { useRef, useEffect } from 'react';
function RenderCounter() {
    const renderCount = useRef(0);
    useEffect(() => {
        renderCount.current += 1;
    });
    return <p>Render Count: {renderCount.current}</p>;
}
export default RenderCounter;

// Exercise 10: Create an error boundary using class components
import { Component } from 'react';
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }
    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}
export default ErrorBoundary;

// Exercise 11: Use useParams to display data based on URL parameters
import { useParams } from 'react-router-dom';
function UserDetail() {
    const { id } = useParams();
    return <div>User ID: {id}</div>;
}
export default UserDetail;

// Exercise 12: Implement navigation using useNavigate
import { useNavigate } from 'react-router-dom';
function NavigateButton() {
    const navigate = useNavigate();
    return <button onClick={() => navigate('/home')}>Go to Home</button>;
}
export default NavigateButton;

// Exercise 13: Implement a countdown timer using useEffect
import { useEffect, useState } from 'react';
function CountdownTimer({ initialCount }) {
    const [count, setCount] = useState(initialCount);
    useEffect(() => {
        if (count <= 0) return;
        const timer = setInterval(() => setCount(c => c - 1), 1000);
        return () => clearInterval(timer);
    }, [count]);
    return <div>Countdown: {count}</div>;
}
export default CountdownTimer;

// Exercise 14: Create a loading spinner using useState
import { useState } from 'react';
function LoadingSpinner() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);
    return loading ? <div className="spinner">Loading...</div> : <p>Data loaded!</p>;
}
export default LoadingSpinner;

// Continue with Exercises 15-20...

// Note: Due to space constraints, I’ve provided the first 14 exercises and solutions.
// Let me know if you need the complete set of 20 or have any questions.
// Exercise 15: Build a custom hook to fetch data
import { useEffect, useState } from 'react';
function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, [url]);

    return { data, loading };
}
export default useFetch;

// Exercise 16: Use useMemo to memoize an expensive calculation
import { useMemo, useState } from 'react';
function ExpensiveCalculation({ num }) {
    const calculate = (n) => {
        console.log("Calculating...");
        return n * 2;
    };
    const result = useMemo(() => calculate(num), [num]);
    return <div>Result: {result}</div>;
}
export default ExpensiveCalculation;

// Exercise 17: Implement a theme switcher using Context API
import { createContext, useContext, useState } from 'react';
const ThemeContext = createContext();
function ThemeSwitcher() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <button onClick={toggleTheme}>
            Switch to {theme === "light" ? "dark" : "light"} mode
        </button>
    );
}
function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
export { ThemeSwitcher, ThemeProvider };

// Exercise 18: Use useLayoutEffect to measure an element's size
import { useLayoutEffect, useRef, useState } from 'react';
function MeasureElement() {
    const elementRef = useRef();
    const [size, setSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        const { width, height } = elementRef.current.getBoundingClientRect();
        setSize({ width, height });
    }, []);

    return (
        <div>
            <div ref={elementRef} style={{ width: "200px", height: "100px" }}>
                Measure me
            </div>
            <p>Width: {size.width}, Height: {size.height}</p>
        </div>
    );
}
export default MeasureElement;

// Exercise 19: Create a to-do list with add and remove functionality
import { useState } from 'react';
function TodoList() {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');

    const addTask = () => {
        setTodos([...todos, task]);
        setTask('');
    };

    const removeTask = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <div>
            <input 
                type="text" 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
                placeholder="Add a task" 
            />
            <button onClick={addTask}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo} <button onClick={() => removeTask(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default TodoList;

// Exercise 20: Implement client-side routing using React Router
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
function Home() {
    return <h2>Home Page</h2>;
}
function About() {
    return <h2>About Page</h2>;
}
function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </Switch>
        </Router>
    );
}
export default App;
