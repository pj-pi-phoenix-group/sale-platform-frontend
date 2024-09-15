import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import Home from "./pages/home";
import Product from "./pages/product";
import Share from "./pages/share";
import Users from "./pages/users";
import Stock from "./pages/stock";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/product" element={<Product />} /> 
          <Route path="/share" element={<Share />} /> 
          <Route path="/users" element={<Users />} /> 
          <Route path="/stock" element={<Stock />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  ) 
}