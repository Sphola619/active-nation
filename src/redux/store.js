import { configureStore } from "@reduxjs/toolkit"; // Importing Redux Toolkit's configureStore method
import cartReducer from "./cartSlice"; // Importing the cart slice reducer

// Configures the Redux store and combines reducers (in this case, only cartReducer)
const store = configureStore({
  reducer: {
    cart: cartReducer, // Assigns the cart slice reducer to the cart property in the state
  },
});

export default store; // Exports the store to be used across the application

