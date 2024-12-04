import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import "./FazendasCadastradas.css";

function FazendasCadastradas() {
  const [fazendas, setFazendas] = useState([]);

  useEffect(() => {
    const fetchFazendas = async () => {
      try {
        const response = await axios.get("http://localhost:5000/fazendas");
        setFazendas(response.data);
      } catch (error) {
        console.error("Erro ao carregar as fazendas:", error);
      }
    };

    fetchFazendas();
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="fazendas-cadastradas">
          {fazendas.map((fazenda) => (
            <Link 
              to={`/perfil-fazenda/${fazenda.id}`} 
              key={fazenda.id} 
              className="fazenda-link"
            >
              <article className="fazenda-box">
                <h3>{fazenda.nome}</h3>
                <p>{fazenda.localizacao}</p>
                <p>
                  <strong>Tamanho:</strong> {fazenda.tamanho} hectares
                </p>
              </article>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default FazendasCadastradas;
