import React from "react";
import { render } from "react-dom";
import Likes from "../Likes/Likes";

const WishList = () => {
  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
  };

  return (
    <div className="wish__container">
      <div className="wish__title">
        <Likes />
      </div>
    </div>
  );
};

export default WishList;
