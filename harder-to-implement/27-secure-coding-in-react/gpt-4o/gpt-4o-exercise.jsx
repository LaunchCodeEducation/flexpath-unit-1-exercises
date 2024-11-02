// Exercise 1: Create a component that sanitizes user input using DOMPurify
import DOMPurify from 'dompurify';
function SanitizedInput({ htmlString }) {
    const sanitizedHtml = DOMPurify.sanitize(htmlString);
    return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
}
export default SanitizedInput;

// Exercise 2: Implement a form with CSRF protection token
import { useState } from 'react';
function CSRFProtectedForm() {
    const [token] = useState('random-csrf-token'); // Simulated token
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`CSRF Token: ${token}`);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="hidden" value={token} name="csrfToken" />
            <button type="submit">Submit</button>
        </form>
    );
}
export default CSRFProtectedForm;

// Exercise 3: Implement a loading spinner that appears during data fetching
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

// Exercise 4: Create a protected route component using React Router
import { Navigate } from 'react-router-dom';
function ProtectedRoute({ isAuthenticated, children }) {
    return isAuthenticated ? children : <Navigate to="/login" />;
}
export default ProtectedRoute;

// Exercise 5: Implement lazy loading for a component
import { lazy, Suspense } from 'react';
const LazyComponent = lazy(() => import('./LazyComponent'));
function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
        </Suspense>
    );
}
export default App;

// Exercise 6: Create a simple logging function that excludes sensitive info
function secureLog(message, sensitiveData) {
    console.log(message);
    // Do not log sensitiveData
}
export default secureLog;

// Exercise 7: Use useRef to manage secure input focus
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

// Exercise 8: Implement a function that uses Content Security Policy
function setCSP() {
    document.head.appendChild(
        Object.assign(document.createElement('meta'), {
            httpEquiv: 'Content-Security-Policy',
            content: "default-src 'self'",
        })
    );
}
export default setCSP;

// Exercise 9: Create a component to handle raw JSON data securely
function SecureJSONComponent({ jsonData }) {
    return <pre>{JSON.stringify(jsonData, null, 2)}</pre>;
}
export default SecureJSONComponent;

// Exercise 10: Implement a CSRF token mechanism for form submission
function getCSRFToken() {
    // Simulate fetching a token
    return 'csrf-token-example';
}
function CSRFExampleForm() {
    const token = getCSRFToken();
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitting with token: ${token}`);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="hidden" value={token} name="csrfToken" />
            <button type="submit">Submit</button>
        </form>
    );
}
export default CSRFExampleForm;

// Exercise 11: Build a modal with secure DOM access using refs
import { useRef } from 'react';
function Modal() {
    const modalRef = useRef();
    const openModal = () => (modalRef.current.style.display = 'block');
    const closeModal = () => (modalRef.current.style.display = 'none');
    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            <div ref={modalRef} style={{ display: 'none' }}>
                <p>Secure Modal Content</p>
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    );
}
export default Modal;

// Exercise 12: Handle Zip Slip attack prevention during file extraction
function handleFileUpload(file) {
    if (file.name.includes('..')) {
        alert('Invalid file path detected!');
        return;
    }
    // Proceed with secure file extraction
}
export default handleFileUpload;

// Exercise 13: Build a logger that avoids blocking the main thread
function asyncLogger(message) {
    setTimeout(() => {
        console.log(message);
    }, 0);
}
export default asyncLogger;

// Exercise 14: Create a secure way to display API data
import { useEffect, useState } from 'react';
function APIDataDisplay() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setData(json));
    }, []);
    return <ul>{data.map((item) => <li key={item.id}>{item.title}</li>)}</ul>;
}
export default APIDataDisplay;

// Exercise 15: Use Suspense and Error Boundary for error handling
import { Suspense, lazy } from 'react';
import ErrorBoundary from './ErrorBoundary';
const LazyLoadedComponent = lazy(() => import('./LazyLoadedComponent'));
function App() {
    return (
        <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyLoadedComponent />
            </Suspense>
        </ErrorBoundary>
    );
}
export default App;

// Exercise 16: Implement lazy loading with error boundaries
import { Suspense, lazy } from 'react';
const SecureComponent = lazy(() => import('./SecureComponent'));
function SecureApp() {
    return (
        <Suspense fallback={<div>Loading secure content...</div>}>
            <SecureComponent />
        </Suspense>
    );
}
export default SecureApp;

// Exercise 17: Build a component that prevents default behavior in forms
function PreventDefaultForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submission prevented!');
    };
    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
    );
}
export default PreventDefaultForm;

// Exercise 18: Securely set innerHTML using sanitization
import DOMPurify from 'dompurify';
function SafeInnerHTML({ htmlContent }) {
    const safeHtml = DOMPurify.sanitize(htmlContent);
    return <div dangerouslySetInnerHTML={{ __html: safeHtml }} />;
}
export default SafeInnerHTML;

// Exercise 19: Validate input to prevent injection attacks
function validateInput(input) {
    const pattern = /^[a-zA-Z0-9]+$/;
    if (!pattern.test(input)) {
        alert('Invalid input detected!');
    }
}
export default validateInput;

// Exercise 20: Build a secure file upload component
import { useState } from 'react';
function FileUpload() {
    const [file, setFile] = useState(null);
    const handleChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile.name.includes('..')) {
            alert('Invalid file name!');
            return;
        }
        setFile(selectedFile);
    };
    return <input type="file" onChange={handleChange} />;
}
export default FileUpload;
