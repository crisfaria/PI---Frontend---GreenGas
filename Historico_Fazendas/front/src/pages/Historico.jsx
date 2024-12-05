import React from 'react';
import Header from "../components/Header";
import Relatorio from "../pages/Relatorio";
import Footer from "../components/Footer";

function Historico() {
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

export default Historico;
