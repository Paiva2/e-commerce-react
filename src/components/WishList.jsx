import { React, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import PlaceHolder from "./PlaceHolder";
import "./styles/WishList.css";

const WishList = () => {
  const [wishList, setWishList] = useState(undefined);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    axios.get("http://localhost:3000/wishlist").then((resp) => {
      setWishList(resp.data);
    });
  };

  const delWishItem = (id) => {
    axios.delete(`http://localhost:3000/wishlist/${id}`).then(() => {
      callApi();
    });
  };
  if (wishList) {
    if (wishList.length === 0)
      return (
        <PlaceHolder classN="main-container" text={"Empty Wish List..."} />
      );
    return (
      <div className="main-container">
        <div className="wish-products">
          {wishList.map((product, i) => {
            return (
              <div key={i} className="wish-list">
                <div>
                  <p>{product.name}</p>
                  <img src={product.image} alt="product" />
                </div>
                <p>{product.rating}</p>
                <p>${product.price}</p>
                <button onClick={() => addToCart({})}>
                  <FontAwesomeIcon icon={faCartPlus} />
                </button>
                <button onClick={() => delWishItem(product.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default WishList;
