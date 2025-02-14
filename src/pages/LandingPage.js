import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const categories = [
  // Inserting generic images for each product category
  { name: "Footwear", image: "/footwear.jpg" },
  { name: "Women's", image: "/women's.jpg" },
  { name: "Men's", image: "/men's.jpg" },
  { name: "Junior", image: "/junior.jpg" },
  { name: "Training Equipment", image: "/training-equipment.jpg" },
  { name: "Sport Equipment", image: "/sport-equipment.jpg" },
  { name: "Other", image: "/other.jpg" },
];

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>
          <span className="logo-gold">Active</span>
          <span className="logo-gold">Nation</span>
        </h1>
        <p className="slogan">Where South Africa's Champions are Made</p>
      </header>
      <div className="categories">
        {categories.map((category) => (
          <Link
            to={`/products?category=${category.name}`}
            key={category.name}
            className="category-card"
          >
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
