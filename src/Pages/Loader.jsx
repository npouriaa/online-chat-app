import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center absolute">
      <div className="w-full bg-black opacity-40 h-full relative"></div>
      <span className="loader absolute z-10"></span>
    </div>
  );
};

export default Loader;
