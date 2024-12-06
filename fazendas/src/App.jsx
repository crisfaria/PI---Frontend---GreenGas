import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaUsuario from "./Pages/TelaUsuario";
import FazendasCadastradas from "./pages/FazendasCadastradas";
import CadastroFazendas from "./Pages/CadastrarFazendas";
import PerfilFazenda from "./pages/PerfilFazenda";
import Erro404 from "./Pages/Erro404";
import EditP from "./Pages/EditP";

function App() {
  return (
    <BrowserRouter>
      <div className="layoutPagina">
        <Routes>
          <Route path="/" element={<TelaUsuario />} />
          <Route path="/fazendas" element={<FazendasCadastradas />} />
          <Route path="/cadastro" element={<CadastroFazendas />} />
          <Route path="/perfil-fazenda/:id" element={<PerfilFazenda />} />
          <Route path="/editp" element={<EditP />} />
          <Route path="*" element={<Erro404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;