import "./FormLogin.css";
import { useForm } from "react-hook-form";

function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="conteudoLogin">
      <div className="formContainer">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Green Gas</h1>
          <input type="text" {...register("email", { required: true })} />
          {errors.email && (
            <span className="erroValidacao">Por favor insira seu email.</span>
          )}
          <input type="password" {...register("senha", { required: true })} />
          {errors.senha && (
            <span className="erroValidacao">Por favor insira sua senha.</span>
          )}

          <input type="submit" value={"Entrar"} />

          <hr />

          <p
            className="esqueceuSenha"
            onClick={() => alert("Puxa Prof, que pena! :(")}
          >
            Esqueceu a senha?
          </p>
        </form>
      </div>
      <div className="linkContainer">
        <p className="cadastro">Não tem conta? Cadastre-se!</p>
      </div>
    </div>
  );
}

export default FormLogin;
