import { React, useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import "./styles/PageButtons.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PageButtons = () => {
  const { setCurrentPage, currentPage, pagesArr, initialPage } =
    useContext(ProductsContext);

  const pageArrowLeft = () => {
    if (!initialPage) return;
    setCurrentPage((oldVal) => oldVal - 1);
  };

  const pageArrowRight = () => {
    if (currentPage === pagesArr.length - 1) return;
    setCurrentPage((oldVal) => oldVal + 1);
  };

  return (
    <div className="page-btn-container">
      <button className="arrow-icon" onClick={pageArrowLeft}>
        <FaArrowLeft />
      </button>
      {pagesArr.map((item, index) => {
        if (item === currentPage + 1) {
          return (
            <button
              onClick={() => setCurrentPage(index)}
              className="active-page-btn"
              key={index}
              value={currentPage}
            >
              {item}
            </button>
          );
        } else {
          return (
            <button
              onClick={() => setCurrentPage(index)}
              className="inactive-page-btn"
              key={index}
              value={currentPage}
            >
              {item}
            </button>
          );
        }
      })}
      <button className="arrow-icon" onClick={pageArrowRight}>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default PageButtons;
