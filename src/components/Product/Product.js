import React from "react";

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
    </div>
  );
};

export default Product;
