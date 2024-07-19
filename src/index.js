import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Netflix from './App';
import { Login } from './components/login/login';
import { IntervalDemo } from './components/debounce/intervalDemo';
import { IntervalDemo2 } from './components/debounce/IntervalDemo2';
import { ProgressDemo } from './components/debounce/progressDemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
   <ProgressDemo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results ( from 'for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
