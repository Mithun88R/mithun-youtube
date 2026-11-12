import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex bg-gray-200 rounded-lg m-2 p-2">
      <img
        className="w-8 h-8 rounded-full"
        src="https://as1.ftcdn.net/jpg/02/18/23/02/1000_F_218230230_OdCO2XyeMsH3ica7Um99uIeMnTFGyibC.jpg"
        alt="user_icon"
      />
      <div>
        <p className="font-bold px-3">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
