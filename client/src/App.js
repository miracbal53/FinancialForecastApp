// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import Predictions from './pages/Predictions';
import Stocks from './pages/Stocks'; // Borsa sayfası
import AdminRoute from './routes/AdminRoute';
import ProtectedRoute from './routes/ProtectedRoute'; // ProtectedRoute bileşeni

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Admin Route */}
        <Route 
          path="/admin" 
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          } 
        />

        {/* Protected Route for Stocks */}
        <Route 
          path="/borsalar" 
          element={
            <ProtectedRoute>
              <Stocks />
            </ProtectedRoute>
          } 
        />

        <Route path="/predictions" element={<Predictions />} />
      </Routes>
    </Router>
  );
};

export default App;
