import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./PerfilFazenda.css";

function PerfilFazenda() {
  const [fazenda, setFazenda] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchFazenda = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/fazendas/${id}`);
        setFazenda(response.data);
      } catch (error) {
        console.error("Erro ao carregar os dados da fazenda:", error);
      }
    };

    fetchFazenda();
  }, [id]);

  if (!fazenda) {
    return <p>Carregando dados da fazenda...</p>;
  }

  return (
    <>
      <Header />
      <main className="perfil-fazenda">
        <div className="perfil-fazenda-imagem-container">
          <img 
            src={fazenda.imagem || "../src/image/istockphoto-863542630-612x612.jpg"} 
            alt={fazenda.nome} 
            className="perfil-fazenda-imagem"
          />
        </div>
        <section className="perfil-fazenda-detalhes">
          <h2>{fazenda.nome}</h2>
          <p><strong>Localização:</strong> {fazenda.localizacao}</p>
          <p><strong>Tamanho:</strong> {fazenda.tamanho} hectares</p>
          <button>Consultar Último Cálculo</button>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default PerfilFazenda;
