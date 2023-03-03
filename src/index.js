import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { storeCounter } from './redux/store/store';
import { Provider } from 'react-redux';

// 3) wrap the root component in a Provider
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={storeCounter}>
    <App />
  </Provider>
);
