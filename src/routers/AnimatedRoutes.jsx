import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { menuRouter } from "./menuRouter";
import { AnimatePresence } from "motion/react";

const LoginApp = React.lazy(() => import("../pages/auth/login"));
const MainLayout = React.lazy(() => import("../components/layout/MainLayout"));

const AnimatedRoutes = () => {
  const location = useLocation();
  const session = true;
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public Routes */}
        <Route path="/" element={<Navigate to="/authentication/login" />} />
        <Route
          path="/authentication/login"
          element={!session ? <LoginApp /> : <Navigate to="/chat" />}
        />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            session ? <MainLayout /> : <Navigate to="/authentication/login" />
          }
        >
          {/* <Route path="/chat" element={<div>ChatApp</div>} />
    <Route path="/contact" element={<div>ContactApp</div>} /> */}
          {menuRouter.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
