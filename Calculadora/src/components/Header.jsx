import React from "react";
import TelaUsuario from "../Pages/TelaUsuario";
import { NavLink } from "react-router-dom";
import logo from "../image/logo.png"
import "./Header.css"; // Importando o CSS para o header

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="../src/image/logo.png" alt="Logo" /> {/* Logo da empresa ou sistema */}
      </div>
      <nav className="header-nav">
        <NavLink to="/Perfil" className="nav-link">Perfil</NavLink>
        <NavLink to="/fazendas" className="nav-link">Fazendas</NavLink>
        <NavLink to="/" className="nav-link">Calculadora</NavLink>
        <NavLink to="/relatorio" className="nav-link">Histórico</NavLink>
        <NavLink to="/sair" className="logout">Logout</NavLink>
      </nav>
    </header>
  );
}

export default Header;
