// Exercise 1: Create a counter using useState
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

// Exercise 2: Fetch data and display it using useEffect
import { useEffect, useState } from 'react';
function FetchData() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(json => {
                setData(json);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {loading ? "Loading..." : <h3>{data.title}</h3>}
        </div>
    );
}
export default FetchData;

// Exercise 3: Use useReducer to manage complex state
import { useReducer } from 'react';
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
}
function CounterWithReducer() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </div>
    );
}
export default CounterWithReducer;

// Exercise 4: Create a theme toggle using Context API
import { createContext, useContext, useState } from 'react';
const ThemeContext = createContext();
function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
function ThemeToggle() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <button onClick={toggleTheme}>
            Current Theme: {theme}
        </button>
    );
}
export { ThemeProvider, ThemeToggle };

// Exercise 5: Use useRef to focus an input element
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

// Exercise 6: Implement a loading spinner with useState
import { useState, useEffect } from 'react';
function LoadingSpinner() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return loading ? <div className="spinner">Loading...</div> : <p>Data Loaded!</p>;
}
export default LoadingSpinner;

// Exercise 7: Memoize a component with React.memo
import { memo } from 'react';
const MemoizedComponent = memo(({ value }) => {
    console.log("Rendered!");
    return <div>Value: {value}</div>;
});
export default MemoizedComponent;

// Exercise 8: Optimize a function using useCallback
import { useState, useCallback } from 'react';
function CounterWithCallback() {
    const [count, setCount] = useState(0);
    const increment = useCallback(() => setCount(count + 1), [count]);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}
export default CounterWithCallback;

// Exercise 9: Implement a simple form with useState
import { useState } from 'react';
function SimpleForm() {
    const [input, setInput] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Form submitted with: ${input}`);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter text"
            />
            <button type="submit">Submit</button>
        </form>
    );
}
export default SimpleForm;

// Exercise 10: Handle errors in a component using ErrorBoundary
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

// Continue with Exercises 11-20...

// Note: I have provided the first 10 exercises. Let me know if you need the full set of 20 exercises or any additional assistance.
// Exercise 11: Use useParams to display data based on URL parameters
import { useParams } from 'react-router-dom';
function UserProfile() {
    const { userId } = useParams();
    return <div>User ID: {userId}</div>;
}
export default UserProfile;

// Exercise 12: Implement navigation using useNavigate
import { useNavigate } from 'react-router-dom';
function NavigationButton() {
    const navigate = useNavigate();
    return <button onClick={() => navigate('/home')}>Go to Home</button>;
}
export default NavigationButton;

// Exercise 13: Create a countdown timer using useEffect
import { useEffect, useState } from 'react';
function Countdown({ initialCount }) {
    const [count, setCount] = useState(initialCount);
    useEffect(() => {
        if (count <= 0) return;
        const timer = setInterval(() => setCount(c => c - 1), 1000);
        return () => clearInterval(timer);
    }, [count]);
    return <div>Countdown: {count}</div>;
}
export default Countdown;

// Exercise 14: Use useLayoutEffect to measure an element's size
import { useLayoutEffect, useRef, useState } from 'react';
function MeasureSize() {
    const elementRef = useRef();
    const [size, setSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        const { width, height } = elementRef.current.getBoundingClientRect();
        setSize({ width, height });
    }, []);

    return (
        <div>
            <div ref={elementRef} style={{ width: "200px", height: "100px" }}>
                Measure my size
            </div>
            <p>Width: {size.width}, Height: {size.height}</p>
        </div>
    );
}
export default MeasureSize;

// Exercise 15: Implement a protected route using React Router
import { Route, Navigate } from 'react-router-dom';
function ProtectedRoute({ isAuthenticated, children }) {
    return isAuthenticated ? children : <Navigate to="/login" />;
}
export default ProtectedRoute;

// Exercise 16: Build a to-do list with add and remove functionality
import { useState } from 'react';
function TodoApp() {
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
                placeholder="New task"
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
export default TodoApp;

// Exercise 17: Use useMemo to optimize a list rendering
import { useMemo, useState } from 'react';
function OptimizedList({ items }) {
    const sortedItems = useMemo(() => {
        console.log("Sorting items...");
        return items.sort();
    }, [items]);
    return (
        <ul>
            {sortedItems.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}
export default OptimizedList;

// Exercise 18: Create a custom hook for form handling
import { useState } from 'react';
function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    return [values, handleChange];
}
function FormComponent() {
    const [formValues, handleInputChange] = useForm({ name: '', email: '' });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                placeholder="Name"
            />
            <input
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                placeholder="Email"
            />
            <button type="submit">Submit</button>
        </form>
    );
}
export default FormComponent;

// Exercise 19: Build a modal component with a close button
import { useState } from 'react';
function Modal({ show, onClose }) {
    if (!show) return null;
    return (
        <div className="modal">
            <div className="modal-content">
                <button onClick={onClose}>Close</button>
                <p>This is a modal</p>
            </div>
        </div>
    );
}
function App() {
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <button onClick={() => setShowModal(true)}>Open Modal</button>
            <Modal show={showModal} onClose={() => setShowModal(false)} />
        </div>
    );
}
export default App;

// Exercise 20: Create a simple pagination component
import { useState } from 'react';
function Pagination({ items, itemsPerPage }) {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const currentItems = items.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div>
            <ul>
                {currentItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
}
export default Pagination;
