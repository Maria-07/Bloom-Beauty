import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((ref) => ref.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product name={product.name} key={product.id}></Product>
        ))}
      </div>
      <div className="cart-container"></div>
    </div>
  );
};

export default Shop;
