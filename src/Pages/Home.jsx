import React, { useEffect, useState } from "react";
import SideBar from "../Components/SideBar";
import Chat from "../Components/Chat";

const Home = () => {
  const [showChat, setShowChat] = useState(false);

  const showChatHandler = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="flex w-screen h-screen gap-1">
      {window.innerWidth >= 768 ? (
        <>
          <SideBar showChatHandler={showChatHandler} />
          <Chat showChatHandler={showChatHandler} />
        </>
      ) : showChat ? (
        <Chat showChatHandler={showChatHandler} />
      ) : (
        <SideBar showChatHandler={showChatHandler} />
      )}
    </div>
  );
};

export default Home;
