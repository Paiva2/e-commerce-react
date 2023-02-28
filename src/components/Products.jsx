import { React, useState } from "react";
import { Helmet } from "react-helmet";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import PageButtons from "./PageButtons";
import ProductModal from "./ProductModal";
import { FaStar } from "react-icons/fa";
import Modal from "react-modal";
import "./styles/Products.css";
Modal.setAppElement("#root");

const Products = ({
  showItens,
  addWishList,
  addToCart,
  setCurrentPage,
  currentPage,
  pagesArr,
  initialPage,
  data,
  showItensCopy,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [clickedProduct, setclickedProduct] = useState([]);
  const [maxPriceVal, setMaxPriceVal] = useState(false);
  const [minPriceVal, setMinPriceVal] = useState(false);
  const stars = [1, 2, 3, 4, 5];

  const openModal = (...productClicked) => {
    setIsOpen(true);
    setclickedProduct(productClicked);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const ratingColors = (rate) => {
    if (rate === 1) return "one-star";
    if (rate === 2) return "two-star";
    if (rate === 3) return "three-star";
    if (rate === 4) return "four-star";
    if (rate === 5) return "five-star";
  };

  const bothPricesFiltered = data.filter((item) => {
    if (item.price <= maxPriceVal && item.price >= minPriceVal) return item;
  });

  const onePriceFilter = data.filter((item) => {
    if (item.price <= maxPriceVal || item.price >= minPriceVal) return item;
  });

  const priceFilterResults = () => {
    const result =
      bothPricesFiltered.length >= 1
        ? (showItens = bothPricesFiltered)
        : onePriceFilter.length >= 1
        ? (showItens = onePriceFilter)
        : undefined;

    return result;
  };

  const resultProducts =
    !minPriceVal && !maxPriceVal ? showItensCopy : priceFilterResults();
  return (
    <div className="main-container">
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="en-US" />
        <title>Products</title>
      </Helmet>
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
          <div className="price-wrapper">
            <h2>Price</h2>
            <label htmlFor="max-price">
              Max{" "}
              <input
                onChange={(e) => setMaxPriceVal(e.target.value)}
                placeholder="ex: 200"
                type="text"
                name="price"
              />
            </label>
            <label htmlFor="min-price">
              Min{" "}
              <input
                onChange={(e) => setMinPriceVal(e.target.value)}
                placeholder="ex: 30"
                type="text"
                name="price"
              />
            </label>
          </div>
        </div>

        <div className="product-wrapper">
          {resultProducts.map((item) => {
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
                        <AiOutlineHeart className="wish-btn" icon={faHeart} />
                      </button>
                      <button onClick={() => addToCart(item)}>
                        <MdOutlineAddShoppingCart className="add-cart-btn" />
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
      <PageButtons
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        pagesArr={pagesArr}
        initialPage={initialPage}
      />
    </div>
  );
};

export default Products;
