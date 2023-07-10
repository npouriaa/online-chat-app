import React from "react";

const Register = () => {
  return (
    <>
      <div className="w-full gap-2 flex flex-col p-3 items-center justify-center">
        <h1 className="text-2xl uppercase">Online Chat App</h1>
        <h5 className="text-lg text-gray-400 uppercase flex justify-center">
          Sign Up
        </h5>
      </div>
      <form action="" className="w-full gap-8 flex items-center flex-col">
        <div className="w-full p-2 gap-9 flex items-center flex-col">
          <input
            type="text"
            placeholder="Name"
            className="w-4/5 p-2 border-b outline-none text-sm"
          />
          <input
            type="text"
            placeholder="Username"
            className="w-4/5 p-2 border-b outline-none text-sm"
          />
          <input
            type="text"
            placeholder="Password"
            className="w-4/5 p-2 border-b outline-none text-sm"
          />
        </div>
        <button
          className="w-4/5 text-white bg-[#703eff] p-2 rounded-lg"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </>
  );
};

export default Register;
