import React from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  return (
    <div className="ml-1 w-full h-125 p-2 border overflow-auto border-black bg-slate-100 rounded-lg">
      <h2 className="font-bold">Live Chat</h2>
      <ChatMessage name="Mithun R" message="This is a chat message" />
      <ChatMessage name="Sruthi P" message="This is a second chat message 👍" />
      <ChatMessage name="Pranav M" message="This is a chat message" />
      <ChatMessage name="Mithun R" message="This is a chat message" />
      <ChatMessage name="Mithun R" message="This is a chat message" />
      <ChatMessage name="Mithun R" message="This is a chat message" />
      <ChatMessage name="Mithun R" message="This is a chat message" />
      <ChatMessage name="Mithun R" message="This is a chat message" />
      <ChatMessage name="Mithun R" message="This is a chat message" />
      <ChatMessage name="Mithun R" message="This is a chat message" />
      <ChatMessage name="Mithun R" message="This is a chat message" />
      <ChatMessage name="Mithun R" message="This is a chat message" />
      <ChatMessage name="Mithun R" message="This is a chat message" />
      <ChatMessage name="Mithun R" message="This is a chat message" />
      <ChatMessage name="Mithun R" message="This is a chat message" />
    </div>
  );
};

export default LiveChat;
