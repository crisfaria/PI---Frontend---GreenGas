import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { buscarTodas } from "../services/ContatoService";
import { atualizar } from "../services/ContatoService";
import { remover } from "../services/ContatoService";
import Listagem from "./Listagem";

function HistoricoFazendas() {
    const [fazenda, setFazendas] = useState([]);
    const [erro, setErro] = useState("");
    const navigate = useNavigate();
    const trataAtualizar = (id) => {
    }
    navigate(`/editar/${id}`);
    
    const trataRemover = async (id) => {
        const resposta = await remover(id);
        if (resposta.sucesso) {
            carregar();
            setErro("");
        } else {
            setErro(resposta.mensagem);
        }
    }
    const trataBuscarTodas = async () => {
        const resposta = await buscarTodas();
        if (resposta.sucesso) {
            setFazendas(resposta.dados);
        } else {
            setErro(resposta.mensagem);

        }

    };

    useEffect(() => { carregar() }, [])
    return (
        <>
        <Header />
<Conteudo><h2>Historico Fazendas</h2>
<Listagem itens={fazenda} trataBuscarTodas={trataBuscarTodas} trataAtualizar={trataAtualizar} trataRemover={trataRemover} />
{erro && <p>{erro}</p>}
</Conteudo>

        </>
    );
}

export default HistoricoFazendas;
