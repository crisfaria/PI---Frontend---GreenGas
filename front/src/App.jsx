import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cabecalho from "./components/Cabecalho";
import "./App.css";
import Cadastro from "./pages/Cadastro";
import Calc from "./pages/Calc";
import Historico from "./pages/Historico";
import Calculator from "./components/Calculator";
import Erro404 from "./pages/Erro404";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { HistoricoProvider } from "./components/HistoricoContext";
import Footer from "./components/Footer";
import TelaUsuario from "./pages/TelaUsuario";
import CadastrarFazendas from "./pages/CadastrarFazendas";
import FazendasCadastradas from "./pages/FazendasCadastradas";
import PerfilFazenda from "./pages/PerfilFazenda";
import EditP from "./pages/EditP";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <HistoricoProvider>
            <div className="layoutPagina">
              <HeaderGlobal />
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/perfil" element={<TelaUsuario />} />
                <Route path="/fazendas" element={<FazendasCadastradas />} />
                <Route path="/perfil-fazenda/:id" element={<PerfilFazenda />} />
                <Route path="/editp" element={<EditP />} />
                <Route path="/cadastrofaz" element={<CadastrarFazendas />} />
                <Route path="/calc" element={<Calc />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/relatorio" element={<Historico />} />
                <Route path="*" element={<Erro404 />} />
              </Routes>
              <Footer />
            </div>
          </HistoricoProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

function HeaderGlobal() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Header /> : <Cabecalho />;
}

export default App;
