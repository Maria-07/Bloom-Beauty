import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  //   console.log(product);
  const { name, img, price } = product;
  return (
    <div className="product-card">
      {/* <img src={img} alt='product-pic'> */}
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>Price : {price}$</p>
      </div>
      <button className="card-btn">
        <p>Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
