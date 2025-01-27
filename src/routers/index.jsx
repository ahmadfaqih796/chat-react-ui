import React, { lazy, Suspense } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";
import { menuRouter } from "./menuRouter";

const LoginApp = lazy(() => import("../pages/auth/login"));
const MainLayout = lazy(() => import("../components/layout/MainLayout"));

const AppRoutes = () => {
  // const { session } = useAuth();
  const session = true;

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
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
