import React from "react";

const LandingPage = () => {
  return (
    <div className="w-[500px] h-[650px] max-sm:w-[340px] max-sm:h-[550px] bg-white shadow-2xl rounded-2xl">
      <div className="w-full flex justify-center h-1/2 bg-[url('./Images/pattern-4.svg')]">
        <div className="w-3/4 flex h-full relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#703eff"
            className="w-24 h-24 absolute right-20 max-sm:right-10 top-4 max-sm:w-20 max-sm:h-20"
          >
            <path
              fillRule="evenodd"
              d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#703eff"
            className="w-20 h-20 max-sm:w-16 max-sm:h-16 absolute left-24 max-sm:left-20 bottom-4"
          >
            <path
              fillRule="evenodd"
              d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#703eff"
            className="w-32 h-32 max-sm:w-28 max-sm:h-28 absolute top-20"
          >
            <path
              fillRule="evenodd"
              d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
              clipRule="evenodd"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#703eff"
            className="w-40 h-40 max-sm:w-32 max-sm:h-32 absolute bottom-4 right-0 max-sm:-right-6"
          >
            <path
              fillRule="evenodd"
              d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="w-full h-1/2 flex flex-col p-4 justify-around">
        <div className="w-full">
          <h1 className="text-xl max-sm:text-lg font-bold text-center">
            Enjoy the new experience
          </h1>
          <h1 className="text-xl max-sm:text-lg font-bold text-center">
            of chatting with your friends
          </h1>
        </div>

        <div className="w-full flex gap-4 flex-col items-center ">
          <p className="text-sm max-sm:text-xs text-gray-400">Already have an acccount ?</p>
          <button className="w-4/5 max-sm:text-sm transition-all text-white bg-[#703eff] hover:bg-[#552fbb] p-2 rounded-lg">
            Login
          </button>
        </div>
        <div className="w-full flex gap-4 flex-col items-center ">
          <p className="text-sm max-sm:text-xs text-gray-400">Dont have an acccount ?</p>
          <button className="w-4/5 max-sm:text-sm transition-all text-white bg-[#703eff] hover:bg-[#552fbb] p-2 rounded-lg">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
