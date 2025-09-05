import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import HelpPage from "./pages/HelpPage";
import RegisterLogin from "./components/RegisterLogin";
import AboutUs from "./pages/AboutUs";
import ExtraServices from "./pages/ExtraServices";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/register-login" element={<RegisterLogin />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/extra-services" element={<ExtraServices />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;