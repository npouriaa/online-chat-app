import React from "react";
import SideBar from "../Components/SideBar";
import Chat from "../Components/Chat";

const Home = () => {
  return (
    <div className="flex h-[700px] gap-1">
      <SideBar />
      <Chat />
    </div>
  );
};

export default Home;
