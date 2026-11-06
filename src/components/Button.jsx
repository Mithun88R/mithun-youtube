import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="shrink-0 rounded-xl px-4 m-2 hover:bg-black text-white cursor-pointer bg-gray-300">
        {name}
      </button>
    </div>
  );
};

export default Button;
