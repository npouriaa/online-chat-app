import React from "react";
import Register from "./Register";
import Login from "./Login";

const Auth = ({props}) => {
  return (
    <div className="w-[500px] h-[450px] max-sm:w-[340px] max-sm:h-[550px] bg-white shadow-xl rounded-2xl flex flex-col gap-4 justify-center p-4">
      
        {/* <Register/> */}
        <Login/>
    </div>
  );
};

export default Auth;
