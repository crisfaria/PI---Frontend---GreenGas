import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importando useNavigate
import Header from "../components/Header";
import axios from "axios";
import "./CadastrarFazendas.css"; // Importando o CSS para a página

function CadastrarFazendas() {
  const [nome, setNome] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [imagem, setImagem] = useState(null); // Estado para armazenar o arquivo da imagem (simulado)
  const [sucesso, setSucesso] = useState(false); // Estado para controlar a exibição da mensagem de sucesso
  const navigate = useNavigate(); // Hook para redirecionar para outra página

  // Função fake para substituir o upload real da imagem
  const handleImagemChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // A imagem não será realmente carregada, vamos simular com uma URL fictícia
      setImagem("../src/image/istockphoto-863542630-612x612.jpg"); // Simulação de imagem
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // A imagem fake será substituída por uma URL simulada
    const novaFazenda = {
      nome,
      localizacao,
      tamanho: parseInt(tamanho),
      imagem: imagem || ".../src/image/istockphoto-863542630-612x612.jpg", // URL fictícia como imagem
    };

    try {
      // Enviar a nova fazenda para o backend (sem upload real de imagem)
      await axios.post("http://localhost:5000/fazendas", novaFazenda);

      setSucesso(true); // Marca o sucesso do envio
      setTimeout(() => {
        setSucesso(false); // Oculta a mensagem de sucesso após 3 segundos
        navigate("/fazendas"); // Redireciona para a página de fazendas cadastradas
      }, 2000);
    } catch (error) {
      console.error("Erro ao cadastrar a fazenda:", error);
      alert("Erro ao cadastrar a fazenda");
    }
  };

  return (
    <div className="cadastro-fazenda-container">
      <Header />
      <h2>Criar Fazenda</h2>

      {/* Exibe a mensagem de sucesso após a criação */}
      {sucesso && (
        <div className="success-message">
          Fazenda cadastrada com sucesso!
        </div>
      )}

      <div className="cadastro-fazenda-form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nome da Fazenda</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Localização</label>
            <input
              type="text"
              value={localizacao}
              onChange={(e) => setLocalizacao(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Tamanho em Hectares</label>
            <input
              type="number"
              value={tamanho}
              onChange={(e) => setTamanho(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Imagem da Fazenda (Simulada)</label>
            <input
              type="file" // Altera o tipo para "file" para permitir o upload de arquivos
              accept="image/*" // Restringe a seleção a arquivos de imagem
              onChange={handleImagemChange}
            />
            {imagem && <p>Imagem selecionada: {imagem}</p>}
          </div>
          <button type="submit">Criar Fazenda</button>
        </form>
      </div>
    </div>
  );
}

export default CadastrarFazendas;
