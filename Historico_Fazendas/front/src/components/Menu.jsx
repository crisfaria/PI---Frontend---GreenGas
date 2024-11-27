function Menu(props) {
    return (
     <nav>{props.children}
       <ul>
        <li>
          <NavLink to="/">Listar fazendas</NavLink>
        </li>
        <li>
          <NavLink to="/fazendas">Fazendas</NavLink>
        </li>
        <li>
           <NavLink to="/">Sair</NavLink>
         </li>
       </ul>
     </nav>
    );
  }

export default Menu ();