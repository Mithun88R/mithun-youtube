import React from "react";
import Comment from "./Comment";
import CommentsList from "./CommentsList";

const CommentsContainer = () => {
  const CommentsData = [
    {
      name: "Mithun",
      text: "This is my text Comments",
      replies: [
        {
          name: "Sruthi",
          text: "This is my text Comments",
          replies: [],
        },
        {
          name: "Pranav",
          text: "This is my text Comments",
          replies: [],
        },
      ],
    },
    {
      name: "Mithun",
      text: "This is my text Comments",
      replies: [
        {
          name: "Mithun1",
          text: "This is my text Comments",
          replies: [],
        },
        {
          name: "Mithun2",
          text: "This is my text Comments",
          replies: [],
        },
      ],
    },
    {
      name: "Mithun",
      text: "This is my text Comments",
      replies: [
        {
          name: "Mithun3",
          text: "This is my text Comments",
          replies: [],
        },
        {
          name: "Mithun4",
          text: "This is my text Comments",
          replies: [],
        },
      ],
    },
    {
      name: "Mithun",
      text: "This is my text Comments",
      replies: [],
    },
    {
      name: "Mithun",
      text: "This is my text Comments",
      replies: [],
    },
    {
      name: "Mithun",
      text: "This is my text Comments",
      replies: [],
    },
    {
      name: "Mithun",
      text: "This is my text Comments",
      replies: [],
    },
  ];

  return (
    <div className="p-1 my-2">
      <h1 className="text-xl font-bold">Comments:</h1>
      {/* <Comment data={CommentsData[0]} /> */}
      <CommentsList comments={CommentsData} />
    </div>
  );
};

export default CommentsContainer;
