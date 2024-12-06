import { NavLink } from "react-router-dom";
import logo from "../image/logo.png"; // Imagem da logo
import "./Header.css"; // Importando o CSS para o header
import { useAuth } from "../contexts/AuthContext";

function Header() {
  const { logout } = useAuth();
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo" /> {/* Logo da empresa ou sistema */}
      </div>
      <nav className="header-nav">
        <NavLink to="/Perfil" className="nav-link">
          Perfil
        </NavLink>
        <NavLink to="/fazendas" className="nav-link">
          Fazendas
        </NavLink>
        <NavLink to="/calc" className="nav-link">
          Calculadora
        </NavLink>
        <NavLink to="/relatorio" className="nav-link">
          Histórico
        </NavLink>
        <NavLink onClick={logout} className="nav-link">
          Logout
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
