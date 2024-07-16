// Home.js
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import "../saas/home.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../components/image.png";
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [expanded, setExpanded] = useState({});
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const toggleExpand = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <>
      <div className="card-nav position-fixed w-100 ">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="cart-info">
          <Link to="/addtocart">
            <i className="fas fa-cart-plus"></i>
            <span className="cart-count">{cart.length}</span>
          </Link>
          <i className="fas fa-user ms-5"></i>
        </div>
      </div>
      <div className="p-3">
        {products.map((product, index) => (
          <div key={index} className="shopping">
            <div className="card" style={{ marginTop: "100px" }}>
              <div className="header">
                <img src={product.image} alt="img" width={200} height={300} />
              </div>
              <div className="body">
                <h5>
                  {expanded[index] ? product.title : product.title.slice(0, 20)}
                  {product.title.length > 20 && (
                    <span
                      onClick={() => toggleExpand(index)}
                      className="toggle-button"
                    >
                      {expanded[index] ? " Less" : "... More"}
                    </span>
                  )}
                </h5>
                <h4>
                  {" "}
                  RS :<span className="ps-2"></span>
                  {product.price}
                </h4>
                <p className="des">
                  {expanded[index]
                    ? product.description
                    : product.description.slice(0, 60)}
                  {product.description.length > 60 && (
                    <span
                      onClick={() => toggleExpand(index)}
                      className="toggle-button"
                    >
                      {expanded[index] ? " Less" : "... More"}
                    </span>
                  )}
                </p>
                <h6>Category: {product.category}</h6>
              </div>
              <div className="footer">
                <p>Rating: {product.rating.rate}</p>
                <button className="btn btn-success" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
                <p>Available: {product.rating.count}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="card-footer">
        &copy; 2024 developed by Antony Rithick
      </div>
    </>
  );
};
