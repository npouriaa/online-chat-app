import React, { useRef } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const NavBar = () => {
  const subMenuRef = useRef();
  const showSubmenu = () => {
    subMenuRef.current.classList.toggle("hidden");
  };
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
      <div className="relative">
        <button
          onClick={() => showSubmenu()}
          className="w-8 h-8 outline-none bg-white flex justify-center items-center rounded-full"
        >
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
        <ul
          ref={subMenuRef}
          className="absolute hidden w-32 h-32 bg-white p-1 rounded-2xl top-8 right-0 border-[1px]"
        >
          <li
            onClick={() => signOut(auth)}
            className="cursor-pointer hover:bg-gray-100 transition-all p-2 text-sm w-full h-1/3 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="red"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
            log out
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
