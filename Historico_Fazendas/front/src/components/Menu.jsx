function Menu(props) {
    return (
     <nav>{props.children}
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