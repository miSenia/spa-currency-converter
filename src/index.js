import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import CurrencyProvider from './context/CurrencyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CurrencyProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CurrencyProvider>
  </React.StrictMode>
);
