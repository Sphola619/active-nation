import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import ProductCard from "../components/ProductCard";
import "./ProductsPage.css";

const products = [
  { id: 1, name: "Nike Revolution 7", category: "Footwear", price: 999, image: "/nike-revolution-7.jpg" },
  { id: 2, name: "Women's Leggings", category: "Women's", price: 799, image: "/women's-leggings.jpg" },
  { id: 3, name: "Nike Men's Hoodie", category: "Men's", price: 899, image: "/men's-hoodies.jpg" },
  { id: 4, name: "Kids - Adidas Tracksuits", category: "Junior", price: 699, image: "/junior-tracksuits.jpg" },
  { id: 5, name: "Yoga Mat", category: "Training Equipment", price: 499, image: "/yoga-mat.jpg" },
  { id: 6, name: "Trojan Dumbbells Set", category: "Training Equipment", price: 1199, image: "/dumbbell-set.jpg" },
  { id: 7, name: "Nike Premier League Football", category: "Sport Equipment", price: 399, image: "/football.jpg" },
  { id: 8, name: "Ping Golf Clubs", category: "Sport Equipment", price: 1499, image: "/golf-clubs.jpg" },
  { id: 9, name: "GARMIN Forerunner 55", category: "Other", price: 2999, image: "/garmin-forerunner.jpg" },
];

function ProductsPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");

  const dispatch = useDispatch();

  // Filter products based on the category from the URL
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  // Handle adding a product to the cart
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="products-page">
      <h1>{category || "All Products"}</h1>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
