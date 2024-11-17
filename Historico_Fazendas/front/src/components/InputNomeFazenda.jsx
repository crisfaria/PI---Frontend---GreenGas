function InputNomeFazenda(props) {
    const regras = { 
        required: "O nome da fazenda é obrigatório"
      }
    return (
     <>
     <label htmlFor="nome">Nome Fazenda</label>
     {props.error && <p>{props.error.message}</p>}
     </>
    );
  }

export default InputNomeFazenda;

  