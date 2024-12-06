import { useEffect, useState } from "react";
import { useHistorico } from "../components/HistoricoContext";
import "./Relatorio.css";

function Relatorio() {
  const { historico, adicionarAoHistorico } = useHistorico();
  const [filteredHistory, setFilteredHistory] = useState(historico);
  const [filtro, setFiltro] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [nenhumResultado, setNenhumResultado] = useState(false);

  useEffect(() => {
    setFilteredHistory(historico);
  }, [historico]);

  const trataFiltrar = (valor) => {
    setFiltro(valor);
    if (valor.trim() === "") {
      setFilteredHistory(historico);
      setNenhumResultado(false);
    } else {
      const filtrado = historico.filter((item) =>
        item.date.includes(valor) ||
        item.numCattle.toString().includes(valor) ||
        Object.entries(item.results)
          .map(([key, value]) => `${key}: ${value}`)
          .join(", ")
          .toLowerCase()
          .includes(valor.toLowerCase())
      );
      setFilteredHistory(filtrado);
      setNenhumResultado(filtrado.length === 0);
    }
  };

  const handleDeleteSelected = () => {
    const confirmarExclusao = window.confirm("Deseja excluir os itens selecionados?");
    if (confirmarExclusao) {
      const novoHistorico = historico.filter((item) => !selectedItems.includes(item.id));
      adicionarAoHistorico(novoHistorico);
      setFilteredHistory(novoHistorico);
      setSelectedItems([]);
    }
  };

  const handleDeleteSingle = (id) => {
    const confirmarExclusao = window.confirm("Deseja excluir este item?");
    if (confirmarExclusao) {
      const novoHistorico = historico.filter((item) => item.id !== id);
      adicionarAoHistorico(novoHistorico);
      setFilteredHistory(novoHistorico);
    }
  };

  const toggleSelectItem = (id) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(id)
        ? prevSelectedItems.filter((itemId) => itemId !== id)
        : [...prevSelectedItems, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedItems.length === filteredHistory.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(filteredHistory.map((item) => item.id));
    }
  };

  return (
    <div className="max-w-4xl mx-auto main-container">
      {/* Barra de filtro */}
      <div className="absolute top-4 right-4 flex gap-2">
        <input
          type="text"
          value={filtro}
          onChange={(e) => trataFiltrar(e.target.value)}
          placeholder="Pesquisar"
          className="p-2 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Título */}
      <div className="mt-6 text-center w-full">
        <h3 className="text-lg font-bold text-gray-700">Histórico</h3>
      </div>

      {/* Tabela de histórico */}
      <div className="overflow-x-auto mt-6">
        <table className="w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="px-4 py-3">
                <input
                  type="checkbox"
                  onChange={toggleSelectAll}
                  checked={selectedItems.length > 0 && selectedItems.length === filteredHistory.length}
                />
              </th>
              <th className="px-4 py-3 text-left">Data</th>
              <th className="px-4 py-3 text-left">Quantidade de Gado</th>
              <th className="px-4 py-3 text-left">Resultados</th>
              <th className="px-4 py-3 text-left">Ações</th>
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
                <td className="px-4 py-3 font-medium text-gray-700">{entry.date}</td>
                <td className="px-4 py-3">{entry.numCattle}</td>
                <td className="px-4 py-3">
                  {Object.entries(entry.results)
                    .map(([key, value]) => `${key}: ${value.toFixed(2)} m³`)
                    .join(", ")}
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => handleDeleteSingle(entry.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded-lg"
                  >
                    Excluir
                  </button>
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

      {/* Mensagens de estado */}
      {nenhumResultado && <p className="text-red-500 mt-4">Nenhum resultado encontrado.</p>}
      {filteredHistory.length === 0 && !nenhumResultado && (
        <p className="text-gray-500 mt-4">Nenhum item no histórico.</p>
      )}
    </div>
  );
}

export default Relatorio;
