
import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BG_PHOTO_URL, USER_AVATAR } from "../utils/constants.js";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState("true");

  const [error, setError] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    // Validate the data
    const message = checkValidData(email.current.value, password.current.value);
    setError(message);

    if (message) return;

    if (!isSignIn) {
      //sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setError(error);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setError(errorCode + errorMessage);
        });
    } else {
      //sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + errorMessage);
        });
    }
  };

  const isToggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_PHOTO_URL} alt="logo" />
      </div>
      <form
  onSubmit={(e) => e.preventDefault()}
  className="absolute p-6 sm:p-8 md:p-10 lg:p-12 bg-black my-12 mx-4 sm:mx-8 md:mx-auto left-0 right-0 text-white bg-opacity-80 rounded-lg max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
>
  <h1 className="text-white font-bold text-2xl sm:text-3xl py-2 sm:py-4">
    {isSignIn ? "Sign In" : "Sign Up"}
  </h1>
  {!isSignIn && (
    <input
      ref={name}
      type="text"
      placeholder="Full Name"
      className="p-3 sm:p-4 my-3 sm:my-4 w-full bg-gray-700 rounded-lg"
    />
  )}
  <input
    ref={email}
    type="text"
    placeholder="Email Address"
    className="p-3 sm:p-4 my-3 sm:my-4 w-full bg-gray-700 rounded-lg"
  />
  <input
    ref={password}
    type="Password"
    placeholder="Password"
    className="p-3 sm:p-4 my-3 sm:my-4 w-full bg-gray-700 rounded-lg"
  />
  {error !== null && (
    <p className="py-2 sm:py-4 font-bold text-lg sm:text-xl text-red-700">
      {error}
    </p>
  )}
  <button
    className="p-3 sm:p-4 my-4 sm:my-6 w-full bg-red-700 rounded-lg"
    onClick={handleButtonClick}
  >
    {isSignIn ? "Sign In" : "Sign Up"}
  </button>
  <p
    onClick={isToggleSignIn}
    className="y-2 sm:py-4 cursor-pointer text-sm sm:text-base"
  >
    {isSignIn
      ? "New to Netflix? Sign Up Now"
      : "Already registered? Sign In Now"}
  </p>
</form>
    </div>
  );
};

export default Login;
