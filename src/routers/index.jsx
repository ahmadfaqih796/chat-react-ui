import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";
import AnimatedRoutes from "./AnimatedRoutes";

const AppRoutes = () => {
  // const { session } = useAuth();

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <AnimatedRoutes />
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
