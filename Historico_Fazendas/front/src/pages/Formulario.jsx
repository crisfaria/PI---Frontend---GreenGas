import {useForm} from "react-hook-form";
import InputNomeFazenda from "../components/InputNomeFazenda";


function Formulario(props) {
    const {register, handleSubmit, formState: {errors}} = useForm({values: props.valores});
    
    return (
      <form onSubmit={handleSubmit(props.trataEnviar)}>
        <InputNomeFazenda register={register} error={errors.nome} />        
        <button type="submit">Salvar</button>

        
      </form>
    );
  }

export default Formulario;
