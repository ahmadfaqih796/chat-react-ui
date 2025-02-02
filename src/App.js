import React from "react";
import "./App.css";
import "./theme/loading.css";
import AppRoutes from "./routers";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { checkAuth } = useAuth();
  React.useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
