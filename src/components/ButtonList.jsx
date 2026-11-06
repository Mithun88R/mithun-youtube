import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const names = [
    "All",
    "Live",
    "Malayalam Cinemas",
    "Music",
    "Gaming",
    "Mohanlal",
    "Sports",
    "Movie",
    "Dance",
    "APIs",
    "Games",
    "Football",
    "Cricket",
    "Hockey",
    "System",
  ];

  return (
    <div className="flex w-full min-w-0 p-1 m-1 gap-2 overflow-y-hidden overflow-x-auto whitespace-nowrap button-list">
      {names.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
