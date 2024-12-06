import "./FormCadastro.css";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function FormCadastro() {
  const [isLoading, setIsLoading] = useState(false);
  const { cadastro, error } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsLoading(true);
    const success = await cadastro(data);
    if (success) {
      alert("Cadastro realizado com sucesso!");
      navigate("/perfil");
    } else {
      setIsLoading(false);
    }
  };

  const senhaInformada = watch("senha");

  return (
    <div className="conteudoCadastro">
      <div className="formContainerCadastro">
        <form className="formCadastro" onSubmit={handleSubmit(onSubmit)}>
          <h1>Green Gas</h1>

          <label className="label">Nome Completo:</label>
          <input
            type="text"
            placeholder="Fulano da Silva Sauro"
            {...register("nome", { required: true })}
          />
          {errors.nome && (
            <span className="erroValidacao">
              Por favor insira seu nome completo.
            </span>
          )}
          <label className="label">Email:</label>
          <input
            type="email"
            placeholder="fulano@email.com"
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+$/,
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <span className="erroValidacao">Por favor insira seu email.</span>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <span className="erroValidacao">
              Por favor insira um email válido.
            </span>
          )}
          <label className="label">Data de Nascimento:</label>
          <input
            type="date"
            placeholder="31/02/1900"
            {...register("dataNascimento", { required: true })}
          />
          {errors.dataNascimento && (
            <span className="erroValidacao">
              Por favor insira sua data de nascimento.
            </span>
          )}
          <label className="label">Defina sua Senha:</label>
          <input
            type="password"
            placeholder="Gg123@45"
            {...register("senha", {
              required: true,
              pattern:
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i,
            })}
          />
          {errors.senha && errors.senha.type === "required" && (
            <span className="erroValidacao">Por favor defina uma senha.</span>
          )}
          {errors.senha && errors.senha.type === "pattern" && (
            <span className="erroValidacao">
              Sua senha deve conter no mínimo 8 caracteres, sendo pelo menos uma
              maiúscula, uma minúscula, um dígito e um caracter especial.
            </span>
          )}
          <label className="label">Confirme sua Senha:</label>
          <input
            type="password"
            placeholder="Gg123@45"
            {...register("senhaConfirmacao", {
              required: true,
              validate: (val) => {
                if (senhaInformada != val) {
                  return "A senha digitada não confere.";
                }
              },
            })}
          />
          {errors.senhaConfirmacao && (
            <span className="erroValidacao">
              A senha informada não confere.
            </span>
          )}

          <input
            type="submit"
            value={isLoading ? "Carregando..." : "Cadastre-se"}
            disabled={isLoading}
          />
          {error && <p>{error}</p>}

          <hr />

          <p
            className="termos"
            onClick={() =>
              alert("Prof, em breve nossas políticas e termos! :D")
            }
          >
            Ao se cadastrar, você concorda com nossos Termos, Política de
            Privacidade e Política de Cookies.
          </p>
        </form>
      </div>
      <div className="linkContainerCadastro">
        <Link to="/login">
          <p className="cadastro">Já tem conta? Conecte-se!</p>
        </Link>
      </div>
    </div>
  );
}

export default FormCadastro;
