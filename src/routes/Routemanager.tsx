import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "App";
import ProductCard from "Components/productcard/ProductCard";
import SignIn from "Components/signin/Signin";
const Routemanager = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="product/:id" element={<ProductCard />} />
        <Route path="signin" element={<SignIn/> } />
      </Routes>
    </BrowserRouter>
  );
};

export default Routemanager;
