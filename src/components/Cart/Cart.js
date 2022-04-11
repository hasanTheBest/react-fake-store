import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopProvider";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = () => {
  const { cart } = useContext(ShopContext);

  return (
    <div className="max-w-4xl mx-auto flex gap-6">
      <div className="max-w-xl grid grid-cols-1 gap-4">
        <h2 className="text-3xl col-span-full text-slate-400 text-center font-semibold py-4 my-4">
          You've Added {cart.length}
        </h2>

        {/* Cart Items */}
        {cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>

      {/* Checkout */}
      <Checkout />
    </div>
  );
};

export default Cart;
