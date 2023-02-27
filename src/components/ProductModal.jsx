import React from "react";
import { MdClose } from "react-icons/md";
import Modal from "react-modal";
import "./styles/ProductModal.css";

const ProductModal = ({ modalIsOpen, closeModal, product }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <img src={product[1]} alt="Product image" />
      <h2>{product[0]}</h2>
      <div className="description-modal">
        <p>
          <b>Description:</b> {product[2]}
        </p>
      </div>
      <p>
        <b>Price:</b> <span className="price-span">${product[3]}</span>
      </p>
      <button onClick={closeModal}>
        Close <MdClose className="close-icon" />
      </button>
    </Modal>
  );
};

export default ProductModal;
