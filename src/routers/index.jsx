import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouterLoading from "../components/common/Loading/RouterLoading";
import { ChatProvider } from "../context/ChatContext";
import AnimatedRoutes from "./AnimatedRoutes";

const AppRoutes = () => {
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
