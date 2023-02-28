import React from "react";
import "./styles/PlaceHolder.css";
import { Helmet } from "react-helmet";

const PlaceHolder = ({ text, Icon, title }) => {
  return (
    <div className="place-holder-container">
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="en-US" />
        <title>{title}</title>
      </Helmet>
      <div>
        <Icon className="icon" />
      </div>
      <div className="place-holder-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default PlaceHolder;
