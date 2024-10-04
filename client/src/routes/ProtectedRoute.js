// src/routes/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // Token kontrolü

  // Eğer token yoksa, kullanıcı giriş yapmamış demektir ve ana sayfaya yönlendir
  if (!token) {
    return <Navigate to="/login" />;
  }

  // Giriş yapmış kullanıcılar için children'i render et
  return children;
};

export default ProtectedRoute;
