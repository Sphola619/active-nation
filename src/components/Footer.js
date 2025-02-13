import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink to create navigable links
import "./Footer.css"; // Import the CSS file for styling the footer

function Footer() {
  return (
    <footer className="footer"> 
      <div className="footer-links"> {/* Footer links section */}
        {/* Link to the About Us page */}
        <NavLink to="/about-us" className="footer-link">
          About Us
        </NavLink>
        {/* Link to the Extra Services page */}
        <NavLink to="/extra-services" className="footer-link">
          Extra Services
        </NavLink>
      </div>

      {/* Footer copyright section */}
      <p>&copy; {new Date().getFullYear()} ActiveNation. All Rights Reserved.</p>
      {/* The copyright notice dynamically updates to the current year */}
    </footer>
  );
}

export default Footer;

