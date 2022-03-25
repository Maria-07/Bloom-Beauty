import React from "react";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart">
      <h2>Selected Items : </h2>
      <button className="choose-btn">Choose 1 for me</button>
      <br />
      <button className="choose-again">Choose Again</button>
    </div>
  );
};

export default Cart;
