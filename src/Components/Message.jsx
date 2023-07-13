import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "./Context/AuthContext";
import { ChatContext } from "./Context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const ref = useRef();
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
        className={`p-2 max-sm:max-w-[300px] sm:w-[400px] max-w-[max-content] ${
          message.senderId === currentUser.uid
            ? "bg-[#703eff] text-white rounded-b-none rounded-l-3xl rounded-tr-3xl"
            : "bg-white rounded-b-none rounded-r-3xl rounded-tl-3xl"
        }`}
      >
        <p className="break-words p-2 max-sm:text-sm sm:text-sm md:text-base">
          {message.text}
        </p>
        {message.img && <img src={message.img} />}
      </div>
    </div>
  );
};

export default Message;
