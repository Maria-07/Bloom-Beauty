import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  // let isclick = true;
  //   let click = 0;
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [click, setClick] = useState(0);

  useEffect(() => {
    fetch("fakeData.json")
      .then((ref) => ref.json())
      .then((data) => setProducts(data));
  }, []);

  //   add event-handler

  const addToCartProduct = (selectedProduct) => {
    if (click < 4) {
      //   console.log(click);
      // console.log(selectedProduct.name);
      const newCart = [...cartItems, selectedProduct];
      // console.log(newCart);
      setCartItems(newCart);
      //   click = click + 1;
      setClick(click + 1);
    } else {
      setClick(5);
    }
  };

  console.log(click);

  // remove items
  const removeItems = () => {
    // console.log('maria');
    setCartItems([]);
    setClick(0);
  };

  return (
    <div>
      <div className="error">
        {click === 5 && (
          <div>
            <span>Sorry !!</span> You Can Not Add more Than 4 products :)
          </div>
        )}
      </div>
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
          <Cart cart={cartItems} removeItems={removeItems}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
