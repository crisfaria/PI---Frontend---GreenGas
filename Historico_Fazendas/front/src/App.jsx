import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaUsuario from "./pages/TelaUsuario";
import BuscarTodas from "./services/ContatoService";
import Atualizar from "./services/ContatoService";
import Remover from "./services/ContatoService";
import Erro404 from "./pages/Error404";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaUsuario />} />
        <Route path="/fazendas" element={<BuscarTodas />} />
        <Route path="/cadastro" element={<Atualizar />} />
        <Route path="/perfil-fazenda/:id" element={<Remover />} />
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
