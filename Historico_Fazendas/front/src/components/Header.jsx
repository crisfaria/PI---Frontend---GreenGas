import React from "react";
import TelaUsuario from "../Pages/TelaUsuario";
import { NavLink } from "react-router-dom";
import logo from "../image/man-546322_1280.jpg";
import "./Header.css"; 

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="../src/image/logo.png" alt="Logo" /> 
      </div>
      <nav className="header-nav">
        <NavLink to="/" className="nav-link">Perfil</NavLink>
        <NavLink to="/fazendas" className="nav-link">Fazendas</NavLink>
        <NavLink to="/historico" className="nav-link">Histórico</NavLink>
        <NavLink to="/sair" className="logout">Logout</NavLink>
      </nav>
    </header>
  );
}

export default Header;
