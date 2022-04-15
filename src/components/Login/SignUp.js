import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState({});
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});
  const [confirmPassErr, setConfirmPassErr] = useState("");

  const validateInputField = (e, field) => {
    // at least 3 characters
    const nameReg = /(.*[a-z]){3}/i;
    const nameErr = "Name must be at least 3 characters long";
    // email validation code
    const emailReg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailErr = "Provide valid email";

    /*  
      1. Minimum eight characters
      2. at least one uppercase letter,
      3. one lowercase letter, 
      4. one number and 
      5. one special character
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    */

    /*  
      1. Minimum eight characters
      2. at least one letter
      3. one number
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    */
    const passwordReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const passwordErr = "Min 8 chars, at least one letter, number";

    switch (field) {
      case "name":
        if (e.target.value !== "" && nameReg.test(e.target.value)) {
          // remove red border of the input field
          e.target.classList.remove("border-red-800", "focus:border-red-800");
          setName({ ...name, data: e.target.value, error: "" });
        } else {
          // add red border to the input field
          e.target.classList.add("border-red-800", "focus:border-red-800");
          // e.target.focus();
          setName({
            ...name,
            error: nameErr,
          });
        }
        break;
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
      case "confirmPassword":
        if (password.data !== e.target.value) {
          setConfirmPassErr("Password does not match.");
          e.target.classList.add("border-red-800", "focus:border-red-800");
        } else {
          e.target.classList.remove("border-red-800", "focus:border-red-800");
          setConfirmPassErr("");
        }
        break;
      default:
        alert("Encountered an error. Please try again later.");
    }
  };

  const handleSignUpFormSubmit = (e) => {
    e.preventDefault();

    if (name.error || email.error || password.error || confirmPassErr) {
      alert("Try fixing error. Then submit");
      return;
    }

    console.log(
      "name email pass confirm",
      name.data,
      email.data,
      password.data
    );
  };

  return (
    <div className="p-8 max-w-2xl mx-auto mt-12 rounded shadow-md border border-slate-700 bg-slate-800">
      <h2 className="text-center mb-8 text-3xl text-slate-500 font-semibold">
        Sign Up
      </h2>

      <form
        className="mb-6 text-slate-400 font-semibold text-lg"
        onSubmit={handleSignUpFormSubmit}
      >
        {/* Name */}
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
            onBlur={(e) => validateInputField(e, "name")}
          />
          {/* Error message */}
          {!!name.error && (
            <p className="text-red-500 mt-2 text-sm font-normal">
              {name.error}
            </p>
          )}
        </div>

        {/* Email */}
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

        {/* Password */}
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

        {/* Confirm Password */}
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
            onBlur={(e) => validateInputField(e, "confirmPassword")}
          />
          {/* Error message */}
          {!!confirmPassErr && (
            <p className="text-red-500 mt-2 text-sm font-normal">
              {confirmPassErr}
            </p>
          )}
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
