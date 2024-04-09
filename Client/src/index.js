import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import { SearchProvider } from "./context/search";
import {CartProvider} from './context/cart'
import ParticleBackground from "./styles/ParticleBackground.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <SearchProvider>
      <CartProvider>
        <BrowserRouter>
          <App /> 
          <ParticleBackground />
        </BrowserRouter>
      </CartProvider>
    </SearchProvider>
  </AuthProvider>
);
