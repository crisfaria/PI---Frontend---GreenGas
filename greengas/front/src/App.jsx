import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="layoutPagina">
          <Cabecalho />
          <Routes>
            <Route path="/login" element={<Login />} />
            {/* <Route path="/cadastro" element={<Cadastro />} /> */}
          </Routes>
          <Rodape />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
