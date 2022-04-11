import { useContext } from "react";
import { ShopContext } from "../../context/ShopProvider";

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

export default Checkout;
