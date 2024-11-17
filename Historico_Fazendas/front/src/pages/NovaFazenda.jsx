import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import Formulario from "./Formulario";

function Nova() {
    const [erro, setErro] = useState("");
    const navigate = useNavigate();
    const trataEnviar = (data) => {
    }
    const resposta = adicionar(data);
    if (resposta.sucesso) {
        navigate("/");
     } else {
        setErro(resposta.mensagem);
     }
         
    return (
      <>
      <h1>Página não encontrada!!</h1>
      <Cabecalho />
<Conteudo>
<h2>Nova Fazenda</h2>
<Formulario trataEnviar={trataEnviar} valores={{}} />
{erro && <p>{erro}</p>}
</Conteudo>
      
      </>
    );
  }
  
  export default Nova;
  