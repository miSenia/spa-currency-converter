import React from 'react';
// import { useRoutes } from 'hookrouter';
import { Route, Routes } from 'react-router-dom'; 
import './App.css';
import { Converter } from './pages/converter/Converter';
import { Currencies } from './pages/currencies/Currencies';

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/converter" element={<Converter />} />
      <Route path="/currencies" element={<Currencies />} />
    </Routes>
  );
};

export default App;
