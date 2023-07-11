import React from "react";

const Message = ({condition}) => {
  return condition ? (
    <div className="w-full flex">
      <div className="p-4 max-sm:max-w-[300px] sm:w-[400px]  max-w-[max-content]  bg-white rounded-b-none rounded-r-3xl rounded-tl-3xl">
        <p className="break-words p-2 ">
         hi
        </p>
      </div>
    </div>
  ) : (
    <div className="w-full flex justify-end">
      <div className="p-4 max-sm:max-w-[300px] sm:w-[400px] bg-[#703eff] text-white rounded-b-none rounded-l-3xl rounded-tr-3xl flex flex-col ">
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1GOS8Mxd73Bu4zfCIWmou11x4QkGp2cFf7w&usqp=CAU" alt="" /> */}
        <p className="break-words p-2  max-w-[max-content] ">
          aslkdskdlksldklkdlkdlskdlsk aslkdskdlksldklkdlkdlskdlskds;lgfgf
          gfglflgf fgf;lg;glf
          gfklgfsllllllllllllllllldsll;sld;lsl;l;dsld;dl;sd;l;dsl;ld
        </p>
      </div>
    </div>
  );
};

export default Message;
