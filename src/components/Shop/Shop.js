import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopProvider";
import Product from "../Product/Product";

const Shop = () => {
  const { products } = useContext(ShopContext);
  return (
    // <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
    <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  gap-5">
      <h2 className="text-3xl col-span-full text-slate-400 text-center font-semibold py-4 my-4">
        Recent Products
      </h2>

      {/* product */}
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Shop;
