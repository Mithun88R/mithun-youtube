import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenuClick } from "../redux/slice/navSlice";
import { YOUTUBE_SUGGESSTION_API } from "../utils/constants";
import { cacheResults } from "../redux/slice/searchSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SUGGESSTION_API + searchQuery);
    const response = await data.json();
    console.log("suggestion", response[1]);
    setSuggestions(response[1]);
    console.log("searchQuery", searchQuery);
    dispatch(
      cacheResults({
        [searchQuery]: response[1],
      }),
    );
  };

  const handleMenuBar = () => {
    console.log("Menu Button Clicked");

    dispatch(toggleMenuClick());
  };

  return (
    <div className="grid grid-flow-col bg-black p-4  m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="w-8 h-8 ml-2 cursor-pointer "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgRNNkkBfoq4_WTkXqrnjUPGh3NcBObaSF6N_9qkSJEQ&s=10"
          alt="menu_icon"
          onClick={handleMenuBar}
        />
        <a href="/">
          <img
            className=" h-8 w-30 object-cover ml-2"
            src="https://zonalogo.com/assets/youtube-logo-png-svg.webp?asset=2008&w=320"
            alt="youtube_logo"
          />
        </a>
      </div>
      <div className="col-span-10 items-center">
        <input
          type="text"
          placeholder="Search..."
          className="border-2 w-1/2 focus:outline-none  text-white rounded-l-2xl p-2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="bg-gray-800 border-2 text-white p-2 cursor-pointer  rounded-r-2xl">
          🔍
        </button>
        {showSuggestions && searchQuery.trim() && suggestions.length > 0 && (
          <div className="absolute bg-white w-[36%] p-2 shadow-lg  rounded-lg">
            <ul>
              {suggestions.map((suggestion, index) => (
                <li key={index} className="cursor-pointer hover:bg-gray-200">
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="w-8 h-8 rounded-full"
          src="https://as1.ftcdn.net/jpg/02/18/23/02/1000_F_218230230_OdCO2XyeMsH3ica7Um99uIeMnTFGyibC.jpg"
          alt="user_icon"
        />
      </div>
    </div>
  );
};

export default Header;
