import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const PageButtons = ({setCurrentPage, pagesArr, currentPage, initialPage}) => {

  const pageArrowLeft = () => {
    if(!initialPage) return
    setCurrentPage(oldVal => oldVal - 1)
  }
  
  const pageArrowRight = () => {
      if(currentPage === pagesArr.length - 1) return
      setCurrentPage(oldVal => oldVal + 1)
  }

  return (
    <div className="page-btn-container">
      <div className="page-btns">
        <button onClick={pageArrowLeft} ><FaArrowLeft className="arrow-icon-left" /></button>
      {pagesArr.map((item, index) => (
        <button key={index} value={currentPage} onClick={() => setCurrentPage(index)}>
          {item}
        </button>
      ))}
      <button onClick={pageArrowRight}><FaArrowRight className="arrow-icon-right" /></button>
      </div>
    </div>
  );
};

export default PageButtons;
