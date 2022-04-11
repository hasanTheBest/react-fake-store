import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopProvider";

const Header = () => {
  const { cart, likedProducts, comparedProducts } = useContext(ShopContext);

  return (
    <header className="App-header bg-slate-800 sticky top-0">
      <nav className="max-w-4xl mx-auto flex justify-center h-14 items-center font-semibold">
        <Link
          to="/shop"
          className="p-4 mr-4 active:bg-slate-700 focus:bg-slate-700 hover:bg-slate-700 hover:text-slate-100 transition-all ease-linear"
        >
          Shop
        </Link>
        <Link
          to="/cart"
          className="p-4 mr-4 active:bg-slate-700 focus:bg-slate-700 hover:bg-slate-700 hover:text-slate-100 transition-all ease-linear"
        >
          Cart
        </Link>

        <div className="flex items-center gap-2">
          {/* Cart */}
          <button className="hover:bg-slate-700 transition-all p-3 rounded-full text-emerald-800 relative">
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>

            {!!cart.length && (
              <span className="w-5 h-5 leading-5 rounded-full font-semibold text-xs text-slate-200 text-center absolute top-0 left-1/2 bg-emerald-800">
                {cart.length}
              </span>
            )}
          </button>

          {/* Liked */}
          <button className="hover:bg-slate-700 transition-all p-3 rounded-full text-red-800 relative">
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
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>

            {!!likedProducts.length && (
              <span className="w-5 h-5 leading-5 rounded-full font-semibold text-xs text-slate-200 text-center absolute top-0 left-1/2 bg-red-800">
                {likedProducts.length}
              </span>
            )}
          </button>

          {/* Compared */}
          <button className="hover:bg-slate-700 transition-all p-3 rounded-full text-sky-800 relative">
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
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>

            {!!comparedProducts.length && (
              <span className="w-5 h-5 leading-5 rounded-full font-semibold text-xs text-slate-200 text-center absolute top-0 left-1/2 bg-sky-800">
                {comparedProducts.length}
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
