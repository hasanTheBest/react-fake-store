import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopProvider";

const CartItem = ({ product }) => {
  const { id, title, image, price } = product;
  return (
    <div className="flex gap-4 items-center border border-slate-800 shadow p-2 rounded">
      <img src={image} className="w-14 h-14 rounded" alt={title} />
      <h4 className="text-md flex-grow-1 text-slate-400">{title}</h4>
      <CartIncrementDecrement id={id} />
      <p className="font-semibold text-lg text-slate-400">
        ${price * (product.count ? product.count : 1)}
      </p>
      <button className="p-1 rounded border-0 shadow bg-slate-800 text-red-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  );
};

const CartIncrementDecrement = ({ id }) => {
  const [count, setCount] = useState(1);
  const { cart, setCart } = useContext(ShopContext);

  const handleClickCount = (id, action) => {
    const item = cart.find((ci) => ci.id === id);
    const itemIndex = cart.findIndex((ci) => ci.id === id);
    if (action === "minus") {
      if (count === 1) return;

      if (item["count"]) {
        item.count = item.count - 1;

        cart[itemIndex] = item;
        setCart([...cart]);
        setCount(count - 1);
      }
    } else {
      if (item["count"]) {
        item.count = item.count + 1;
      } else {
        item.count = 2;
      }

      cart[itemIndex] = item;
      setCart([...cart]);
      setCount(count + 1);
    }
  };

  return (
    <div className="flex text-slate-400 font-semibold ml-auto rounded">
      <button
        className="bg-slate-800 p-1 border-r-2 border-slate-700 text-slate-500 hover:text-slate-400 transition-all"
        onClick={() => handleClickCount(id, "minus")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
        </svg>
      </button>
      <span className="bg-slate-800 px-3 py-1 border-r-2 border-slate-700">
        {count}
      </span>
      <button
        className="bg-slate-800 p-1 text-slate-500 hover:text-slate-400 transition-all"
        onClick={() => handleClickCount(id, "plus")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
    </div>
  );
};

const Cart = () => {
  const { cart } = useContext(ShopContext);

  return (
    <div className="max-w-4xl mx-auto flex gap-6">
      <div className="max-w-xl grid grid-cols-1 gap-4">
        <h2 className="text-3xl col-span-full text-slate-400 text-center font-semibold py-4 my-4">
          You've Added {cart.length}
        </h2>

        {/* <pre>{JSON.stringify(cart, null, 2)}</pre> */}
        {/* product */}
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

const Checkout = () => {
  const { cart } = useContext(ShopContext);

  const subtotal = cart.reduce((prev, current) => {
    return prev + current.price * (current.count ? current.count : 1);
  }, 0);

  const vat = subtotal * 0.1;
  const total = subtotal + vat + 50; /* 50 for shipping */

  return (
    <div className="p-4 flex-grow bg-slate-800 mt-8 border border-slate-700 font-semibold">
      <h3 className="text-2xl text-center mb-4 font-semibold">Checkout</h3>
      <div>
        <div className="flex justify-between mb-1 text-slate-400">
          <span>Subtotal</span> <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-1 text-slate-400">
          <span>Vat (10%)</span> <span>{vat.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-1 text-slate-400">
          <span>Shipping</span> <span>{50}</span>
        </div>
        <div className="flex justify-between mb-1 text-slate-300">
          <span>Total</span> <span>{total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};
