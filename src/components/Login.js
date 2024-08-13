import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate.js";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState("true");

  const [error, setError] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate the data
    const message = checkValidData(email.current.value, password.current.value);
    setError(message);
  };

  const isToggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/80a8277e-14eb-4192-83f7-45c27cd0652b/US-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_99b9a7c9-7791-4a48-b335-09e8ee246500_medium.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white bg-opacity-80 rounded-lg"
      >
        <h1 className="text-white font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          ref={password}
          type="Password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        {error != null && (
          <p className="py-4 font-bold text-xl text-red-700">{error}</p>
        )}
        <button
          className="p-4 my-6 w-full bg-red-700 rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p py-4 onClick={isToggleSignIn} className="cursor-pointer">
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
