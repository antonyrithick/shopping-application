// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Home } from './components/Home';
import { AddToCart } from './components/AddToCart';
import {CartProvider} from './components/CartContext';

export const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addtocart" element={<AddToCart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};
