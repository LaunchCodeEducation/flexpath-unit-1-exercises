// Exercise 1: Create a simple functional component and render it
function HelloWorld() {
    return <h1>Hello, World!</h1>;
}
export default HelloWorld;

// Exercise 2: Use props to pass data to a component
function Greeting({ name }) {
    return <h1>Hello, {name}!</h1>;
}
export default Greeting;

// Exercise 3: Use useState to manage a counter
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

// Exercise 4: Create a button that toggles between two texts
import { useState } from 'react';
function ToggleText() {
    const [isToggled, setIsToggled] = useState(false);
    return (
        <button onClick={() => setIsToggled(!isToggled)}>
            {isToggled ? "ON" : "OFF"}
        </button>
    );
}
export default ToggleText;

// Exercise 5: Implement a simple form with controlled inputs
import { useState } from 'react';
function SimpleForm() {
    const [input, setInput] = useState("");
    return (
        <form>
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
            />
            <p>{input}</p>
        </form>
    );
}
export default SimpleForm;

// Exercise 6: Use useEffect to fetch data from an API
import { useEffect, useState } from 'react';
function FetchData() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then(response => response.json())
            .then(json => setData(json));
    }, []);
    return <div>{data ? data.title : "Loading..."}</div>;
}
export default FetchData;

// Exercise 7: Create a component with a cleanup function in useEffect
import { useEffect } from 'react';
function Timer() {
    useEffect(() => {
        const timer = setInterval(() => console.log("Tick"), 1000);
        return () => clearInterval(timer);
    }, []);
    return <div>Check the console for ticks</div>;
}
export default Timer;

// Exercise 8: Use Context API to share a theme between components
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

// Exercise 9: Create a component that uses a custom hook
import { useState } from 'react';
function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);
    return [count, () => setCount(count + 1)];
}
function CustomHookComponent() {
    const [count, increment] = useCounter(0);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}
export default CustomHookComponent;

// Exercise 10: Implement error boundary using class component
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

// Exercise 11: Use memo to optimize a component
import { memo } from 'react';
function ExpensiveComponent({ value }) {
    console.log("Rendering...");
    return <div>{value}</div>;
}
export default memo(ExpensiveComponent);

// Exercise 12: Use a reducer to manage complex state
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
function CounterWithReducer() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </div>
    );
}
export default CounterWithReducer;

// Exercise 13: Implement a component that handles form submission
import { useState } from 'react';
function FormSubmit() {
    const [text, setText] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", text);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
            />
            <button type="submit">Submit</button>
        </form>
    );
}
export default FormSubmit;

// Exercise 14: Create a component with conditional rendering
function ConditionalRendering({ isLoggedIn }) {
    return <div>{isLoggedIn ? "Welcome back!" : "Please log in."}</div>;
}
export default ConditionalRendering;

// Exercise 15: Implement a component that fetches and displays user data
import { useEffect, useState } from 'react';
function UserData({ userId }) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(data => setUser(data));
    }, [userId]);
    return <div>{user ? user.name : "Loading user data..."}</div>;
}
export default UserData;

// (Remaining exercises follow a similar pattern)

// Exercise 16: Create a component that updates the document title
import { useEffect } from 'react';
function DocumentTitle({ title }) {
    useEffect(() => {
        document.title = title;
    }, [title]);
    return <div>Document title updated to: {title}</div>;
}
export default DocumentTitle;

// Exercise 17: Use a ref to focus an input element on mount
import { useEffect, useRef } from 'react';
function FocusInput() {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    return <input ref={inputRef} type="text" />;
}
export default FocusInput;

// Exercise 18: Implement a component with lazy loading
import { Suspense, lazy } from 'react';
const LazyComponent = lazy(() => import('./LazyComponent'));
function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
        </Suspense>
    );
}
export default App;

// Exercise 19: Create a component that uses useMemo to optimize performance
import { useMemo, useState } from 'react';
function ExpensiveCalculation({ num }) {
    const result = useMemo(() => {
        console.log("Calculating...");
        return num * 2;
    }, [num]);
    return <div>Result: {result}</div>;
}
function App() {
    const [number, setNumber] = useState(1);
    return (
        <div>
            <input 
                type="number" 
                value={number} 
                onChange={(e) => setNumber(Number(e.target.value))} 
            />
            <ExpensiveCalculation num={number} />
        </div>
    );
}
export default App;

