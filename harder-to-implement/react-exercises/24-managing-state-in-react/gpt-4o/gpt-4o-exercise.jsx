// Exercise 1: Create a component that uses useState to toggle a boolean value
import { useState } from 'react';
function Toggle() {
    const [isToggled, setIsToggled] = useState(false);
    return (
        <button onClick={() => setIsToggled(!isToggled)}>
            {isToggled ? "ON" : "OFF"}
        </button>
    );
}
export default Toggle;

// Exercise 2: Use useEffect to fetch data from an API on component mount
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

// Exercise 3: Implement a controlled input component
import { useState } from 'react';
function ControlledInput() {
    const [value, setValue] = useState('');
    return (
        <input 
            type="text" 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
        />
    );
}
export default ControlledInput;

// Exercise 4: Create a custom hook to manage form state
import { useState } from 'react';
function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    return [values, handleChange];
}
export default useForm;

// Exercise 5: Use Context API to share a theme between components
import { createContext, useContext, useState } from 'react';
const ThemeContext = createContext();
function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
function ThemedComponent() {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div>
            <p>Current theme: {theme}</p>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                Toggle Theme
            </button>
        </div>
    );
}
export { ThemeProvider, ThemedComponent };

// Exercise 6: Implement an error boundary class component
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

// Exercise 7: Use useReducer to manage a counter state
import { useReducer } from 'react';
function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            return state;
    }
}
function Counter() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </div>
    );
}
export default Counter;

// Exercise 8: Create a component with useRef to manage focus on an input
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

// Exercise 9: Use useMemo to optimize a calculation
import { useMemo, useState } from 'react';
function ExpensiveCalculation({ num }) {
    const result = useMemo(() => {
        console.log("Calculating...");
        return num * 2;
    }, [num]);
    return <div>Result: {result}</div>;
}
export default ExpensiveCalculation;

// Exercise 10: Create a component that uses NavLink for active styling
import { NavLink } from 'react-router-dom';
function Navigation() {
    return (
        <nav>
            <NavLink to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/about" activeClassName="active">About</NavLink>
        </nav>
    );
}
export default Navigation;

// Continue with Exercises 11-30...

// Note: Due to space constraints, I’ve provided the first 10 exercises.
// Let me know if you’d like me to generate more or assist further!

// Exercise 11: Implement a simple login form with validation
import { useState } from 'react';
function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === '' || password === '') {
            setError('Both fields are required');
        } else {
            setError('');
            console.log('Logged in:', { username, password });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Login</button>
        </form>
    );
}
export default LoginForm;

// Exercise 12: Use useEffect to handle window resize events
import { useEffect, useState } from 'react';
function WindowResize() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <div>Window width: {width}px</div>;
}
export default WindowResize;

// Exercise 13: Implement a component with a loading spinner
import { useEffect, useState } from 'react';
function LoadingComponent() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {loading ? <div className="spinner">Loading...</div> : <p>Data loaded!</p>}
        </div>
    );
}
export default LoadingComponent;

// Exercise 14: Create a 404 page with React Router
import { Route, Switch } from 'react-router-dom';
function NotFound() {
    return <h1>404 - Page Not Found</h1>;
}
function App() {
    return (
        <Switch>
            <Route exact path="/" component={() => <h1>Home</h1>} />
            <Route path="*" component={NotFound} />
        </Switch>
    );
}
export default App;

// Exercise 15: Use useParams to fetch and display data based on URL parameters
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
function UserProfile() {
    const { userId } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(data => setUser(data));
    }, [userId]);

    return <div>{user ? user.name : "Loading..."}</div>;
}
export default UserProfile;

// Exercise 16: Create a component that uses useNavigate to redirect users
import { useNavigate } from 'react-router-dom';
function RedirectButton() {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate('/home')}>
            Go to Home
        </button>
    );
}
export default RedirectButton;

// Exercise 17: Implement a protected route using React Router
import { Route, Redirect } from 'react-router-dom';
function ProtectedRoute({ component: Component, isAuthenticated, ...rest }) {
    return (
        <Route 
            {...rest} 
            render={(props) => 
                isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
            } 
        />
    );
}
export default ProtectedRoute;

