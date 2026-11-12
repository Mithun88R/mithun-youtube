import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/slice/navSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchVideo = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-9 min-w-0">
        <iframe
          width="1110"
          height="500"
          src={
            "https://www.youtube.com/embed/" +
            searchParams.get("v") +
            "?si=-y0xiCAS399kcitr"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="flex justify-end flex-wrap gap-2 p-1 m-1 ">
          <button className="cursor-pointer m-2 bg-gray-300 rounded-lg hover:bg-gray-500">
            Subscribe
          </button>
          <button className="cursor-pointer m-2 bg-gray-300 rounded-lg hover:bg-gray-500">
            👍
          </button>
          <button className="cursor-pointer m-2 bg-gray-300 rounded-lg  hover:bg-gray-500">
            👎
          </button>
          <button className="cursor-pointer m-2 bg-gray-300 rounded-lg hover:bg-gray-500">
            Share
          </button>
        </div>
        <CommentsContainer />
      </div>

      <div className="col-span-3">
        <div className="p-1">
          <LiveChat />
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;
