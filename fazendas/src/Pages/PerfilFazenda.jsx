import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; // Importando o axios
import Header from "../components/Header"; // Importando o Header
import "./PerfilFazenda.css"; // Importando o CSS para a página

function PerfilFazenda() {
  const [fazenda, setFazenda] = useState(null); // Estado para armazenar a fazenda
  const { id } = useParams(); // Pegando o id da fazenda da URL

  // Função para carregar os dados da fazenda
  useEffect(() => {
    const fetchFazenda = async () => {
      try {
        // Fazendo a requisição GET para buscar os dados da fazenda pelo id
        const response = await axios.get(`http://localhost:5000/fazendas/${id}`);
        setFazenda(response.data); // Atualiza o estado com os dados da fazenda
      } catch (error) {
        console.error("Erro ao carregar os dados da fazenda:", error);
      }
    };

    fetchFazenda(); // Chama a função ao montar o componente
  }, [id]); // Quando o id da fazenda mudar, a requisição será refeita

  if (!fazenda) {
    return <div>Carregando dados da fazenda...</div>; // Exibe "Carregando..." enquanto os dados não são carregados
  }

  return (
    <div className="perfil-fazenda-container">
      <Header />
      <div className="perfil-fazenda-box">
        <div className="perfil-fazenda-image">
          <img src={fazenda.imagem || "../src/image/istockphoto-863542630-612x612.jpg"} alt={fazenda.nome} />
        </div>
        <h2>{fazenda.nome}</h2>
        <p><strong>Localização:</strong> {fazenda.localizacao}</p>
        <p><strong>Tamanho:</strong> {fazenda.tamanho} hectares</p>
        <div className="perfil-fazenda-button">
          <button>Consultar Último Cálculo</button>
        </div>
      </div>
    </div>
  );
}

export default PerfilFazenda;
