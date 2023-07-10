import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../../Pages/LandingPage";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
import Home from "../../Pages/Home";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default Routers;
