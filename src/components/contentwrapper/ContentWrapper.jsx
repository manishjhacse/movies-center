import React from "react";
import "../contentwrapper/style.scss";

const ContentWrapper = ({ children }) => {
  return <div className="contentWrapper">{children}</div>;
};

export default ContentWrapper;
