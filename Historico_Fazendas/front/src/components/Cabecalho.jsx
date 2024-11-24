function Cabecalho(props) {
    return (
     <header>{props.children}
       <h1>Fazendas</h1>
       <Menu />
     </header>
    );
  }

export default Cabecalho();