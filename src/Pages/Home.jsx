import React, { useState } from "react";
import SideBar from "../Components/SideBar";
import Chat from "../Components/Chat";

const Home = () => {
  const [showChat, setShowChat] = useState(false);

  const showChatHandler = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="flex lg:w-auto w-screen h-screen lg:h-[700px] gap-1">
      {window.innerWidth >= 768 ? (
        <>
          <SideBar />
          <Chat />
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
