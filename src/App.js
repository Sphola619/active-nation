import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Importing reusable components
import Header from "./components/Header";
import Footer from "./components/Footer";
// Importing pages for routing
import LandingPage from "./pages/LandingPage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import HelpPage from "./pages/HelpPage";
import RegisterLogin from "./components/RegisterLogin";
import AboutUs from "./pages/AboutUs";
import ExtraServices from "./pages/ExtraServices";
import "./App.css"; // Global CSS for styling the application

function App() {
  return (
    <Router>
      {/* Top-level container for the application */}
      <div className="app">
        <Header /> {/* Displays the navigation bar at the top */}
        
        {/* Defines the routes for different pages */}
        <Routes>
          {/* Home route: Displays the landing page */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Products route: Displays the products page */}
          <Route path="/products" element={<ProductsPage />} />
          
          {/* Cart route: Displays the cart page */}
          <Route path="/cart" element={<CartPage />} />
          
          {/* Help route: Displays the help page */}
          <Route path="/help" element={<HelpPage />} />
          
          {/* Register/Login route: Displays the register/login form */}
          <Route path="/register-login" element={<RegisterLogin />} />
          
          {/* About Us route: Displays information about the store */}
          <Route path="/about-us" element={<AboutUs />} />
          
          {/* Extra Services route: Displays additional services offered */}
          <Route path="/extra-services" element={<ExtraServices />} />
        </Routes>
        
        <Footer /> {/* Displays the footer at the bottom */}
      </div>
    </Router>
  );
}

export default App; // Exports the App component as the default export
