import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import LoginApp from "../app/auth/login";
import MainLayout from "../components/layout/MainLayout";
import DashboardApp from "../app/dashboard";
import ContactApp from "../app/contact";
import { useAuth } from "../hooks/useAuth";

const AppRoutes = () => {
  const { session } = useAuth();
  return (
    <Router>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Navigate to="/authentication/login" />} />
          <Route
            path="/authentication/login"
            element={!session ? <LoginApp /> : <Navigate to="/dashboard" />}
          />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              session ? <MainLayout /> : <Navigate to="/authentication/login" />
            }
          >
            <Route index element={<DashboardApp />} />
            <Route path="contact" element={<ContactApp />} />
          </Route>
        </Routes>
      </React.Suspense>
    </Router>
  );
};

export default AppRoutes;
