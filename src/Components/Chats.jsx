import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { AuthContext } from "./Context/AuthContext";
import { ChatContext } from "./Context/ChatContext";

const Chats = ({ showChatHandler }) => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser?.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (user) => {
    dispatch({ type: "CHANGE_USER", payload: user });
  };

  return (
    <div>
      <p className="font-bold mt-2 text-sm p-2">chats</p>
      <ul className="w-full py-2 gap-3 flex flex-col">
        {chats && Object.entries(chats)?.sort((a , b) => b[1].date - a[1].date).map((chat) => (
          <li
            key={chat[0]}
            onClick={() => {
              showChatHandler();
              handleSelect(chat[1].userInfo);
            }}
            className="cursor-pointer w-full  bg-white h-14 gap-2 flex items-center px-2 rounded-2xl"
          >
            <img
              className="rounded-full h-10 "
              src={chat[1].userInfo.photoURL}
              alt=""
            />
            <div className="h-full py-2 w-3/4 justify-around flex flex-col ">
              <p className="text-start text-xs font-bold truncate">
                {chat[1].userInfo.displayName}
              </p>
              <p className="text-start text-xs text-gray-500 truncate">
                {chat[1].lastMessage?.text}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Chats;
