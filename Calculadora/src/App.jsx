// import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaUsuario from "./pages/TelaUsuario";
import { Calculator } from "lucide-react";
import Erro404 from "./Pages/Erro404";
import { HistoricoProvider } from "./components/HistoricoCotext";
import Relatorio from "./components/Relatorio";

function App() {
  return (
    <HistoricoProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaUsuario />} />
        <Route path="/relatorio" element={<Relatorio/>} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
    </HistoricoProvider>
  );
}

export default App;