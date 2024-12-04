
import { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
import { buscarTodas, atualizar, remover } from "../services/ContatoService";
import "./Relatorio.css";

function Relatorio() {
  const [fazendas, setFazendas] = useState([]);
  const [history, setHistory] = useState([]);
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const carregarFazendas = async () => {
    try {
      const resposta = await buscarTodas();
      if (resposta.sucesso && Array.isArray(resposta.dados)) {
        setFazendas(resposta.dados);
      } else {
        setErro(resposta.mensagem || "Erro ao buscar fazendas.");
      }
    } catch (error) {
      setErro("Erro ao buscar fazendas.");
    }
  };  

  const carregarHistorico = async () => {

    // Simulação para histórico temporário
    const historicoSimulado = [
      {
        date: new Date().toLocaleString(),
        property: "Fazenda Ranco fundo",
        numCattle: 50,
        results: {
          "Volume do Biodigestor": 10.5,
          "Altura Total": 2.5,
        },
      },
    ];
    setHistory(historicoSimulado);
  };

  const trataAtualizar = (id) => {
    navigate(`/editar/${id}`);
  };

  const trataRemover = async (id) => {
    try {
      const resposta = await remover(id);
      if (resposta.sucesso) {
        carregarFazendas();
        setErro("");
      } else {
        setErro(resposta.mensagem);
      }
    } catch (error) {
      setErro("Erro ao remover a fazenda.");
    }
  };

  useEffect(() => {
    carregarFazendas();
    carregarHistorico();
  }, []);

  return (
    <div className="max-w-4xl mx-auto main-container">

      <div className="overflow-x-auto mt-6">
       
        <table className="w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-700 text-white">

          </thead>
          <tbody className="divide-y divide-gray-200">
            {fazendas.map((fazenda, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-700">
                  {fazenda.nome}
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => trataAtualizar(fazenda.id)}
                    className="bg-green-600 text-white px-3 py-1 rounded-lg mr-2"
                  >
                    Atualizar
                  </button>
                  <button
                    onClick={() => trataRemover(fazenda.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded-lg"
                  >
                    Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto mt-6">
        <h3 className="text-lg font-bold text-gray-700 mb-4">Histórico</h3>
        <table className="w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Data</th>
              <th className="px-4 py-3 text-left">Propriedade</th>
              <th className="px-4 py-3 text-left">Quantidade de Gado</th>
              <th className="px-4 py-3 text-left">Resultados</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {history.map((entry, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-700">
                  {entry.date}
                </td>
                <td className="px-4 py-3">{entry.property}</td>
                <td className="px-4 py-3">{entry.numCattle}</td>               
                <td className="px-4 py-3">
                  {Object.entries(entry.results)
                    .map(([key, value]) => `${key}: ${value.toFixed(2)} m³`)
                    .join(", ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {erro && <p className="text-red-500 mt-4">{erro}</p>}
    </div>
  );
}

export default Relatorio;

/*import { useHistorico } from "../context/HistoricoContext";
import { useNavigate } from "react-router-dom";

function Relatorio() {
  const { historico } = useHistorico();

  return (
    <div className="max-w-4xl mx-auto main-container">
      <h2 className="text-2xl font-bold text-green-700 mb-6">Relatório Geral</h2>
      
      <div className="overflow-x-auto mt-6">
        <h3 className="text-lg font-bold text-gray-700 mb-4">Histórico</h3>
        <table className="w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Data</th>
              <th className="px-4 py-3 text-left">Quantidade de Gado</th>
              <th className="px-4 py-3 text-left">Resultados</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {historico.map((entry, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-700">
                  {entry.date}
                </td>
                <td className="px-4 py-3">{entry.numCattle}</td>
                <td className="px-4 py-3">
                  {Object.entries(entry.results)
                    .map(([key, value]) => `${key}: ${value.toFixed(2)} m³`)
                    .join(", ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Calculator() {
  const { adicionarAoHistorico } = useHistorico();
  const navigate = useNavigate();
  const [numCattle, setNumCattle] = useState(0);
  const [results, setResults] = useState(null);

  const saveToHistory = async () => {
    if (results) {
      const entry = {
        date: new Date().toLocaleString(),
        numCattle,
        results,
      };
      adicionarAoHistorico(entry); // Salvar no estado global
      navigate("/relatorio"); // Navegar para a página Relatório
    }
  };
}

export default Relatorio; */