// Exercise 20: Create a component with a controlled and uncontrolled input
import { useRef, useState } from 'react';
function ControlledUncontrolledInput() {
    const [controlled, setControlled] = useState("");
    const uncontrolledRef = useRef();
    const handleSubmit = () => {
        console.log("Controlled:", controlled);
        console.log("Uncontrolled:", uncontrolledRef.current.value);
    };
    return (
        <div>
            <input 
                type="text" 
                value={controlled} 
                onChange={(e) => setControlled(e.target.value)} 
            />
            <input type="text" ref={uncontrolledRef} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}
export default ControlledUncontrolledInput;

// Exercise 21: Implement a component that uses useReducer with complex state
import { useReducer } from 'react';
function reducer(state, action) {
    switch (action.type) {
        case "toggle":
            return { ...state, on: !state.on };
        case "increment":
            return { ...state, count: state.count + 1 };
        default:
            return state;
    }
}
function ComplexState() {
    const [state, dispatch] = useReducer(reducer, { on: false, count: 0 });
    return (
        <div>
            <p>{state.on ? "ON" : "OFF"}</p>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: "toggle" })}>Toggle</button>
            <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
        </div>
    );
}
export default ComplexState;

// Exercise 22: Create a reusable modal component
import { useState } from 'react';
function Modal({ show, onClose, children }) {
    if (!show) return null;
    return (
        <div className="modal">
            <div className="modal-content">
                <button onClick={onClose}>Close</button>
                {children}
            </div>
        </div>
    );
}
function App() {
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <button onClick={() => setShowModal(true)}>Open Modal</button>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <p>This is a modal!</p>
            </Modal>
        </div>
    );
}
export default App;

// Exercise 23: Use useLayoutEffect to measure an element's size
import { useLayoutEffect, useRef, useState } from 'react';
function MeasureElement() {
    const elementRef = useRef();
    const [size, setSize] = useState({});
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

// Exercise 24: Implement a simple tab navigation
import { useState } from 'react';
function Tabs() {
    const [activeTab, setActiveTab] = useState("Tab1");
    return (
        <div>
            <button onClick={() => setActiveTab("Tab1")}>Tab 1</button>
            <button onClick={() => setActiveTab("Tab2")}>Tab 2</button>
            <div>
                {activeTab === "Tab1" && <p>Content for Tab 1</p>}
                {activeTab === "Tab2" && <p>Content for Tab 2</p>}
            </div>
        </div>
    );
}
export default Tabs;

// Exercise 25: Create a simple to-do list
import { useState } from 'react';
function TodoList() {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");
    const addTask = () => {
        setTodos([...todos, task]);
        setTask("");
    };
    return (
        <div>
            <input 
                type="text" 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
            />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}
export default TodoList;

// Exercise 26: Create a component that uses a forward ref
import { forwardRef, useRef } from 'react';
const InputWithRef = forwardRef((props, ref) => {
    return <input ref={ref} {...props} />;
});
function App() {
    const inputRef = useRef();
    return (
        <div>
            <InputWithRef ref={inputRef} />
            <button onClick={() => inputRef.current.focus()}>Focus Input</button>
        </div>
    );
}
export default App;

// Exercise 27: Implement a component that uses PropTypes for type checking
import PropTypes from 'prop-types';
function Greeting({ name }) {
    return <h1>Hello, {name}!</h1>;
}
Greeting.propTypes = {
    name: PropTypes.string.isRequired
};
export default Greeting;

// Exercise 28: Create a simple theme switcher using useContext
import { createContext, useContext, useState } from 'react';
const ThemeContext = createContext();
function ThemeSwitcher() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div style={{ background: theme === "dark" ? "#333" : "#FFF", color: theme === "dark" ? "#FFF" : "#000" }}>
            <p>Current theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
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

// Exercise 29: Create a component that uses a key prop correctly
function ListWithKeys({ items }) {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
}
export default ListWithKeys;

// Exercise 30: Use React.memo to optimize a component that doesn't need to re-render
import { memo } from 'react';
const OptimizedComponent = memo(function({ value }) {
    console.log("Rendered!");
    return <div>{value}</div>;
});
export default OptimizedComponent;
