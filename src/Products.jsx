import { React, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import PageButtons from "./PageButtons";
import ProductModal from "./ProductModal";
import { FaStar } from "react-icons/fa";
import Modal from "react-modal";
Modal.setAppElement("#root");

const Products = ({
  showItens,
  addWishList,
  addToCart,
  setCurrentPage,
  currentPage,
  pagesArr,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [clickedProduct, setclickedProduct] = useState([]);

  function openModal(...productClicked) {
    setIsOpen(true);
    setclickedProduct(productClicked);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const stars = [1, 2, 3, 4, 5];

  const ratingColors = (rate) => {
    if (rate === 1) return "one-star";
    if (rate === 2) return "two-star";
    if (rate === 3) return "three-star";
    if (rate === 4) return "four-star";
    if (rate === 5) return "five-star";
  };

  return (
    <div className="main-container">

      <div className="title-container">
        <p>Products</p>
      </div>

      <div className="product-container">

        <div className="aside-container">
          <div className="aside-genre">
            <h2>Genre</h2>
            <label htmlFor="male">
              Male
              <input type="checkbox" name="male" />
            </label>
            <label htmlFor="female">
              Female
              <input type="checkbox" name="female" />
            </label>
          </div>
          <div className="price-input">
          <h2>Price</h2>
            <label htmlFor="max-price">
              Max <input placeholder="ex: 200" type="text" name="price" />
            </label>
            <label htmlFor="min-price">
              Min  <input placeholder="ex: 30" type="text" name="price" />
            </label>
          </div>
        </div>

        <div className="product-wrapper">
          {showItens.map((item) => {
            return (
              <div key={item.id} className="product">
                <img
                  onClick={() =>
                    openModal(
                      item.name,
                      item.image,
                      item.description,
                      item.price,
                      item.rating
                    )
                  }
                  src={item.image}
                  alt="product"
                />
                <h3>{item.name}</h3>
                <ProductModal
                  modalIsOpen={modalIsOpen}
                  product={clickedProduct}
                  closeModal={closeModal}
                />
                <div className="rating-stars">
                  <p>
                    {stars.map((star, i) => {
                      console.log(Math.ceil(item.rating));
                      return (
                        <FaStar
                          key={i}
                          className={ratingColors(Math.ceil(item.rating))}
                        />
                      );
                    })}
                  </p>
                </div>

                <div className="product-footer">
                  <div className="product-buttons">
                    <p>
                      <button onClick={() => addWishList(item)}>
                        <FontAwesomeIcon className="wish-btn" icon={faHeart} />
                      </button>
                      <button onClick={() => addToCart(item)}>
                        <FontAwesomeIcon
                          className="add-cart-btn"
                          icon={faCartPlus}
                        />
                      </button>
                    </p>
                  </div>
                  <div className="product-price">
                    <p>${item.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
