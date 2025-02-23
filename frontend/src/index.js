// Import the React library
import React from 'react';

// Import the ReactDOM library for rendering the React component tree
import ReactDOM from 'react-dom/client';

// Import the global CSS file
import './index.css';

// Import the main App component
import App from './App';

// Create a root element to render the React component tree
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);