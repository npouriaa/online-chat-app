import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../../Pages/LandingPage";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Routers;
