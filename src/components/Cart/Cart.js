import React from "react";
import SelectItem from "../SelectItem/SelectItem";
import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart);

  // let name = "";
  // for (const cartItems of cart) {
  //   name = name + <br></br> + cartItems.name;
  // }

  // cart.map((cartProduct) => (
  //     {name} = {name} + {cartProduct.name}
  // ));

  return (
    <div className="cart">
      <h2>Selected Items :</h2>
      {/* <div>{name}</div> */}
      {cart.map((item) => (
        <SelectItem item={item} key={item.id}></SelectItem>
      ))}
      <button className="choose-btn">Choose 1 for me</button>
      <br />
      <button className="choose-again">Choose Again</button>
    </div>
  );
};

export default Cart;
