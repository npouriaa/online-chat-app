import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../../Pages/LandingPage";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
import Home from "../../Pages/Home";
import { AuthContext } from "../Context/AuthContext";
import Cart from "../../Pages/Cart";

const Routers = () => {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Routes>
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Routers;
