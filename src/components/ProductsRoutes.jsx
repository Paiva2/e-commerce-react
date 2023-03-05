import { React } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Products from "./Products";
import NotFound from "./NotFound";
import WishList from "./WishList";
import Cart from "./Cart";
import Header from "./Header";
import Footer from "./Footer";

function ProductsRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<Products />} />
        <Route path={"/wish-list"} element={<WishList />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default ProductsRoutes;
