import React from "react";
import Cabecalho from "../components/Header";
import Calculator from "../components/Calculator";
import Footer from "../components/Footer";


function TelaUsuario() {
  return (
    <div>
      <Cabecalho />
      <main>
        <Historico />
      </main>
      <Footer/>
    </div>
  );
}

export default TelaUsuario;
