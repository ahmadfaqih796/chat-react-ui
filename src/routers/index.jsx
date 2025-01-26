import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import LoginApp from "../app/auth/login";
import DashboardApp from "../app/dashboard";

const AppRoutes = () => {
  const user = false;
  return (
    <Router>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LoginApp />} />
          <Route path="/dashboard" element={<DashboardApp />} />
          <Route
            path="/authentication/login"
            element={!user ? <LoginApp /> : <Navigate to="/dashboard" />}
          />
        </Routes>
      </React.Suspense>
    </Router>
  );
};

export default AppRoutes;
