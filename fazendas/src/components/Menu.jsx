import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css"; // Importando o arquivo CSS para estilizar o Menu

function Menu() {
  return (
    <div className="menu-container">
      {/* Mensagem de boas-vindas fora da caixa */}
      <div className="menu-welcome-message">
        Bem-vindo(a), Usuário
      </div>

      {/* Caixa do menu */}
      <div className="menu-box">
        {/* Nome do usuário centralizado */}
        <div className="menu-user-name">Fulano Sobrenome</div>
        
        {/* Lista de rotas */}
        <ul className="menu-list">
          <li>
            <NavLink to="/fazendas">Fazendas Cadastradas</NavLink>
          </li>
          <li>
            <NavLink to="/cadastro">Cadastrar Fazendas</NavLink>
          </li>
          <li>
            <NavLink to="/historico">Históricos de Cálculos</NavLink>
          </li>
          <li>
            <NavLink to="/">Sair</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
