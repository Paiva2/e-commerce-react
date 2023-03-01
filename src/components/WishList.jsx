import { React, useEffect, useState, useContext } from "react";
import { AiOutlineDelete, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import axios from "axios";
import PlaceHolder from "./PlaceHolder";
import { Helmet } from "react-helmet";
import "./styles/WishList.css";
import { GlobalContext } from '../context/GlobalContext'



const WishList = ({ addToCart }) => {
  const [wishList, setWishList] = useState(undefined);
 // const {callApiWishList, delWishItem, wishListData} = useContext(GlobalContext)

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
        <PlaceHolder
          Icon={AiOutlineHeart}
          title={"Wish List"}
          text={"Empty Wish List..."}
        />
      );
    return (
      <div className="wish-container">
        <Helmet>
          <meta charSet="utf-8" />
          <html lang="en-US" />
          <title>Wish List</title>
        </Helmet>
        {wishList.map((product, i) => {
          return (
            <div key={i} className="wish-product">
              <div className="wish-product-details">
                <img src={product.image} alt="product" />
                <div className="item-description">
                  <h3>{product.name}</h3>
                  <p>
                    <b>Rating:</b> {product.rating}
                  </p>
                  <p>
                    <b>Price:</b>{" "}
                    <span className="price-text">${product.price}</span>
                  </p>
                  <MdOutlineAddShoppingCart
                    className="add-to-cart-btn"
                    onClick={() => {
                      addToCart(product), delWishItem(product.id);
                    }}
                  />
                  <AiOutlineDelete
                    className="del-btn"
                    onClick={() => delWishItem(product.id)}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default WishList;