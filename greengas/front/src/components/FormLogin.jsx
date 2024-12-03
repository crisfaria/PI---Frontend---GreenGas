import "./FormLogin.css";
import { useForm } from "react-hook-form";

function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    alert(JSON.stringify(data));
    await fetch("meubackend/caminho-do-endpoint", {
      body: JSON.stringify(data),
    });
  };

  return (
    <div className="conteudoLogin">
      <div className="formContainer">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Green Gas</h1>

          <label className="label">Email:</label>
          <input
            type="text"
            placeholder="fulano@email.com"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="erroValidacao">Por favor insira seu email.</span>
          )}
          <label className="label">Senha:</label>
          <input
            type="password"
            placeholder="Gg123@45"
            {...register("senha", { required: true })}
          />
          {errors.senha && (
            <span className="erroValidacao">Por favor insira sua senha.</span>
          )}

          <input type="submit" value={"Entrar"} />

          <hr />

          <p
            className="esqueceuSenha"
            onClick={() => alert("Vixi Prof, e agora?! :o")}
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
