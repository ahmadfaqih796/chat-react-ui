import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";
import AnimatedRoutes from "./AnimatedRoutes";
import { ChatProvider } from "../context/ChatContext";

const AppRoutes = () => {
  // const { session } = useAuth();

  return (
    <Router>
      <ChatProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <AnimatedRoutes />
        </Suspense>
      </ChatProvider>
    </Router>
  );
};

export default AppRoutes;
