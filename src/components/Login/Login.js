import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../src/firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

const Login = () => {
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});

  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, userGithub, loadingGithub, errorGithub] =
    useSignInWithGithub(auth);
  const [sendPasswordResetEmail, sendingResetPass, errorResetPass] =
    useSendPasswordResetEmail(auth);
  const [signInWithEmailAndPassword, userSignIn, loadingSingIn, errorSignIn] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // input field validation
  const validateInputField = (e, field) => {
    // email validation code
    const emailReg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailErr = "Provide valid email";

    /*  
      1. Minimum eight characters
      2. at least one letter
      3. one number
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    */
    const passwordReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const passwordErr = "Min 8 chars, at least one letter, number";

    switch (field) {
      case "email":
        if (e.target.value !== "" && emailReg.test(e.target.value)) {
          // remove red border of the input field
          e.target.classList.remove("border-red-800", "focus:border-red-800");
          setEmail({ ...email, data: e.target.value, error: "" });
        } else {
          // add red border to the input field
          e.target.classList.add("border-red-800", "focus:border-red-800");
          // set error to state
          setEmail({
            ...email,
            error: emailErr,
          });
        }
        break;
      case "password":
        if (e.target.value !== "" && passwordReg.test(e.target.value)) {
          // remove red border of the input field
          e.target.classList.remove("border-red-800", "focus:border-red-800");
          setPassword({ ...password, data: e.target.value, error: "" });
        } else {
          // add red border to the input field
          e.target.classList.add("border-red-800", "focus:border-red-800");
          // e.target.focus();
          setPassword({
            ...password,
            error: passwordErr,
          });
        }
        break;
      default:
        alert("Encountered an error. Please try again later.");
    }
  };

  // handle click login form button
  const handleLogInFormSubmission = (e) => {
    e.preventDefault();

    if (email.error || password.error) {
      alert("Try fixing error. Then submit");
      return;
    }

    // log in with email and password
    signInWithEmailAndPassword(email.data, password.data);
  };

  // signInWithXXX
  const handleClickSignInWith = (provider) => {
    if (provider === "google") {
      signInWithGoogle();
    } else {
      signInWithGithub();
    }
  };

  // send password reset link
  const handleResetPassword = async () => {
    if (email.data) {
      await sendPasswordResetEmail(email.data);
      alert("Password reset email is sent");
    } else {
      alert("Provide Email Address.");
    }
  };

  if (errorGoogle || errorGithub || errorSignIn || errorResetPass)
    console.error(
      errorGoogle?.message ||
        errorGithub?.message ||
        errorSignIn?.message ||
        errorResetPass?.message
    );

  if (userGoogle || userGithub || userSignIn) navigate(from, { replace: true });

  return (
    <div className="p-8 max-w-2xl mx-auto mt-12 rounded shadow-md border border-slate-700 bg-slate-800">
      <h2 className="text-center mb-8 text-3xl text-slate-500 font-semibold">
        Log In
      </h2>

      <form
        className="mb-2 text-slate-400 font-semibold text-lg"
        onSubmit={handleLogInFormSubmission}
      >
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
            onBlur={(e) => validateInputField(e, "email")}
          />

          {/* Error message */}
          {!!email.error && (
            <p className="text-red-500 mt-2 text-sm font-normal">
              {email.error}
            </p>
          )}
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
            onBlur={(e) => validateInputField(e, "password")}
          />
          {/* Error message */}
          {!!password.error && (
            <p className="text-red-500 mt-2 text-sm font-normal">
              {password.error}
            </p>
          )}
        </div>
        {/* submit button */}
        <input
          type="submit"
          value="Sign In"
          className="w-full p-3 text-center shadow-md cursor-pointer rounded bg-sky-800 hover:bg-sky-700 text-sky-300 hover:text-sky-200 transition-all mt-4"
        />
      </form>
      <p className="mt-1 text-slate-400">
        Forgot password?{" "}
        <button
          className="cursor-pointer text-sky-400"
          onClick={handleResetPassword}
        >
          reset password
        </button>
      </p>

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
          <button
            className="py-2 px-4 shadow bg-emerald-800 hover:bg-emerald-700 text-emerald-400 hover:text-emerald-300 transition-all rounded border-0"
            onClick={() => handleClickSignInWith("github")}
          >
            Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
