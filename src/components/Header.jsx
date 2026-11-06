import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenuClick } from "../redux/slice/navSlice";

const Header = () => {
  const isMenuOpen = useSelector((store) => store.nav.isMenuOpen);
  const dispatch = useDispatch();
  const handleMenuBar = () => {
    console.log("Menu Button Clicked");
    console.log("menuToggle", isMenuOpen);
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
        <img
          className=" h-8 w-30 object-cover ml-2"
          src="https://zonalogo.com/assets/youtube-logo-png-svg.webp?asset=2008&w=320"
          alt="youtube_logo"
        />
      </div>
      <div className="col-span-10 items-center">
        <input
          type="text"
          placeholder="Search..."
          className="border-2 w-1/2 focus:outline-none  text-white rounded-l-2xl p-2"
        />
        <button className="bg-gray-800 border-2 text-white p-2 cursor-pointer  rounded-r-2xl">
          🔍
        </button>
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
