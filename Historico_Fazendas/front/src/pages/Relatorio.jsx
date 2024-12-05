import { useEffect, useState } from "react";
import { buscarTodas } from "../services/ContatoService";
import "./Relatorio.css";

function Relatorio() {
  const [fazendas, setFazendas] = useState([]);
  const [filteredFazendas, setFilteredFazendas] = useState([]);
  const [history, setHistory] = useState([]);
  const [filteredHistory, setFilteredHistory] = useState([]);
  const [erro, setErro] = useState("");
  const [nenhumResultado, setNenhumResultado] = useState(false); 
  const [filtro, setFiltro] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  const carregarFazendas = async () => {
    try {
      const resposta = await buscarTodas();
      if (resposta.sucesso && Array.isArray(resposta.dados)) {
        setFazendas(resposta.dados);
        setFilteredFazendas(resposta.dados);
      } else {
        setErro(resposta.mensagem || "");
      }
    } catch (error) {
      setErro("Erro ao buscar fazendas.");
    }
  };

  const carregarHistorico = async () => {
    const historicoSimulado = [
      {
        id: 1,
        date: new Date().toLocaleString(),
        property: "Fazenda Rancho Fundo",
        numCattle: 50,
        results: {
          "Volume do Biodigestor": 10.5,
          "Altura Total": 2.5,
          "Diâmetro da Câmara": 1.8,
          "Altura da Câmara": 1.5,
          "Diâmetro do Gasômetro": 1.2,
          "Altura do Gasômetro": 1.2,
          "Comprimento do Cano Guia": 1.5,
          "Dimensões dos Tanques": 2.0,
          "Comprimento do Cano de Descarga": 2.0,
          "Comprimento do Cano de Carga": 2.0,
          "Volume de Biogás Produzido": 3.5
        },
      },
      {
        id: 2,
        date: new Date().toLocaleString(),
        property: "Fazenda Vale Verde",
        numCattle: 30,
        results: {
          "Volume do Biodigestor": 10.5,
          "Altura Total": 2.5,
          "Diâmetro da Câmara": 1.8,
          "Altura da Câmara": 1.5,
          "Diâmetro do Gasômetro": 1.2,
          "Altura do Gasômetro": 1.2,
          "Comprimento do Cano Guia": 1.5,
          "Dimensões dos Tanques": 2.0,
          "Comprimento do Cano de Descarga": 2.0,
          "Comprimento do Cano de Carga": 2.0,
          "Volume de Biogás Produzido": 3.5
        },
      },
      {
        id: 3,
        date: new Date().toLocaleString(),
        property: "Fazenda Sindacta",
        numCattle: 30,
        results: {
          "Volume do Biodigestor": 10.5,
          "Altura Total": 2.5,
          "Diâmetro da Câmara": 1.8,
          "Altura da Câmara": 1.5,
          "Diâmetro do Gasômetro": 1.2,
          "Altura do Gasômetro": 1.2,
          "Comprimento do Cano Guia": 1.5,
          "Dimensões dos Tanques": 2.0,
         "Comprimento do Cano de Descarga": 2.0,
         "Comprimento do Cano de Carga": 2.0,
         "Volume de Biogás Produzido": 3.5
      },
    },
    {
      id: 3,
      date: new Date().toLocaleString(),
      property: "Fazenda Belinha",
      numCattle: 30,
      results: {
        "Volume do Biodigestor": 10.5,
        "Altura Total": 2.5,
        "Diâmetro da Câmara": 1.8,
        "Altura da Câmara": 1.5,
        "Diâmetro do Gasômetro": 1.2,
        "Altura do Gasômetro": 1.2,
        "Comprimento do Cano Guia": 1.5,
        "Dimensões dos Tanques": 2.0,
       "Comprimento do Cano de Descarga": 2.0,
       "Comprimento do Cano de Carga": 2.0,
       "Volume de Biogás Produzido": 3.5
    },
  },

    ];
    setHistory(historicoSimulado);
    setFilteredHistory(historicoSimulado);
  };

  const trataFiltrar = (valor) => {
    setFiltro(valor);
    if (valor.trim() === "") {
      setFilteredHistory(history);
      setNenhumResultado(false);
    } else {
      const filtrado = history.filter((item) => {
        // A filtragem agora será feita em todas as propriedades do histórico
        return (
          item.date.includes(valor) || 
          item.property.toLowerCase().includes(valor.toLowerCase())
        );
      });

      setFilteredHistory(filtrado);
      setNenhumResultado(filtrado.length === 0);
    }
  };

  const handleDeleteSelected = () => {
    // Exibe o alerta de confirmação
    const confirmarExclusao = window.confirm("Deseja excluir fazenda?");
  
    if (confirmarExclusao) {
      // Se o usuário confirmar, continua com a exclusão
      const novoHistorico = history.filter((item) => !selectedItems.includes(item.id));
      setHistory(novoHistorico);
      setFilteredHistory(novoHistorico);
      setSelectedItems([]);
    } else {
      // Caso contrário, não faz nada
      console.log("Exclusão cancelada.");
    }
  };

  const toggleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  useEffect(() => {
    carregarFazendas();
    carregarHistorico();
  }, []);

  return (
    <div className="max-w-4xl mx-auto main-container">
      {/* Div para os campos de filtro no canto superior direito */}
      <div className="absolute top-4 right-4 flex gap-2">
        <input
          type="text"
          value={filtro}
          onChange={(e) => trataFiltrar(e.target.value)}
          placeholder="Pesquisar"
          className="p-2 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Título centralizado */}
      <div className="mt-6 text-center w-full">
        <h3 className="text-lg font-bold text-gray-700">Histórico</h3>
      </div>
      <div className="overflow-x-auto mt-6">
        <table className="w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="px-4 py-3">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setSelectedItems(
                      e.target.checked ? filteredHistory.map((item) => item.id) : []
                    )
                  }
                  checked={selectedItems.length > 0 &&
                    selectedItems.length === filteredHistory.length
                  }
                />
              </th>
              <th className="px-4 py-3 text-left">Data</th>
              <th className="px-4 py-3 text-left">Propriedade</th>
              <th className="px-4 py-3 text-left">Quantidade de Gado</th>
              <th className="px-4 py-3 text-left">Resultados</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredHistory.map((entry) => (
              <tr key={entry.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(entry.id)}
                    onChange={() => toggleSelectItem(entry.id)}
                  />
                </td>
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
        {selectedItems.length > 0 && (
          <div className="mt-4">
            <button
              onClick={handleDeleteSelected}
              className="bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Excluir Selecionados
            </button>
          </div>
        )}
      </div>
      {nenhumResultado && <p className="text-red-500 mt-4">Nenhum resultado encontrado.</p>}
      {erro && <p className="text-red-500 mt-4">{erro}</p>}
    </div>
  );
}

export default Relatorio;
