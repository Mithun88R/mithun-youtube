import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import WatchVideo from "./WatchVideo";
import { Outlet, useLocation } from "react-router-dom";

const Body = () => {
  const location = useLocation();

  const isWatchPage = location.pathname === "/watch";
  return (
    <div
      className={`grid p-2 ${isWatchPage ? "grid-cols-1" : "grid-flow-col"}`}
    >
      {!isWatchPage && (
        <div className=" shadow-2xl">
          <SideBar />
        </div>
      )}
      <div className="min-w-0">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
