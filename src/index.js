import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import CurrencyProvider from './context/CurrencyContext';
import './index.css';
import './styles/globals.scss';

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
