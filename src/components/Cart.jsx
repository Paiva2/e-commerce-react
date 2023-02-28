import { React, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import PlaceHolder from "./PlaceHolder";
import axios from "axios";
import './styles/Cart.css'

const Cart = () => {
  const [cart, setCart] = useState(undefined);
  const [totalQuantity, setTotalQuantity] = useState('')
  const [totalPrice, setTotalPrice] = useState('')

  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    axios.get("http://localhost:3000/cart").then((resp) => {
      setCart(resp.data);

      setTotalQuantity(
        resp.data.map((item) => item.quantity).reduce((acc, item) => acc + item)
      );

      setTotalPrice(
        resp.data.map((item) => item.price).reduce((acc, item) => acc + item)
      );
    });
  };

  const delCartItem = (id) => {
    axios.delete(`http://localhost:3000/cart/${id}`).then(() => {callApi()});
  };

  const handleQuantity = ({target}, product, quantity, id) => {
    if(target.innerText === '+'){
      axios.put(`http://localhost:3000/cart/${id}`, {...product, quantity: quantity + 1}).then(() => {callApi()});
    }else if(target.innerText === '-'){
      if(quantity === 1) return
      axios.put(`http://localhost:3000/cart/${id}`, {...product, quantity: quantity - 1}).then(() => {callApi()});
    }
  }

  if (cart) {
    if (cart.length === 0) return  <PlaceHolder classN='cart-container' text={"Empty cart..."} />
    return (
      <div className="cart-main-container">

        <div className="cart-container">
          {cart.map((product) => {
            return (
              <div className="cart-product">

                <div className="product-details">
                  
                  <div className="image-details">
                    <h1>Product</h1>
                  <img src={product.image} alt="product" />
                  </div>
                  <div className="description">
                    <p>{product.name}</p>
                    <button onClick={() => delCartItem(product.id)}><FontAwesomeIcon icon={faTrash} /></button>
                  </div>
                </div>

                <div className="quantity">
                  <p>Quantity</p>
                  <button onClick={(e) => handleQuantity(e, product, product.quantity, product.id)}>+</button>
                  <div>{product.quantity}</div>
                  <button onClick={(e) => handleQuantity(e, product, product.quantity, product.id)}>-</button>
                </div>

                <div className="price">
                  <p>Price</p>
                  <p>${(product.price * product.quantity).toFixed(2)}</p>
                </div>

              </div>
            );
          })}
        </div>

        <div className="card-payment">
          <h2>TOTAL: ${(totalPrice * totalQuantity).toFixed(2)}</h2>
        </div>

      </div>
    );
  }
};

export default Cart;
