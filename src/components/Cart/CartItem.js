import { useContext } from "react";
import { ShopContext } from "../../context/ShopProvider";
import CartIncrementDecrement from "./CartIncrementDecrement";

const CartItem = ({ product }) => {
  const { id, title, image, price } = product;
  const { cart, setCart } = useContext(ShopContext);
  const handleRemoveCartItem = (id) =>
    setCart(cart.filter((item) => item.id !== id));

  return (
    <div className="flex gap-4 items-center border border-slate-800 shadow p-2 rounded">
      <img src={image} className="w-14 h-14 rounded" alt={title} />
      <h4 className="text-md flex-grow-1 text-slate-400">{title}</h4>
      <CartIncrementDecrement id={id} />
      <p className="font-semibold text-lg text-slate-400">
        ${price * (product.count ? product.count : 1)}
      </p>
      <button
        className="p-1 rounded border-0 shadow bg-slate-800 text-red-800"
        onClick={() => handleRemoveCartItem(id)}
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
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
