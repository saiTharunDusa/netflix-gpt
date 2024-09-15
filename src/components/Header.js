import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSearchSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gptSearchView = useSelector((store) => store.gpt.gptSearchView);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
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
    return () => unsubscribe();
  }, []);

  const handleGPTSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="relative w-full z-10 bg-black px-4 py-2 flex flex-col sm:flex-row sm:justify-between items-center">
      <img className="w-36 sm:w-52 mb-4 sm:mb-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex flex-col sm:flex-row items-center">
          {gptSearchView && (
            <select 
              className="p-2 m-2 bg-red-700 text-white rounded-lg text-sm sm:text-base w-full sm:w-auto"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
              ))}
            </select>
          )}
          <button
            className="p-2 m-2 bg-red-700 text-white rounded-lg text-sm sm:text-base w-full sm:w-auto"
            onClick={handleGPTSearch}
          >
            {gptSearchView ? "Home" : "GPT Search"}
          </button>
          <div className="flex items-center mt-4 sm:mt-0">
            <img src={USER_AVATAR} className="w-8 h-8 sm:w-12 sm:h-12 mr-2" alt="User Avatar" />
            <button onClick={handleSignOut} className="font-bold text-white text-sm sm:text-base">
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;