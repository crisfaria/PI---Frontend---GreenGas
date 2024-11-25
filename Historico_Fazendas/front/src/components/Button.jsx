import { remover } from "../services/ContatoService";

function Botao (props) {
    return (
      <button onClick={onClick} >{props.children}
        {Atualizar}
      </button>
    );
  };
  
  export default Botao;
  