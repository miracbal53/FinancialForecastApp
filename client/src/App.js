// App.js

import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import Predictions from "./pages/Predictions";
import Stocks from "./pages/Stocks"; // Borsa sayfası
import AdminRoute from "./routes/AdminRoute";
import ProtectedRoute from "./routes/ProtectedRoute"; // ProtectedRoute bileşeni
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";

// ScrollToTop component
function ScrollToTop() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/hizmetler" element={<Services />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/borsalar" element={<Stocks />} />

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
    </BrowserRouter>
  );
};

export default App;
