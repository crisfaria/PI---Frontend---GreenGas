import { NavLink } from "react-router-dom";
import "./Menu.css"; // Importando o arquivo CSS para estilizar o Menu
import Avatar from "../image/Avatar.jpg"; // Caminho correto para a imagem
import { useAuth } from "../contexts/AuthContext";

function Menu() {
  const { usuario } = useAuth(); // Importando o usuário

  return (
    <nav className="menu-container">
      {/* Mensagem de boas-vindas fora da caixa */}
      <p className="menu-welcome-message">Bem-vindo(a), {usuario.nome}</p>

      {/* Ícone de usuário */}
      <div className="menu-user-icon">
        <img src={Avatar} alt="Ícone do Usuário" className="menu-avatar" />
      </div>

      {/* Caixa do menu */}
      <section className="menu-box">
        {/* Nome do usuário centralizado */}
        <h2 className="menu-user-name">{usuario.nome}</h2>

        {/* Lista de rotas */}
        <ul className="menu-list">
          <li>
            <NavLink to="/EditP">Editar Perfil</NavLink>
          </li>
          <li>
            <NavLink to="/cadastrofaz">Cadastrar Fazendas</NavLink>
          </li>
          <li>
            <NavLink to="/relatorio">Históricos de Cálculos</NavLink>
          </li>
          <li>
            <NavLink to="/">Sair</NavLink>
          </li>
        </ul>
      </section>
    </nav>
  );
}

export default Menu;
