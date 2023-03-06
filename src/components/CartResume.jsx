import React, { useRef, useState } from "react";
import validPromoCodes from "./validPromoCodes";

const CartResume = ({ total, setTotal }) => {
  const [promoCode, setPromoCode] = useState();
  const promoField = useRef();

  const validatePromo = () => {
    if (!promoField.current.value) return;
    validPromoCodes.map((codes) => {
      promoCode === codes.code
        ? setTotal((prevValue) => {
            const discount = (prevValue * codes.discount) / 100;
            return (prevValue - discount).toFixed(2);
          })
        : undefined;
    });

    promoField.current.value = "";
  };

  return (
    <div className="card-payment">
      <div className="payment-title">
        <h1>RESUME</h1>
      </div>
      <div className="resume-infos">
        <div className="shipping-info">
          <h3>Shipping</h3>
          <input placeholder="Insert your zipccode" type="text" />
          <h3>Promo code</h3>
          <input
            placeholder="Have a promo code?"
            type="text"
            onChange={(e) => setPromoCode(e.target.value)}
            ref={promoField}
          />
          <div className="available-codes">
            <h4>Available promo codes:</h4>
            <div className="promo-codes">
              {validPromoCodes.map((code) => {
                return (
                  <li key={code.code}>
                    {code.code} - <b>{code.discount}% Discount</b>
                  </li>
                );
              })}
            </div>
          </div>
          <div className="confirm-shipping-container">
            <button className="confirm-shipping">Confirm</button>
          </div>
        </div>
        <div className="total">
          <p>
            TOTAL: <span>${total}</span>
          </p>
        </div>
      </div>
      <button onClick={validatePromo} className="checkout-cart">
        Checkout
      </button>
      <p className="ps">ps: promo code will only be activated on checkout</p>
    </div>
  );
};

export default CartResume;
