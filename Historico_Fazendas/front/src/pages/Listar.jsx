import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { buscarTodas } from "../services/ContatoService";
import { remover } from "../services/ContatoService";
import Listagem from "./Listagem";

function Listar() {
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
    const carregar = async () => {
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
        <Cabecalho />
<Conteudo><h2>Listar Fazendas</h2>
<Listagem itens={fazenda} trataAtualizar={trataAtualizar} trataRemover={trataRemover} />
{erro && <p>{erro}</p>}
</Conteudo>

        </>
    );
}

export default Listar;
