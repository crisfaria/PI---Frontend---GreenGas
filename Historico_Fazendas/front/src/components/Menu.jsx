function Menu() {
    return (
     <nav>
       <ul>
        <li>
          <NavLink to="/">Listar fazendas</NavLink>
        </li>
        <li>
          <NavLink to="/novaFazenda">Nova fazenda</NavLink>
        </li>
        <li>
           <NavLink to="/">Sair</NavLink>
         </li>
       </ul>
     </nav>
    );
  }

export default Menu ();