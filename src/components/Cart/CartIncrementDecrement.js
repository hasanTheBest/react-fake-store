import { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopProvider";

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

export default CartIncrementDecrement;
