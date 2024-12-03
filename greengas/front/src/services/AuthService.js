import axios from "axios";

const url = import.meta.env.VITE_API_URL;

function autenticar() {
  return axios
    .post(`${url}/login`, { email: usuario.email, password: usuario.senha })
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
      if (error.response) {
        return { sucesso: false, mensagem: error.response.data };
      } else {
        return { sucesso: false, mensagem: "Ocorreu um erro!" };
      }
    });
}

function cadastrar() {
  return axios
    .post(`${url}/register`, { email: usuario.email, password: usuario.senha })
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
      if (error.response) {
        return { sucesso: false, mensagem: error.response.data };
      } else {
        return { sucesso: false, mensagem: "Ocorreu um erro!" };
      }
    });
}

function atualizar() {
  return axios
    .put(`${url}/users/${usuario.id}`, {
      email: usuario.email,
      password: usuario.senha,
    })
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
      if (error.response) {
        return { sucesso: false, mensagem: error.response.data };
      } else {
        return { sucesso: false, mensagem: "Ocorreu um erro!" };
      }
    });
}

export { autenticar, cadastrar, atualizar };
