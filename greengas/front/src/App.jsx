import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import "./App.css";
import Cadastro from "./pages/Cadastro";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <div className="layoutPagina">
            <Cabecalho />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
            <Rodape />
          </div>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
