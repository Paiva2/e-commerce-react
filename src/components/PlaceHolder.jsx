import React from "react";
import "./styles/PlaceHolder.css";
import { AiOutlineHeart } from "react-icons/ai";


const PlaceHolder = ({ text, classN }) => {
  return (
    <div className="place-holder-container">
        <div><AiOutlineHeart className="icon" /></div>
      <div className="place-holder-text">
      <p>{text}</p>
      </div>
    </div>
  );
};

export default PlaceHolder;
