import React from "react";
import "./App.css";
import Routers from "./Components/Routers/Routers";
import AuthContextProvider from "./Components/Context/AuthContext";
import ChatContextProvider from "./Components/Context/ChatContext";

const App = () => {
  return (
    <AuthContextProvider>
      <ChatContextProvider>
        <div className="my-container flex justify-center items-center w-screen relative">
          <Routers />
        </div>
      </ChatContextProvider>
    </AuthContextProvider>
  );
};

export default App;
