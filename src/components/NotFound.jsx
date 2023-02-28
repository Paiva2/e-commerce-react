import React from "react";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="en-US" />
        <title>Not Found</title>
      </Helmet>
      <h1>Nothing here...</h1>
    </>
  );
};

export default NotFound;
