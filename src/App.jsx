import { React, useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Swal from "sweetalert2";
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
  const [searchValue, setSearchValue] = useState('')
  const pagesArr = [];
  
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
      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 1200,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Product added to wish list!'
      })
  };

  const addToCart = (product) => {
    axios
      .post("http://localhost:3000/cart/", objectBody(product))
      .then(() => callApi());
      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 1200,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Product added to cart!'
      })
  };

  if (data) {
    const pageQuantity = Math.ceil(data.length / itensOnPage);
    const initialPage = currentPage * itensOnPage;
    const finalPage = initialPage + itensOnPage;

    for (let i = 0; i < pageQuantity; i++) {
      pagesArr.push(i + 1);
    }

    const inputValueLowerCase = searchValue.toLowerCase()
    const filteredProducts = data.filter(product => product.name.toLowerCase().includes(inputValueLowerCase))
    const showItens = filteredProducts.slice(initialPage, finalPage);

    return (
      <BrowserRouter>
        <Header addToCart={addToCart} searchValue={searchValue} searchState={setSearchValue} />
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
              />}
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
