import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu() {
    return (
     <nav>
       <ul className="menu-list">
        <li>
          <NavLink to="/">Hitórico de Fazendas</NavLink>
        </li>
        <li>
          <NavLink to="/relatorio">Relatório de cálculos</NavLink>
        </li>
        <li>
           <NavLink to="/">Sair</NavLink>
         </li>
       </ul>
     </nav>
    );
  }

export default Menu;