import React from "react";

const NavBar = () => {
  return (
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
      <button className="w-8 h-8 relative bg-white flex justify-center items-center rounded-full">
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
  );
};

export default NavBar;
