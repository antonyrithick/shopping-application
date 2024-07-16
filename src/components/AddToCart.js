// AddToCart.js
import React, { useContext, useState, useEffect } from 'react';
import "../saas/home.scss";
import { CartContext } from './CartContext';
import "../saas/cart.scss";
import { Link } from 'react-router-dom';

export const AddToCart = () => {
  const { cart ,setcart} = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);
    setTotal(totalAmount);
  }, [cart]);

  return (
    <div className="cart">
      <button className='btn btn-primary'><Link to="/" className='text-light text-decoration-none'>back</Link></button>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.title} width={50} height={50} />
              <span>{item.title} - RS {item.price}</span>
              <div className='d-flex justify-content-end'><button className='btn btn-danger'>Remove</button></div>
            </li>
          ))}
        </ul>
      )}

      <div className='total'>Total: RS <span>{" "+total}</span></div>
      <div className='fs-5 fw-bold'>{"Total order's :"+" "+cart.length}</div>
      <div className='d-flex justify-content-center'><button className='btn btn-primary'>Procced to buy</button></div>
    </div>
  );
};
