import { createContext, useReducer } from "react";
import { alertReducer, initialState } from "../reducers/alertReducer";

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, initialState);
  console.log("statatatat", state);
  return (
    <AlertContext.Provider value={{ state, dispatch }}>
      {alert("hallo bang")}
      {children}
    </AlertContext.Provider>
  );
};
