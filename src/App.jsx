import { React, useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { nanoid } from "nanoid";
import "./App.css";
import Products from "./Products";
import NotFound from "./NotFound";

//browserrouter >> routes > route path="" element={}

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
              pagesArr={pagesArr}
            />}
          />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}

export default App;
