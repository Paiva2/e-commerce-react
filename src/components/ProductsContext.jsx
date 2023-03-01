import { React, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import Products from "./Products";
import NotFound from "./NotFound";
import WishList from "./WishList";
import Cart from "./Cart";
import Header from "./Header";
import Footer from "./Footer";
import { GlobalContext } from '../context/GlobalContext'
import { useContext } from 'react'

function ProductsContext() {
  const {data, addWishList, addToCart} = useContext(GlobalContext)
  const [itensOnPage, setItensOnPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const pagesArr = [];

  if (data) {
    const pageQuantity = Math.ceil(data.length / itensOnPage);
    const initialPage = currentPage * itensOnPage;
    const finalPage = initialPage + itensOnPage;

    for (let i = 0; i < pageQuantity; i++) {
      pagesArr.push(i + 1);
    }

    const inputValueLowerCase = searchValue.toLowerCase();
    let filteredProducts = data.filter((product) =>
      product.name.toLowerCase().includes(inputValueLowerCase)
    );

    let showItens = filteredProducts.slice(initialPage, finalPage);
  
    return (
      <BrowserRouter>
        <Header
          addToCart={addToCart}
          searchValue={searchValue}
          searchState={setSearchValue}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Products
                showItens={searchValue ? filteredProducts : showItens}
                addWishList={addWishList}
                addToCart={addToCart}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                pagesArr={pagesArr}
                initialPage={initialPage}
                showItensCopy={showItens}
                data={data}
              />
            }
          />
          <Route path={"/wish-list"} element={<WishList addToCart={addToCart} />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default ProductsContext;
