import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-8 max-w-2xl mx-auto mt-12 rounded shadow-md border border-slate-700 bg-slate-800">
      <h2 className="text-center mb-8 text-3xl text-slate-500 font-semibold">
        Sign Up
      </h2>

      <form className="mb-6 text-slate-400 font-semibold text-lg">
        <div className="mb-4 w-full flex flex-col">
          <label htmlFor="name" className="mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            className="p-3 border border-slate-600 bg-slate-700 focus:bg-slate-600 focus:text-slate-200 flex-grow rounded shadow"
          />
        </div>
        <div className="mb-4 w-full flex flex-col">
          <label htmlFor="email" className="mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            className="p-3 border border-slate-600 bg-slate-700 focus:bg-slate-600 focus:text-slate-200 flex-grow rounded shadow"
          />
        </div>
        <div className="mb-4 w-full flex flex-col">
          <label htmlFor="password" className="mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Your Password"
            className="p-3 border border-slate-600 bg-slate-700 focus:bg-slate-600 focus:text-slate-200 flex-grow rounded shadow"
          />
        </div>
        <div className="mb-4 w-full flex flex-col">
          <label htmlFor="confirmPassword" className="mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Re-type your password"
            className="p-3 border border-slate-600 bg-slate-700 focus:bg-slate-600 focus:text-slate-200 flex-grow rounded shadow"
          />
        </div>

        {/* submit button */}
        <input
          type="submit"
          value="Sign Up"
          className="w-full p-3 text-center shadow-md cursor-pointer rounded bg-sky-800 hover:bg-sky-700 text-sky-300 hover:text-sky-200 transition-all mt-4"
        />
      </form>

      <p className="my-3 text-slate-400">
        Already a user?{" "}
        <Link to="/login" className="text-sky-400">
          Sing In
        </Link>
      </p>

      {/* one click log in  */}
      <div className="px-4 flex flex-col items-center">
        <span className="relative text-slate-500 mb-2 before:w-full after:w-full before:h-0.5 after:h-0.5 before:bg-slate-700 after:bg-slate-700 before:absolute after:absolute before:-left-full after:-right-full before:top-1/2 after:top-1/2 before:-ml-2 after:-mr-2">
          Or Sign up with
        </span>

        <div className="flex gap-2 justify-center">
          <button className="py-2 px-4 shadow bg-sky-800 hover:bg-sky-700 text-sky-400 hover:text-sky-300 transition-all rounded border-0">
            Google
          </button>
          <button className="py-2 px-4 shadow bg-emerald-800 hover:bg-emerald-700 text-emerald-400 hover:text-emerald-300 transition-all rounded border-0">
            Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
