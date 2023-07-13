import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

const SideBar = ({ showChatHandler }) => {
  return (
    <div className="md:w-[260px] xl:w-[300px] max-sm:w-full sm:w-full h-full bg-[#f8f8f8] rounded-l-2xl p-4 overflow-y-auto">
      <NavBar />
      <SearchBar />
      <p className="font-bold mt-2 text-sm p-2">chats</p>
      <ul className="w-full py-2 gap-3 flex flex-col">
        <li
          onClick={() => showChatHandler()}
          className="cursor-pointer w-full  bg-white h-14 gap-2 flex items-center px-2 rounded-2xl"
        >
          <img
            className="rounded-full h-10 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1GOS8Mxd73Bu4zfCIWmou11x4QkGp2cFf7w&usqp=CAU"
            alt=""
          />
          <div className="h-full py-2 w-3/4 justify-around flex flex-col ">
            <p className="text-start text-xs font-bold truncate">Tyler</p>
            <p className="text-start text-xs text-gray-500 truncate">
              Hi i want to go to gym at 6 o'clock when can you come ?
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
