import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center m-2 p-1">
      <img
        className="h-7"
        alt="user"
        src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
      />
      <span className="font-bold px-3">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
