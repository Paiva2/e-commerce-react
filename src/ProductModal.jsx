import React from "react";
import Modal from "react-modal";

const ProductModal = ({ modalIsOpen, closeModal, product }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <h2>{product[0]}</h2>
      <hr />
      <img src={product[1]} alt="Product image" />
      <p>{product[2]}</p>
      <p>Price: ${product[3]}</p>
      <p>Rating: {product[4]}</p>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
};

export default ProductModal;
