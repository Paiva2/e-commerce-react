import React from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    axios
      .get("http://localhost:3000/products")
      .then((resp) => {
        setData(resp.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error.response) console.warn("Error. Try Again Later.");
        else if (error.request) console.log(error.request);
        else console.log("Error", error.message);
        setLoading(true);
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
    axios
      .post("http://localhost:3000/wishlist/", objectBody(product))
      .then(() => {
        callApi(), actionAlert("Added to wish list!", "success");
      })
      .catch((err) => {
        if (err)
          return actionAlert("This product is already on wish list!", "error");
      });
  };

  const addToCart = (product) => {
    axios
      .post("http://localhost:3000/cart/", objectBody(product))
      .then(() => {
        callApi(), actionAlert("Product added to cart!", "success");
      })
      .catch((err) => {
        if (err)
          return actionAlert("This product is already on cart!", "error");
      });
  };

  return (
    <GlobalContext.Provider value={{ data, addWishList, addToCart, loading }}>
      {children}
    </GlobalContext.Provider>
  );
};
