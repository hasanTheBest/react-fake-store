import React from "react";
import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);
  const [comparedProducts, setComparedProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        likedProducts,
        comparedProducts,
        setProducts,
        setCart,
        setComparedProducts,
        setLikedProducts,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
