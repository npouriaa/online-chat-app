import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Chats from "./Chats";

const SideBar = ({ showChatHandler }) => {
  return (
    <div className="md:w-[260px] xl:w-[300px] 2xl:w-[400px] max-sm:w-full sm:w-full h-full bg-[#f8f8f8] p-4 overflow-y-auto">
      <NavBar />
      <SearchBar />
      <Chats showChatHandler={showChatHandler}/>
    </div>
  );
};

export default SideBar;
