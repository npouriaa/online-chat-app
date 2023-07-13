import React, { useContext } from "react";
import Input from "./Input";
import { ChatContext } from "./Context/ChatContext";
import Messages from "./Messages";

const Chat = ({ showChatHandler }) => {
  const { data } = useContext(ChatContext);
  console.log(data);
  return (
    <div className="relative max-sm:w-full sm:w-full md:w-3/4 lg:w-[900px]  h-full rounded-r-2xl bg-[#f8f8f8] bg-[url('./Images/pattern-29.svg')]">
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
                  className="w-12 h-12 rounded-full"
                  src={data.user?.photoURL}
                  alt=""
                />
                <span className="online-badge w-3 h-3 rounded-full right-0 bottom-0 bg-green-400 absolute"></span>
              </div>
              <p className="text-sm font-bold">{data.user?.displayName}</p>
            </div>
            <div className="flex items-center gap-4 p-2">
              <button>
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
                    d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </button>
              <button>
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
                    d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#808081"
                  className="w-6 h-6"
                >
                  <path
                    strokeWinecap="round"
                    strokeWinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  />
                </svg>
              </button>
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
