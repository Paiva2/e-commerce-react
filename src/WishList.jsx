import { React, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import PlaceHolder from "./PlaceHolder";

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
    axios.delete(`http://localhost:3000/wishlist/${id}`).then(() => {callApi()});
  }
  if (wishList) {
    if (wishList.length === 0) return <PlaceHolder text={'Empty Wish List...'} /> 
    return (
      <div className="main-container">
        <div className="wish-products">
          {wishList.map((product) => {
            return (
              <div className="wish-list">
                <img src={product.image} alt="product" />
                <p>{product.name}</p>
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