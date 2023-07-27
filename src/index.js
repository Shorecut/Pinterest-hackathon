import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import CartContext from "./contexts/CartContext";
import PinContext from "./contexts/PinContext";
import Toastify from "./components/Toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "./contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* на потом */}
    <AuthContext>
      <CartContext>
        <PinContext>
          <Toastify />
          <App />
        </PinContext>
      </CartContext>
    </AuthContext>
  </BrowserRouter>
);
