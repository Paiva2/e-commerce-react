import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import Footer from "./Footer";
import PageButtons from './PageButtons'

const Products = ({
  showItens,
  addWishList,
  addToCart,
  setCurrentPage,
  currentPage,
  pagesArr,
}) => {
  return (
    <>
      <Header />
      <div className="main-container">
        {showItens.map((item) => {
          return (
            <div key={item.id} className="product">
              <img src={item.image} alt="product" />
              <p>
                {item.name}
                <button onClick={() => addWishList(item)}>
                  <FontAwesomeIcon icon={faHeart} />
                </button>
                <button onClick={() => addToCart(item)}>
                  <FontAwesomeIcon icon={faCartPlus} />
                </button>
              </p>
              <p>{item.rating}</p>
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
      <Footer />
    </>
  );
};

export default Products;
