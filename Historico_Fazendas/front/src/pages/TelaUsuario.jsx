import React from "react";
import Header from "../components/Header";
import Relatorio from "../components/Relatorio";
import Footer from "../components/Footer";

function TelaUsuario() {
  return (
    <div>
      <Header />
      <main>
        <Relatorio />
      </main>
      <Footer/>
    </div>
  );
}

export default TelaUsuario;
