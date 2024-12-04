import React from "react";
import "./App.css";
import { HistoricoProvider } from "./context/HistoricoContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaUsuario from "./pages/TelaUsuario";
import Relatorio from "./components/Relatorio"; // Componente que usa BuscarTodas
import Erro404 from "./pages/Error404";

function App() {
  return (
    <HistoricoProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaUsuario />} />
        <Route path="/calculadora" element={<Calculator />} />
        <Route path="/relatorio" element={<Relatorio />} />
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
    </HistoricoProvider>
  );
}

export default App;