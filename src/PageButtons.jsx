import React from "react";

const PageButtons = ({setCurrentPage, pagesArr, currentPage}) => {
  return (
    <div>
      {pagesArr.map((item, index) => (
        <button value={currentPage} onClick={() => setCurrentPage(index)}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default PageButtons;
