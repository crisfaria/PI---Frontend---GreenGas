import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook de navegação
import Header from '../components/Header';
import Footer from '../components/Footer';
import "./EditP.css";

function EditP() {
  const [userData, setUserData] = useState({
    nome: '',
    telefone: '',
    senha: ''
  });
  
  const navigate = useNavigate(); // Inicializa o hook de navegação

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do usuário atualizados:', userData);
    alert('Dados atualizados com sucesso!');
    
    // Simula um carregamento de 2 segundos antes de redirecionar
    setTimeout(() => {
      navigate('/'); // Redireciona para a página de perfil
    }, 2000);
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
        <h2>Editar Perfil</h2>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={userData.nome}
          onChange={handleInputChange}
          placeholder="Digite seu nome"
          required
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <label htmlFor="telefone">Telefone:</label>
        <input
          type="tel"
          id="telefone"
          name="telefone"
          value={userData.telefone}
          onChange={handleInputChange}
          placeholder="Digite seu telefone"
          required
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          id="senha"
          name="senha"
          value={userData.senha}
          onChange={handleInputChange}
          placeholder="Digite sua senha"
          required
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Atualizar
        </button>
      </form>
      <Footer />
    </>
  );
}

export default EditP;
