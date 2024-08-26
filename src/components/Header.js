<<<<<<< HEAD
import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO, USER_AVATAR } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // When the component unmounts, then it unsubscribes the onAuthStateChanged.
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen z-10 bg-gradient-to-b from-black px-8 py-2 flex justify-between">
      <img className=" w-52" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-4">
          <img src={USER_AVATAR} className="w-12 h-12" />
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
=======
import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSearchSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // When the component unmounts, then it unsubscribes the onAuthStateChanged.
    return () => unsubscribe();
  }, []);

  const handleGPTSearch = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute w-screen z-10 bg-gradient-to-b from-black px-8 py-2 flex justify-between">
      <img className=" w-52" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-4">
          <button
            className="p-2 m-2 bg-red-700 text-white rounded-lg"
            onClick={handleGPTSearch}
          >
            GPT Search
          </button>
          <img src={USER_AVATAR} className="w-12 h-12" />
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
>>>>>>> a4ac331 (implemented GPT search button)
