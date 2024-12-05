import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Historico from "./pages/Historico";
import Relatorio from "./pages/Relatorio"; 
import Erro404 from "./pages/Error404";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Historico />} />
        <Route path="/relatorio" element={<Relatorio />} />
        
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;