import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaUsuario from "./Pages/TelaUsuario";
import FazendasCadastradas from "./pages/FazendasCadastradas";
import CadastroFazendas from "./Pages/CadastrarFazendas";
import PerfilFazenda from "./pages/PerfilFazenda";
import Erro404 from "./Pages/Erro404";
import EditP from "./Pages/EditP";
//import Relatorio from "./Pages/Relatorio";
import Calc from "./Pages/Calc";
import { HistoricoProvider } from "./components/HistoricoContext";
import Historico from "./Pages/Historico";
import Cadastro from "./Pages/Cadastro";
import Login from "./Pages/Login";


function App() {
  return (
    <HistoricoProvider>
    <BrowserRouter>
      <div className="layoutPagina">
        <Routes>
          <Route path="/" element={<TelaUsuario />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/fazendas" element={<FazendasCadastradas />} />
          <Route path="/cadastrof" element={<CadastroFazendas />} />
          <Route path="/perfil-fazenda/:id" element={<PerfilFazenda />} />
          <Route path="/relatorio" element={<Historico />} />
          <Route path="/calculator" element={<Calc />} />
          <Route path="/editp" element={<EditP />} />
          <Route path="*" element={<Erro404 />} />
        </Routes>
      </div>
    </BrowserRouter>
    </HistoricoProvider>
  );
}

export default App;