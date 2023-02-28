import { React, useEffect, useState } from "react";
import PlaceHolder from "./PlaceHolder";
import { BsCartX } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { Helmet } from "react-helmet";

import axios from "axios";
import "./styles/Cart.css";

const Cart = () => {
  const [cart, setCart] = useState(undefined);
  const [totalQuantity, setTotalQuantity] = useState("");
  const [totalPrice, setTotalPrice] = useState("");

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
    axios.delete(`http://localhost:3000/cart/${id}`).then(() => {
      callApi();
    });
  };

  const handleQuantity = ({ target }, product, quantity, id) => {
    if (target.innerText === "+") {
      axios
        .put(`http://localhost:3000/cart/${id}`, {
          ...product,
          quantity: quantity + 1,
        })
        .then(() => {
          callApi();
        });
    } else if (target.innerText === "-") {
      if (quantity === 1) return;
      axios
        .put(`http://localhost:3000/cart/${id}`, {
          ...product,
          quantity: quantity - 1,
        })
        .then(() => {
          callApi();
        });
    }
  };

  if (cart) {
    if (cart.length === 0)
      return (
        <PlaceHolder Icon={BsCartX} title={"Cart"} text={"Empty cart..."} />
      );
    return (
      <div className="cart-main-container">
        <Helmet>
          <meta charSet="utf-8" />
          <html lang="en-US" />
          <title>Cart</title>
        </Helmet>
        <div className="cart-container">
          {cart.map((product) => {
            return (
              <div className="cart-product">
                <div className="product-details">
                  <div className="image-details">
                    <img src={product.image} alt="product" />
                  </div>
                </div>
                <div className="controls-cart">
                  <div className="description">
                    <div className="product-name">
                      <h2>Product</h2>
                      <p>{product.name}</p>
                    </div>
                    <div className="del-btn-container">
                      <AiOutlineDelete
                        className="del-btn-cart"
                        onClick={() => delCartItem(product.id)}
                      />
                    </div>
                  </div>
                  <div className="quantity">
                    <h2>Quantity</h2>
                    <div className="quantity-controls">
                      <button
                        onClick={(e) =>
                          handleQuantity(
                            e,
                            product,
                            product.quantity,
                            product.id
                          )
                        }
                      >
                        +
                      </button>
                      <p>{product.quantity}</p>
                      <button
                        onClick={(e) =>
                          handleQuantity(
                            e,
                            product,
                            product.quantity,
                            product.id
                          )
                        }
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <div className="price">
                    <h2>Price</h2>
                    <p>${(product.price * product.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="card-payment">
          <div className="payment-title">
            <h1>RESUME</h1>
          </div>
          <div className="resume-infos">
            <div className="shipping-info">
              <h3>Shipping</h3>
              <input placeholder="Insert your zipccode" type="text" />
              <h3>Promo code</h3>
              <input placeholder="Have a promo code?" type="text" />
              <button className="confirm-shipping">Confirm</button>
            </div>

            <div className="total">
              <p>
                TOTAL: <span>${(totalPrice * totalQuantity).toFixed(2)}</span>
              </p>
            </div>
          </div>
          <button className="checkout-cart">Checkout</button>
        </div>
      </div>
    );
  }
};

export default Cart;
