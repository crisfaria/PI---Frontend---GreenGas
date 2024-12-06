import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calc from "./Pages/Calc";
import { Calculator } from "lucide-react";
import Erro404 from "./Pages/Erro404";
import { HistoricoProvider } from "./components/HistoricoContext";
import Historico from "./Pages/Historico";

function App() {
  return (
    <HistoricoProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calc />} />
        <Route path="/relatorio" element={<Historico/>} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
    </HistoricoProvider>
  );
}

export default App;