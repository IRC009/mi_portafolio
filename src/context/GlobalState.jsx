import { createContext, useContext, useEffect, useState } from "react";
import Lenguaje from "../assets/apis/idiomas.json";

export const Context = createContext();

export const useGlobalState = () => {
  const context = useContext(Context);
  return context;
};

export const GlobalProvider = ({ children }) => {
  const [idioma, setIdioma] = useState("es");
  const [lenguaje, setLenguaje] = useState(Lenguaje);
  
  //configuraciones de idioma
  useEffect(()=>{
    try {
      const dato = localStorage.getItem("idioma");
      if (dato){
        setIdioma(dato)
      } 
    } catch (error) {
      console.log("error en el useEffect de obtencion del idioma: " + error)
    }
  },[])
  
  return (
    <Context.Provider value={{ values: { idioma, setIdioma, lenguaje } }}>
      {children}
    </Context.Provider>
  );
};
