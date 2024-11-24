import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaUsuario from "./pages/TelaUsuario";
import FazendasCadastradas from "./pages/FazendasCadastradas";
import CadastroFazendas from "./Pages/CadastrarFazendas";
import PerfilFazenda from "./pages/PerfilFazenda";
import Erro404 from "./Pages/Erro404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaUsuario />} />
        <Route path="/fazendas" element={<FazendasCadastradas />} />
        <Route path="/cadastro" element={<CadastroFazendas />} />
        <Route path="/perfil-fazenda/:id" element={<PerfilFazenda />} />
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
