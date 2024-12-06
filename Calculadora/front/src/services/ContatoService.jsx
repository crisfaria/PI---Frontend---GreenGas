import axios from "axios";

const url = import.meta.env.VITE_API_URL;

export const buscarTodas = async () => {
  try {
    const response = await axios.get(`${url}/fazendas`);
    return { sucesso: true, dados: response.data };
  } catch (error) {
    return { sucesso: false, mensagem: "Fazenda não encontrada" };
  }
};

export const filtrar = async (id, dados) => {
  try {
    const response = await axios.put(`${url}/fazendas/${id}`, dados, {
      headers: { "Content-Type": "application/json" },
    });
    return { sucesso: true, dados: response.data };
  } catch (error) {
    return { sucesso: false, mensagem: "Fazenda não encontrada." };
  }
};

export const remover = async (id) => {
  try {
    const response = await axios.delete(`${url}/fazendas/${id}`);
    return { sucesso: true, dados: response.data };
  } catch (error) {
    return { sucesso: false, mensagem: "Erro ao remover fazenda." };
  }
};

export default {
  buscarTodas,
  filtrar,
  remover,
};