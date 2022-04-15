import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../src/firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  // useEffect(() => {

  // }, [user])

  const handleClickSignInWith = (provider) => {
    if (provider === "google") {
      signInWithGoogle();
    }
  };

  if (user) navigate(from, { replace: true });

  return (
    <div className="p-8 max-w-2xl mx-auto mt-12 rounded shadow-md border border-slate-700 bg-slate-800">
      <h2 className="text-center mb-8 text-3xl text-slate-500 font-semibold">
        Log In
      </h2>

      <form className="mb-6 text-slate-400 font-semibold text-lg">
        {/* email */}
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
        {/* password */}
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
        {/* submit button */}
        <input
          type="submit"
          value="Sign In"
          className="w-full p-3 text-center shadow-md cursor-pointer rounded bg-sky-800 hover:bg-sky-700 text-sky-300 hover:text-sky-200 transition-all mt-4"
        />
      </form>

      <p className="my-3 text-slate-400">
        Not a user?{" "}
        <Link to="/signup" className="text-sky-400">
          Sign Up
        </Link>
      </p>

      {/* one click log in  */}
      <div className="px-4 flex flex-col items-center">
        <span className="relative text-slate-500 mb-2 before:w-full after:w-full before:h-0.5 after:h-0.5 before:bg-slate-700 after:bg-slate-700 before:absolute after:absolute before:-left-full after:-right-full before:top-1/2 after:top-1/2 before:-ml-2 after:-mr-2">
          Or login with
        </span>

        <div className="flex gap-2 justify-center">
          <button
            className="py-2 px-4 shadow bg-sky-800 hover:bg-sky-700 text-sky-400 hover:text-sky-300 transition-all rounded border-0"
            onClick={() => handleClickSignInWith("google")}
          >
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

export default Login;
