import { React, useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Swal from "sweetalert2";
import "./components/styles/App.css";
import axios from "axios";
import Products from "./components/Products";
import NotFound from "./components/NotFound";
import WishList from "./components/WishList";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState();
  const [itensOnPage, setItensOnPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchValue, setSearchValue] = useState("");
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

  const actionAlert = (text, icon) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 1200,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: icon,
      title: text,
    });

    return Toast;
  };

  const addWishList = (product) => {
    axios.post("http://localhost:3000/wishlist/", objectBody(product))
      .then(() => {callApi(), actionAlert('Added to wish list!', 'success');
      }).catch(err => {
        if(err) return actionAlert('This product is already on wish list!', 'error')
      })
  };

  const addToCart = (product) => {
    axios
      .post("http://localhost:3000/cart/", objectBody(product))
      .then(() => {callApi(), actionAlert("Product added to cart!", 'success')})
      .catch(err => {
        if(err) return actionAlert('This product is already on cart!', 'error')
      })
  };

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

export default App;