// Exercise 18: Create a component with lazy loading and Suspense
import { Suspense, lazy } from 'react';
const LazyLoadedComponent = lazy(() => import('./LazyLoadedComponent'));
function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LazyLoadedComponent />
        </Suspense>
    );
}
export default App;

// Exercise 19: Use useRef to create a stopwatch
import { useRef, useState } from 'react';
function Stopwatch() {
    const [time, setTime] = useState(0);
    const timerRef = useRef(null);

    const start = () => {
        if (!timerRef.current) {
            timerRef.current = setInterval(() => setTime(prev => prev + 1), 1000);
        }
    };

    const stop = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
    };

    const reset = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
        setTime(0);
    };

    return (
        <div>
            <p>Time: {time}s</p>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
export default Stopwatch;

// Exercise 20: Create a component that uses useLayoutEffect to log the element size
import { useLayoutEffect, useRef } from 'react';
function LayoutEffectComponent() {
    const elementRef = useRef();
    useLayoutEffect(() => {
        const { width, height } = elementRef.current.getBoundingClientRect();
        console.log('Width:', width, 'Height:', height);
    }, []);
    return <div ref={elementRef}>Measure my size!</div>;
}
export default LayoutEffectComponent;

// Exercise 21: Use PropTypes to validate props in a component
import PropTypes from 'prop-types';
function UserCard({ name, age }) {
    return (
        <div>
            <h1>{name}</h1>
            <p>Age: {age}</p>
        </div>
    );
}
UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
};
export default UserCard;

// Exercise 22: Create a component that uses a forwardRef
import { forwardRef } from 'react';
const CustomInput = forwardRef((props, ref) => {
    return <input ref={ref} {...props} />;
});
export default CustomInput;

// Exercise 23: Use useContext to build a simple theme toggler
import { createContext, useContext, useState } from 'react';
const ThemeContext = createContext();
function ThemeToggler() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <button onClick={toggleTheme}>
            Current theme: {theme === "light" ? "Light" : "Dark"}
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
export { ThemeProvider, ThemeToggler };

// Exercise 24: Create a component that implements debounce logic
import { useState, useEffect } from 'react';
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(handler);
    }, [value, delay]);
    return debouncedValue;
}
export default useDebounce;

// Exercise 25: Use useMemo to memoize a list of items
import { useMemo } from 'react';
function ItemList({ items }) {
    const sortedItems = useMemo(() => {
        console.log('Sorting items...');
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
export default ItemList;

// Exercise 26: Create a component that uses React.memo to prevent unnecessary re-renders
import { memo } from 'react';
const MemoizedComponent = memo(({ name }) => {
    console.log('Rendering MemoizedComponent');
    return <div>Hello, {name}!</div>;
});
export default MemoizedComponent;

// Exercise 27: Use useNavigate to programmatically navigate in React Router
import { useNavigate } from 'react-router-dom';
function GoBackButton() {
    const navigate = useNavigate();
    return <button onClick={() => navigate(-1)}>Go Back</button>;
}
export default GoBackButton;

// Exercise 28: Implement a simple counter using useReducer
import { useReducer } from 'react';
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
}
function SimpleCounter() {
    const [count, dispatch] = useReducer(reducer, 0);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </div>
    );
}
export default SimpleCounter;

// Exercise 29: Use useEffect to implement a countdown timer
import { useState, useEffect } from 'react';
function Countdown({ initialCount }) {
    const [count, setCount] = useState(initialCount);
    useEffect(() => {
        if (count <= 0) return;
        const timer = setInterval(() => setCount((c) => c - 1), 1000);
        return () => clearInterval(timer);
    }, [count]);
    return <div>Countdown: {count}</div>;
}
export default Countdown;

// Exercise 30: Create a component with error handling in useEffect
import { useEffect, useState } from 'react';
function ErrorHandlingComponent() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/invalid-endpoint')
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(data => setData(data))
            .catch(err => setError(err.message));
    }, []);

    return (
        <div>
            {error ? <p style={{ color: 'red' }}>{error}</p> : <p>{data ? data.title : 'Loading...'}</p>}
        </div>
    );
}
export default ErrorHandlingComponent;
