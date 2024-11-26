import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaUsuario from "./pages/TelaUsuario";
import Erro404 from "./Pages/Erro404";
import Resultados from "./Pages/Resultados";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaUsuario />} />
        <Route path="/resultados" element={<Resultados />} />
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
