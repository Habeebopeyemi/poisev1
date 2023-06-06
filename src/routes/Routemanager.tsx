import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "App";
import ProductCard from "Components/productcard/ProductCard";
import SignIn from "Components/signin/Signin";
import SignUp from "Components/signin/signup";
import AddProduct from "Components/addproduct/AddProduct";
const Routemanager = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="product/:id" element={<ProductCard />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="addproduct" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routemanager;
