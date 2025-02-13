import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";

function CartPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [shipment, setShipment] = useState("");

  // Calculate shipment cost
  const shipmentCost = shipment === "standard" ? 50 : shipment === "express" ? 100 : 0;

  // Calculate total with shipment
  const totalWithShipment = cart.total + shipmentCost;
  
  // Ensure user selects a shipment method
  const handleClearCart = () => {
    if (!shipment) {
      alert("Please select a shipment method before proceeding.");
      return;
    }
    dispatch(clearCart());
    alert("Thank you for your purchase!");
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.items.length === 0 ? (
        <p>Your cart is empty!</p> // Return p if client has not added to cart
      ) : (
        <>
          <ul> {/* Unordered list of items and total price */}
            {cart.items.map((item) => (
              <li key={item.id}>
                {item.name} - R{item.price} x {item.quantity}
              </li>
            ))}
          </ul>
          <h2>Total: R{totalWithShipment.toFixed(2)}</h2>
          <div className="shipment-options">
            <label>Choose a shipment method:</label>
            <select
              value={shipment}
              onChange={(e) => setShipment(e.target.value)}
            > {/* Client shipment options */}
              <option value="">Select</option>
              <option value="standard">Standard Shipping - R50</option>
              <option value="express">Express Shipping - R100</option>
            </select>
          </div>
          {shipment && (
            <p>
              Selected shipment: {shipment} - R{shipmentCost}
            </p>
          )}
          <button onClick={handleClearCart}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
}

export default CartPage;
