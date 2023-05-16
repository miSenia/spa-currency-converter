import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Converter } from './pages/converter/Converter';
import { Currencies } from './pages/currencies/Currencies';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Converter />} />
      <Route path="/currencies" element={<Currencies />} />
    </Routes>
  );
};

export default App;
