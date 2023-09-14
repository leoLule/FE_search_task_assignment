import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import ProductContextProvider from './context/ProductContext';
import Homepage from './components/Homepage';

function App() {
  return (
    <>
      <ProductContextProvider>
        {' '}
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
        </Routes>
      </ProductContextProvider>
    </>
  );
}

export default App;
