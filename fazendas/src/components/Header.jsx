import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../image/logo.png";  // Imagem da logo
import "./Header.css"; // Importando o CSS para o header

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo" /> {/* Logo da empresa ou sistema */}
      </div>
      <nav className="header-nav">
        <NavLink to="/" className="nav-link">Perfil</NavLink>
        <NavLink to="/fazendas" className="nav-link">Fazendas</NavLink>
        <NavLink to="calculadora" className="nav-link">Calculadora</NavLink>
        <NavLink to="/historico" className="nav-link">Histórico</NavLink>
      </nav>
    </header>
  );
}

export default Header;
