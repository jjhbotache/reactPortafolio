import { createContext, useState } from "react";

export const GlobalStateContext = createContext();

export default function LanguajeContextProvider({children}) {
  const [language, setLanguaje] = useState("es"); // "es" or "en"
  return (
    <GlobalStateContext.Provider value={ 
      {
        language,
        setLanguaje,
      }
    }>
      {children}
    </GlobalStateContext.Provider>
  );  
};
