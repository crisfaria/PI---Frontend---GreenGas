import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaUsuario from "./pages/TelaUsuario";
import Relatorio from "./components/Relatorio"; // Componente que usa BuscarTodas
import Erro404 from "./pages/Error404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaUsuario />} />
        <Route path="/historico" element={<Relatorio />} />
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
