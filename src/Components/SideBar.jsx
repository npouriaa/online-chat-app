import React from "react";

const SideBar = () => {
  return (
    <div className="w-[350px] h-[700px] bg-[#f8f8f8] rounded-xl p-4 overflow-y-auto">
      <nav className="w-full p-2 flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <div className="profile-con w-12 h-12 rounded-full relative">
            <span className="online-badge w-3 h-3 rounded-full right-0 bottom-0 bg-green-400 absolute"></span>
            <img
              className="object-contain w-full h-full rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1GOS8Mxd73Bu4zfCIWmou11x4QkGp2cFf7w&usqp=CAU"
              alt="profile-image"
            />
          </div>
          <p className="text-sm font-bold uppercase">Pouria</p>
        </div>
        <button className="w-8 h-8 bg-white flex justify-center items-center rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#a2a0a0"
            className="w-6"
          >
            <path
              fillRule="evenodd"
              d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </nav>
      <div className="w-full mt-2 h-14 bg-white rounded-2xl flex items-center p-4 gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#a2a0a0"
          class="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
            clipRule="evenodd"
          />
        </svg>
        <input
          placeholder="Search in messages ..."
          type="text"
          className="text-sm outline-none w-full"
        />
      </div>
      <ul className="w-full py-4 gap-3 flex flex-col">
        <li className="cursor-pointer w-full bg-white h-14 gap-2 flex items-center px-2 rounded-2xl">
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
