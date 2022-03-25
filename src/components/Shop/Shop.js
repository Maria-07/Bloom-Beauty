import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  let click = 0;
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((ref) => ref.json())
      .then((data) => setProducts(data));
  }, []);

  //   add event-handler

  const addToCartProduct = (selectedProduct) => {
    if (click < 4) {
      // console.log(selectedProduct.name);
      const newCart = [...cartItems, selectedProduct];
      // console.log(newCart);
      setCartItems(newCart);
      click++;
    } else {
    }
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            addToCart={addToCartProduct}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cartItems}></Cart>
      </div>
    </div>
  );
};

export default Shop;
