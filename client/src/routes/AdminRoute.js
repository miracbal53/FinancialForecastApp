// client/src/routes/AdminRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      if (decodedToken.role === 'admin') {
        return children;
      }
    } catch (error) {
      console.error("Token çözülürken hata:", error);
      return <Navigate to="/" />;
    }
  }
  return <Navigate to="/" />;
};

export default AdminRoute;
