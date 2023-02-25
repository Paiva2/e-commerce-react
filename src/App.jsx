import { React, useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Products from "./Products";
import NotFound from "./NotFound";
import WishList from "./WishList";
import Cart from "./Cart";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [data, setData] = useState();
  const [itensOnPage, setItensOnPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const pagesArr = [];

  const pageQuantity = data ? Math.ceil(data.length / itensOnPage) : undefined;
  const initialPage = data ? currentPage * itensOnPage : undefined;
  const finalPage = initialPage + itensOnPage;
  const showItens = data ? data.slice(initialPage, finalPage) : undefined;

  for (let i = 0; i < pageQuantity; i++) {
    pagesArr.push(i + 1);
  }
  
  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    axios.get("http://localhost:3000/products").then((resp) => {
      setData(resp.data);
    });
  };

  const objectBody = (productData) => {
    const object = {
      id: productData.id,
      name: productData.name,
      description: productData.description,
      price: productData.price,
      image: productData.image,
      rating: productData.rating,
      quantity: productData.quantity,
    };
    return object;
  };
  
  const addWishList = (product) => {
    axios
      .post("http://localhost:3000/wishlist/", objectBody(product))
      .then(() => callApi());
  };

  const addToCart = (product) => {
    axios
      .post("http://localhost:3000/cart/", objectBody(product))
      .then(() => callApi());
  };

  if (data) {
    return (
      <BrowserRouter>
        <Header addToCart={addToCart} />
        <Routes>
          <Route
            path="/"
            element={
              <Products
                showItens={showItens}
                addWishList={addWishList}
                addToCart={addToCart}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                pagesArr={pagesArr} />}
              />
          <Route path={"/wish-list"} element={<WishList />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
