import axios from "axios";

const url = import.meta.env.VITE_API_URL;

// Função para buscar todas as fazendas
export const buscarTodas = async () => {
  try {
    const response = await axios.get(`${url}/fazendas`);
    return { sucesso: true, dados: response.data };
  } catch (error) {
    return { sucesso: false, mensagem: "Erro ao buscar fazendas." };
  }
};

// Função para atualizar uma fazenda
export const atualizar = async (id, dados) => {
  try {
    const response = await axios.put(`${url}/fazendas/${id}`, dados, {
      headers: { "Content-Type": "application/json" },
    });
    return { sucesso: true, dados: response.data };
  } catch (error) {
    return { sucesso: false, mensagem: "Erro ao atualizar fazenda." };
  }
};

// Função para remover uma fazenda
export const remover = async (id) => {
  try {
    const response = await axios.delete(`${url}/fazendas/${id}`);
    return { sucesso: true, dados: response.data };
  } catch (error) {
    return { sucesso: false, mensagem: "Erro ao remover fazenda." };
  }
};

// Exportação de múltiplas funções
export default {
  buscarTodas,
  atualizar,
  remover,
};
