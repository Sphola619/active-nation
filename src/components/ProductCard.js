import React from "react"; // Import React for creating functional components
import "./ProductCard.css"; // Import the CSS file for styling the product card

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      {/* Display the product image */}
      <img 
        src={product.image} // Source of the product image
        alt={product.name} // Alternative text for the image for accessibility
        className="product-image" // Class for styling the image
      />
      
      {/* Display the product name */}
      <h3>{product.name}</h3>

      {/* Display the product price */}
      <p>Price: R{product.price}</p>

      {/* Button to add the product to the cart */}
      <button onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
