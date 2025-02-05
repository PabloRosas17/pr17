import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './vitals/reportWebVitals';
import ErrorBoundary from './utils/ErrorBoundary'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);

reportWebVitals();
