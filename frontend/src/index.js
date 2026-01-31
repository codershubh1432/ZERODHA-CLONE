import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Navbar from "./landing_page/Navbar";
import HomePage from "./landing_page/home/HomePage";
import SignUp from  "./landing_page/signup/SignUp";
import About from  "./landing_page/about/About";
import Product from "./landing_page/product/Product";
import PricingPage from  "./landing_page/pricing/PricingPage";
import SupportPage from  "./landing_page/support/SupportPage";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/product" element={<Product/>}/>
    <Route path="/pricing" element={<PricingPage/>}/>
    <Route path="/support" element={<SupportPage/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes>
  <Footer />
  </BrowserRouter>
);

