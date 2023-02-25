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
    <>
      <div className="main-container">
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
              <ProductModal
                modalIsOpen={modalIsOpen}
                product={clickedProduct}
                closeModal={closeModal}
              />
              <p>
                {item.name}
                <button onClick={() => addWishList(item)}>
                  <FontAwesomeIcon icon={faHeart} />
                </button>
                <button onClick={() => addToCart(item)}>
                  <FontAwesomeIcon icon={faCartPlus} />
                </button>
              </p>
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
              <p>${item.price}</p>
            </div>
          );
        })}
      </div>
      <PageButtons
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        pagesArr={pagesArr}
      />
    </>
  );
};

export default Products;
