import React, { lazy, Suspense } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const LoginApp = lazy(() => import("../app/auth/login"));
const MainLayout = lazy(() => import("../components/layout/MainLayout"));
const DashboardApp = lazy(() => import("../app/dashboard"));
const ContactApp = lazy(() => import("../app/contact"));

const AppRoutes = () => {
  const { session } = useAuth();

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Navigate to="/authentication/login" />} />
          <Route
            path="/authentication/login"
            element={!session ? <LoginApp /> : <Navigate to="/chat" />}
          />

          {/* Protected Routes */}
          <Route
            path="/chat"
            element={
              session ? <MainLayout /> : <Navigate to="/authentication/login" />
            }
          >
            <Route index element={<DashboardApp />} />
            <Route path="contact" element={<ContactApp />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
