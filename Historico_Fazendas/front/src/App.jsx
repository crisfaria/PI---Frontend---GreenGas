import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NovaFazenda from "./pages/Nova";
import Listar from "./pages/Listar";
import Editar from "./pages/Editar";
import Error404 from "./pages/Error404";


function App() {
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Listar />} />
        <Route path="/novaFazenda" element={<NovaFazenda />} />
        <Route path="/editar/:id" element={<Editar />} />
        <Route path="*" element={<h1>Erro 404 - Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;