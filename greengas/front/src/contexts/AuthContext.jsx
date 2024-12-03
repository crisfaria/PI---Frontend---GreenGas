import { createContext, useState } from "react";
import { autenticar, cadastrar, atualizar } from "../services/AuthService";

const AuthContext = createContext();

function AuthProvider(props) {
  const [usuario, setUsuario] = useState({
    id: null,
    email: null,
    logado: false,
    token: null,
  });

  const login = async (usuario) => {
    const resposta = await autenticar(usuario);
    if (resposta.sucesso) {
      setUsuario({
        id: resposta.dados.user.id,
        email: resposta.dados.user.email,
        logado: true,
        token: resposta.dados.accessToken,
      });
      return "";
    } else {
      return resposta.mensagem;
    }
  };

  const logout = async () => {
    setUsuario({ id: null, email: null, logado: false, token: null });
  };

  const cadastro = async (usuario) => {
    const resposta = await cadastrar(usuario);
    if (resposta.sucesso) {
      setUsuario({
        id: resposta.dados.user.id,
        email: resposta.dados.user.email,
        logado: true,
        token: resposta.dados.accessToken,
      });
      return null;
    } else {
      return resposta.mensagem;
    }
  };

  const editar = async (usuario) => {
    const resposta = await atualizar(usuario);
    if (resposta.sucesso) {
      return null;
    } else {
      return resposta.mensagem;
    }
  };

  const contexto = { usuario, login, logout, cadastro, editar };

  return (
    <AuthContext.Provider value={contexto}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
