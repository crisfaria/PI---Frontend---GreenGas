import axios from "axios";

const url = import.meta.env.VITE_API_URL;

function buscarTodas(fazenda) {
    return axios
      .get(`${url}/${fazenda.id}`, {
      nome: fazenda.nome,      
    }).then((response) => {
        return { sucesso: true, dados: response.data };
      })
      .catch((error) => {
        return { sucesso: false, mensagem: "Ocorreu um Erro!!"};
      });
  }
  
function atualizar(fazenda) {
    return axios
    .put(`${url}/${fazenda.id}`, {
      nome: fazenda.nome,      
    }).then(response => {return {sucesso: true, dados: response.data}})
    .catch(error => {return {sucesso: false, mensagem: "Ocorreu um Erro!!"}
    });
}
  
function remover(fazenda) {
    return axios
      .delete(`${url}/${fazenda.id}`)
      .then((response) => {
        return { sucesso: true, dados: response.data };
      })
      .catch((error) => {
        return { sucesso: false, mensagem: "Ocorreu um Erro!!"};
      });
  }
 
  export { buscarTodas, atualizar, remover };
  