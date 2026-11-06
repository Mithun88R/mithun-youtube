import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.nav.isMenuOpen);

  console.log("sideBar IsOpenMenu", isMenuOpen);

  return (
    <div
      className={`bg-gray-400 text-white h-screen p-4 ${isMenuOpen ? "w-60" : "w-20"}`}
    >
      <div className="mb-4 border-b-2 border-gray-600">
        <ul className="space-y-2">
          <li className="p-2 hover:bg-gray-500 cursor-pointer">
            {" "}
            <Link to="/"> 🏠 {isMenuOpen && "Home"}</Link>
          </li>
          <li className="p-2 hover:bg-gray-500 cursor-pointer">
            {" "}
            📈 {isMenuOpen && "Trending"}
          </li>
          <li className="p-2 hover:bg-gray-500 cursor-pointer">
            {" "}
            📹 {isMenuOpen && "shorts"}
          </li>
        </ul>
      </div>
      <div className="mb-4 border-b-2 border-gray-600">
        <h1 className="font-bold p-2">{isMenuOpen && "Subscriptions"}</h1>
        <ul className="space-y-2">
          <li className="p-2 hover:bg-gray-500 cursor-pointer">
            🎵 {isMenuOpen && "Music"}
          </li>
          <li className="p-2 hover:bg-gray-500 cursor-pointer">
            🏃 {isMenuOpen && "Sports"}
          </li>
          <li className="p-2 hover:bg-gray-500 cursor-pointer">
            🎮 {isMenuOpen && "Gaming"}
          </li>
          <li className="p-2 hover:bg-gray-500 cursor-pointer">
            🎬 {isMenuOpen && "Movies"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
