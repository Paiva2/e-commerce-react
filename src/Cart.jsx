import {React, useEffect} from "react";
import axios from "axios";

const Cart = () => {
  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    axios.get("http://localhost:3000/cart").then((resp) => {
      setData(resp.data);
    });
  };
  return <div className="main-container">Cart</div>;
};

export default Cart;
