import React from "react";
import "./styles/PlaceHolder.css";

const PlaceHolder = ({ text, Icon }) => {
  return (
    <div className="place-holder-container">
        <div><Icon className="icon" /></div>
      <div className="place-holder-text">
      <p>{text}</p>
      </div>
    </div>
  );
};

export default PlaceHolder;
