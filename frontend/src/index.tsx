import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const reportWebVitalsCallback = (metric) => {
  console.log(metric); // You can log or send this data to an analytics service
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Call reportWebVitals with the callback
reportWebVitals(reportWebVitalsCallback);

