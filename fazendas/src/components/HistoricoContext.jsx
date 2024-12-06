import { createContext, useContext, useState } from "react";

// Criação do contexto
const HistoricoContext = createContext();

// Provedor do contexto
export function HistoricoProvider({ children }) {
  const [historico, setHistorico] = useState([]);

  const adicionarAoHistorico = (entry) => {
    setHistorico((prev) => [...prev, entry]);
  };

  return (
    <HistoricoContext.Provider value={{ historico, adicionarAoHistorico }}>
      {children}
    </HistoricoContext.Provider>
  );
}

// Hook personalizado para consumir o contexto
export function useHistorico() {
  return useContext(HistoricoContext);
}
