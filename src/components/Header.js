import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink to create navigation links
import "./Header.css"; // Import the CSS file for styling the header

function Header() {
  return (
    <nav className="header">
      {/* Logo section */}
      <div className="logo">
        {/* Logo text styled dynamically with inline styles */}
        <span style={{ color: "gold" }}>Active</span>
        <span style={{ color: "gold" }}>Nation</span>
      </div>

      {/* Navigation links section */}
      <div className="nav-links">
        {/* NavLink to the Landing Page */}
        <NavLink to="/" className="nav-link">
          Landing
        </NavLink>
        
        {/* NavLink to the Products Page */}
        <NavLink to="/products" className="nav-link">
          Products
        </NavLink>
        
        {/* NavLink to the Cart Page */}
        <NavLink to="/cart" className="nav-link">
          Cart
        </NavLink>
        
        {/* NavLink to the Help Page */}
        <NavLink to="/help" className="nav-link">
          Need Help?
        </NavLink>
        
        {/* NavLink to the Register/Login Page */}
        <NavLink to="/register-login" className="nav-link">
          Register/Login
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
