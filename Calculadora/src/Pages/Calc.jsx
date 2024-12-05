import React from "react";
import Header from "../components/Header";
import Calculator from "../components/Calculator";
import Footer from "../components/Footer";
import Relatorio from "../components/Relatorio";


function Calc() {
  return (
    <div>
      <Header />
      <main>
        <Calculator />
      </main>
      <Footer/>
    </div>
  );
}

export default Calc;
