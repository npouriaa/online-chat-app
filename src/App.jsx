import React from "react";
import "./App.css";
import Routers from "./Components/Routers/Routers";
import AuthContextProvider from "./Components/Context/AuthContext";

const App = () => {
  return (
    <AuthContextProvider>
      <div className="my-container flex justify-center items-center w-screen relative">
        <Routers />
      </div>
    </AuthContextProvider>
  );
};

export default App;
