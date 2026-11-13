import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div>
      <div className="flex p-1 m-1 shadow-sm ">
        <img
          className="w-7 h-7 rounded-full "
          src="https://as1.ftcdn.net/jpg/02/18/23/02/1000_F_218230230_OdCO2XyeMsH3ica7Um99uIeMnTFGyibC.jpg"
          alt="user_icon"
        />
        <p className="p-2 font-bold">{name}</p>
        <p className="p-2 wrap-break-word">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
