import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";
import AnimatedRoutes from "./AnimatedRoutes";
import { ChatProvider } from "../context/ChatContext";
import RouterLoading from "../components/common/Loading/RouterLoading";

const AppRoutes = () => {
  // const { session } = useAuth();

  return (
    <Router>
      <ChatProvider>
        <Suspense fallback={<RouterLoading />}>
          <AnimatedRoutes />
        </Suspense>
      </ChatProvider>
    </Router>
  );
};

export default AppRoutes;
