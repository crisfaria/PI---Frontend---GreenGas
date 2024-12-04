import { createContext, useContext, useState } from "react";
import { useHistorico } from "../context/HistoricoContext";

const HistoricoContext = createContext();

export const useHistorico = () => useContext(HistoricoContext);

export const HistoricoProvider = ({ children }) => {
  const [historico, setHistorico] = useState([]);

  const adicionarAoHistorico = (novoItem) => {
    setHistorico((prevHistorico) => [...prevHistorico, novoItem]);
  };

  return (
    <HistoricoContext.Provider value={{ historico, adicionarAoHistorico }}>
      {children}
    </HistoricoContext.Provider>
  );
};