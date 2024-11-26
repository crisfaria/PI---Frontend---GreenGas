import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Importando o Link do React Router
import Header from "../components/Header"; // Importando o Header
import axios from "axios"; // Importando o axios para fazer requisições
import "./FazendasCadastradas.css"; // Importando o CSS

function FazendasCadastradas() {
  const [fazendas, setFazendas] = useState([]); // Estado para armazenar as fazendas

  // Função que carrega as fazendas do backend quando o componente for montado
  useEffect(() => {
    const fetchFazendas = async () => {
      try {
        // Fazendo a requisição GET para o JSON Server
        const response = await axios.get("http://localhost:5000/fazendas");
        setFazendas(response.data); // Atualizando o estado com os dados recebidos
      } catch (error) {
        console.error("Erro ao carregar as fazendas:", error);
      }
    };

    fetchFazendas(); // Chama a função ao montar o componente
  }, []); // O array vazio faz com que a requisição seja feita apenas uma vez, quando o componente é montado

  return (
    <><Header /> {/* Componente do header */}
    <main>
    <div className="fazendas-cadastradas-container">
      

      {/* Container para as fazendas listadas */}
      <div className="fazendas-list">
        {fazendas.map((fazenda) => (
          <Link to={`/perfil-fazenda/${fazenda.id}`} key={fazenda.id} className="fazenda-link">
            <div className="fazenda-box">
              <h3>{fazenda.nome}</h3>
              <p>{fazenda.localizacao}</p>
              <p><strong>Tamanho:</strong> {fazenda.tamanho} hectares</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </main>
    </>
  );
}

export default FazendasCadastradas;
