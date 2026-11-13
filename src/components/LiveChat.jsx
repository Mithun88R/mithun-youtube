import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/slice/chatSlice";
import { generateRandomNames, generateRandomText } from "../utils/helper";

// const chatDatas = [
//   {
//     name: "Mithun R",
//     message: "This is a chat message",
//   },
//   {
//     name: "Sruthi P",
//     message: "This is a second chat Message 👍",
//   },
//   {
//     name: "Pranav M",
//     message: "This is a chat Message 👍",
//   },
//   {
//     name: "Mithun R",
//     message: "This is a chat message",
//   },
//   {
//     name: "Mithun R",
//     message: "This is a chat message",
//   },
//   {
//     name: "Mithun R",
//     message: "This is a chat message",
//   },
//   {
//     name: "Mithun R",
//     message: "This is a chat message",
//   },
//   {
//     name: "Mithun R",
//     message: "This is a chat message",
//   },
//   {
//     name: "Mithun R",
//     message: "This is a chat message",
//   },
//   {
//     name: "Mithun R",
//     message: "This is a chat message",
//   },
//   {
//     name: "Mithun R",
//     message: "This is a chat message",
//   },
//   {
//     name: "Mithun R",
//     message: "This is a chat message",
//   },
//   {
//     name: "Mithun R",
//     message: "This is a chat message",
//   },
//   {
//     name: "Mithun R",
//     message: "This is a chat message",
//   },
//   {
//     name: "Mithun R",
//     message: "This is a chat message",
//   },
// ];

const LiveChat = () => {
  const [yourMessage, setYourMessage] = useState("");
  const dispatch = useDispatch();

  const chatDatas = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: generateRandomText(20) + " 🙏",
        }),
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <h2 className="font-bold">Live Chat</h2>
      <div className="ml-1 w-full h-125 p-2 border overflow-auto border-black bg-slate-100 rounded-lg flex flex-col-reverse">
        {chatDatas.map((chatData, index) => (
          <ChatMessage
            key={index}
            name={chatData.name}
            message={chatData.message}
          />
        ))}
      </div>
      <form
        className="w-full border border-black rounded-lg p-2 ml-1"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Mithun R",
              message: yourMessage,
            }),
          );
          setYourMessage("");
        }}
      >
        <input
          type="text"
          value={yourMessage}
          className="border border-black w-[80%]  px-2 m-2"
          onChange={(e) => setYourMessage(e.target.value)}
        />
        <button className="bg-green-300 rounded-lg cursor-pointer p-1">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
