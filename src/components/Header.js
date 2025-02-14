import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="header">
      <div className="logo">
        <span style={{ color: "gold" }}>Active</span>
        <span style={{ color: "gold" }}>Nation</span>
      </div>
      <div className="nav-links">
        <NavLink to="/" className="nav-link">Landing</NavLink>
        <NavLink to="/products" className="nav-link">Products</NavLink>
        <NavLink to="/cart" className="nav-link">Cart</NavLink>
        <NavLink to="/help" className="nav-link">Need Help?</NavLink>
        <NavLink to="/register-login" className="nav-link">Register/Login</NavLink>
      </div>
    </nav>
  );
}

export default Header;
