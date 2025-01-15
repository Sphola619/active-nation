import React from "react";
import ReactDOM from "react-dom/client"; // Import the createRoot API
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // Create the root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
