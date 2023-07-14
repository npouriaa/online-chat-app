import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "./Context/AuthContext";
import { ChatContext } from "./Context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const ref = useRef();
  const convertTimetampToTime = (timestamp) => {
    const date = new Date(
      timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000
    );
    const time = `${date.getHours()}:${date.getMinutes()}`;
    return time;
  };
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <div
      ref={ref}
      className={`w-full flex ${
        message.senderId === currentUser.uid ? "justify-end" : ""
      }`}
    >
      <div
        className={`p-2  max-sm:max-w-[300px] sm:w-[400px] max-w-[max-content] ${
          message.senderId === currentUser.uid
            ? "bg-[#703eff] text-white rounded-b-none rounded-l-3xl rounded-tr-3xl"
            : "bg-white rounded-b-none rounded-r-3xl rounded-tl-3xl"
        }`}
      >
        {message.img && <img className="rounded-xl" src={message.img} />}
        <p className="break-words p-2 max-sm:text-sm sm:text-sm md:text-base">
          {message.text}
        </p>
        <p className="w-full text-right pr-[1px] text-xs">
          {convertTimetampToTime(message.date)}
        </p>
      </div>
    </div>
  );
};

export default Message;
