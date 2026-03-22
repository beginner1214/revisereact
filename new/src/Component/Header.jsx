import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const cartCount = useSelector((state) => state?.cart?.value ?? 0);

  return (
    <header className="header">
      <div className="logo">MyShop</div>

      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Contact</a>
      </nav>

      <div className="cart" aria-label="Cart">
        <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
        <span className="cart-count">{cartCount}</span>
      </div>
    </header>
  );
};

export default Header;
