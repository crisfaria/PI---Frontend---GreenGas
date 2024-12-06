import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CadastrarFazendas.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function CadastrarFazendas() {
  const [nome, setNome] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [imagem, setImagem] = useState(null); // Simulando o upload
  const [sucesso, setSucesso] = useState(false);
  const navigate = useNavigate();

  const handleImagemChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagem("../src/image/istockphoto-863542630-612x612.jpg");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const novaFazenda = {
      nome,
      localizacao,
      tamanho: parseInt(tamanho),
      imagem: imagem || "../src/image/istockphoto-863542630-612x612.jpg",
    };

    try {
      await axios.post("http://localhost:5000/fazendas", novaFazenda);
      setSucesso(true);
      setTimeout(() => {
        setSucesso(false);
        navigate("/fazendas");
      }, 2000);
    } catch (error) {
      console.error("Erro ao cadastrar a fazenda:", error);
      alert("Erro ao cadastrar a fazenda");
    }
  };

  return (
    <>
    <Header />
    <main className="cadastro-fazenda-container">
      <h2>Criar Fazenda</h2>
      {sucesso && <p className="success-message">Fazenda cadastrada com sucesso!</p>}
      <form onSubmit={handleSubmit} className="cadastro-fazenda-form">
        <label>
          Nome da Fazenda
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </label>
        <label>
          Localização
          <input
            type="text"
            value={localizacao}
            onChange={(e) => setLocalizacao(e.target.value)}
            required
          />
        </label>
        <label>
          Tamanho em Hectares
          <input
            type="number"
            value={tamanho}
            onChange={(e) => setTamanho(e.target.value)}
            required
          />
        </label>
        <label>
          Imagem da Fazenda (Opcional)
          <input
            type="file"
            accept="image/*"
            onChange={handleImagemChange}
          />
        </label>
        {imagem && <p>Imagem selecionada: {imagem}</p>}
        <button type="submit">Criar Fazenda</button>
      </form>
    </main>
    <Footer />
    </>
  );
}

export default CadastrarFazendas;
