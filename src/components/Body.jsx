import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import WatchVideo from "./WatchVideo";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="grid grid-flow-col p-2">
      <div className=" shadow-2xl">
        <SideBar />
      </div>
      <div className="min-w-0">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
