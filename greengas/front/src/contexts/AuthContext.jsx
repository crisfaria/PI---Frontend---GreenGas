import { createContext, useState, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  const url = "http://localhost:3000";

  const login = async (email, senha) => {
    try {
      const response = await axios.post(`${url}/login`, {
        email,
        password: senha,
      });

      const { accessToken, usuario } = response.data;

      setToken(accessToken);
      setUsuario(usuario);
      setError(null);
      return true;
    } catch (err) {
      console.error(err);
      setError("Email ou senha incorretos.");
      return false;
    }
  };

  const cadastro = async (data) => {
    const { nome, email, senha, dataNascimento } = data;

    try {
      const response = await axios.post(`${url}/users`, {
        nome,
        email,
        password: senha,
        dataNascimento,
      });
      if (response.status === 201) {
        setError(null);
        return true;
      }
    } catch (err) {
      console.log(err);
      setError(
        "Um erro ocorreu em nosso servidor. Tente novamente mais tarde."
      );
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ usuario, token, error, login, cadastro }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
