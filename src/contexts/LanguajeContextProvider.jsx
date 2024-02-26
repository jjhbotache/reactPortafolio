import { createContext, useState } from "react";

export const GlobalStateContext = createContext();

export default function LanguajeContextProvider({children}) {
  const [languaje, setLanguaje] = useState("es"); // "es" or "en"
  return (
    <GlobalStateContext.Provider value={ 
      {
        languaje,
        setLanguaje,
      }
    }>
      {children}
    </GlobalStateContext.Provider>
  );  
};
