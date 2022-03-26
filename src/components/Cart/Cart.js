import React, { useState } from "react";
import SelectItem from "../SelectItem/SelectItem";
import "./Cart.css";

const Cart = ({ cart, removeItems }) => {
  // const { name, img } = cart;
  const [items, setItems] = useState(-1);
  // console.log(cart[1].name);

  // let name;
  function randomItemAdd() {
    if (cart.length > 0) {
      setItems(Math.floor(Math.random() * cart.length));
      console.log(items);
    }
    // name = cart[items].name;
    // console.log(name);
  }

  return (
    <div className="cart">
      <h2>Selected Items :</h2>
      {cart.map((item) => (
        <SelectItem item={item} key={item.id}></SelectItem>
      ))}
      <button className="choose-btn" onClick={randomItemAdd}>
        Choose 1 for me
      </button>
      <br />
      <button
        className="choose-again"
        onClick={() => {
          setItems(-1);
          removeItems();
        }}
      >
        Choose Again
      </button>
      {items > -1 && (
        <div className="random">
          <span>"{cart[items].name}"</span> is for you :)
        </div>
      )}
    </div>
  );
};

export default Cart;
