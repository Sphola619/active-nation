import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <NavLink to="/about-us" className="footer-link">
          About Us
        </NavLink>
        <NavLink to="/extra-services" className="footer-link">
          Extra Services
        </NavLink>
      </div>
      <p>&copy; {new Date().getFullYear()} ActiveNation. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
