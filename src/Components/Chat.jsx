import React, { useContext } from "react";
import Input from "./Input";
import { ChatContext } from "./Context/ChatContext";
import Messages from "./Messages";

const Chat = ({ showChatHandler }) => {
  const { data } = useContext(ChatContext);
  return (
    <div className="relative max-sm:w-full sm:w-full md:w-3/4 lg:w-[calc(100%_-_20%)]  h-full rounded-r-2xl bg-[#f8f8f8] bg-[url('./Images/pattern-29.svg')]">
      {data?.chatID === "null" ? (
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-96 h-52 flex justify-center items-center bg-white">
            <h className="text-xl">Please select a chat !</h>
          </div>
        </div>
      ) : (
        <>
          <div className="w-full p-2 bg-white flex justify-between">
            <div className="flex gap-3 p-2 items-center ">
              <button
                onClick={() => showChatHandler()}
                className="max-sm:block md:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#808081"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                  />
                </svg>
              </button>

              <div className="relative">
                <img
                  className="w-12 h-12 rounded-full border-[1px]"
                  src={data.user?.photoURL}
                  alt=""
                />
                <span className="online-badge w-3 h-3 rounded-full right-0 bottom-0 bg-green-400 absolute"></span>
              </div>
              <p className="text-sm font-bold">{data.user?.displayName}</p>
            </div>
          </div>
          <Messages />
          <Input />
        </>
      )}
    </div>
  );
};

export default Chat;
