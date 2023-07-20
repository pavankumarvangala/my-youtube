import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { RandomNameGenerate, makeRandomMessage } from "../utils/helper";

// const chatMessages = [
//   {
//     name: "pawan",
//     message: "Lorem epsum dummy text message",
//   },
// ];

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const newMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // Code for API polling
      console.log("API Polling");
      dispatch(
        addMessages({
          name: RandomNameGenerate(),
          message: makeRandomMessage(20),
        })
      );
    }, 2000);
    return () => {
      clearInterval(i);
    };
  }, []);
  const handleNewMessage = (e) => {
    e?.preventDefault();
    liveMessage &&
      dispatch(
        addMessages({
          name: "Pawan",
          message: liveMessage,
        })
      );
    setLiveMessage("");
  };
  return (
    <div>
      <div className="w-full border border-black h-[580px] overflow-auto flex flex-col-reverse">
        {newMessages.map((item, i) => {
          return (
            <ChatMessage key={i} name={item.name} message={item.message} />
          );
        })}
      </div>
      <form
        className="w-full h-9 border border-black flex justify-between px-2"
        onSubmit={(e) => {
          handleNewMessage(e);
        }}
      >
        <input
          type="text"
          className="w-80 h-8 border border-none"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button
          className="ml-2 bg-green-100 px-2 py-1 rounded-lg"
          onClick={() => handleNewMessage()}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
