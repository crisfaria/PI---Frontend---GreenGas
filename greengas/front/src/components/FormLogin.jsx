import "./FormLogin.css";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function FormLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { login, error } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    const success = await login(data.email, data.senha);
    if (success) {
      alert("Login realizado com sucesso!");
      navigate("/perfil");
    } else {
      setIsLoading(false);
    }
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

          <input
            type="submit"
            value={isLoading ? "Carregando..." : "Entrar"}
            disabled={isLoading}
          />
          {error && <p>{error}</p>}

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
        <Link to="/cadastro">
          <p className="cadastro">Não tem conta? Cadastre-se!</p>
        </Link>
      </div>
    </div>
  );
}

export default FormLogin;
