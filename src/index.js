import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";
import CartContext from "./contexts/CartContext";
import PinContext from "./contexts/PinContext";
import Toastify from "./components/Toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/*<AuthContext> */}
    {/* на потом */}
    {/*<CartContext>*/}

    <PinContext>
      {/* <Toastify /> */}
      <App />
    </PinContext>
    {/*</CartContext>*/}
    {/*</AuthContext>*/}
  </BrowserRouter>
);
