import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Relatorio from "../components/Relatorio";


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
