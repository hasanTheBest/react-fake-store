import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopProvider";

const Product = ({
  id,
  title,
  image,
  category,
  description,
  price,
  rating,
}) => {
  const {
    cart,
    likedProducts,
    comparedProducts,
    setCart,
    setLikedProducts,
    setComparedProducts,
  } = useContext(ShopContext);

  // Added to cart
  const handleAddToCart = () => {
    setCart([...cart, { id, title, image, price }]);
  };

  // added to fav list
  const handleAddToLike = () => {
    setLikedProducts([...likedProducts, id]);
  };

  // add product to compare
  const handleAddToCompare = () => {
    setComparedProducts([...comparedProducts, id]);
  };

  return (
    <div className="bg-slate-800 shadow-lg p-2 border border-slate-600 rounded mb-6 relative pb-12">
      {/* image */}
      <img src={image} className="w-full h-80 mb-4" alt={title} />

      {/* product description */}
      <div className="px-1">
        <Link
          to={`/category/${category}`}
          className="font-semibold text-slate-500 uppercase text-xs tracking-wider hover:text-slate-300 transition-all"
        >
          {category}
        </Link>
        <h4 className="font-semibold mb-2 text-lg">{title}</h4>
        <h4 className="font-semibold mb-4 text-lg">${price}</h4>

        <p className="text-slate-400 mb-4">
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>
      </div>

      {/* Product action, Cart, Love, Compare */}
      <div className="flex bg-slate-700 absolute bottom-0 w-full left-0 rounded justify-center text-slate-300 text-semibold">
        <button
          className="h-12 flex-grow shadow bg-emerald-800 text-emerald-200 hover:bg-emerald-700 hover:text-emerald-100 transition-all flex justify-center items-center"
          onClick={handleAddToCart}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <span>Cart</span>
        </button>
        <button
          className="h-12 flex-grow shadow border-red-800 bg-slate-400 hover:bg-red-800 text-red-800 hover:text-slate-200 transition-all flex justify-center items-center"
          onClick={handleAddToLike}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
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
          <span>Love</span>
        </button>
        <button
          className="h-12 flex-grow shadow bg-slate-400 border-l-2 border-sky-800 hover:bg-sky-800 text-sky-800 hover:text-slate-200 transition-all flex justify-center items-center"
          onClick={handleAddToCompare}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <span>Compare</span>
        </button>
      </div>
    </div>
  );
};

export default Product;
