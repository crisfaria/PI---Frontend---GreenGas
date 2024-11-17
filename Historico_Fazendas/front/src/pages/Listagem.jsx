function Listagem(props) {
    return (
        <ul>
            <li>
                <span>Nome Fazenda</span>              
                <span>Ações</span>
            </li>
            {props.itens.map((fazenda, index) => (
                <li key={index}><span>{fazenda.nome}</span>                   
                    <span><button onClick={(e) => props.trataAtualizar(fazenda.id)}> Atualizar
                    </button><button onClick={(e) => props.trataRemover(fazenda.id)}> Remover
                        </button>

                    </span>

                </li>
            ))}       
        </ul>
    );
}

export default Listagem;