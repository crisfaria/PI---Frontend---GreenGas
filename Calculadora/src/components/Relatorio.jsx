import React from "react";
import { useHistorico } from "../components/HistoricoCotext";
import "./Relatorio.css";

function Relatorio() {
  const { historico } = useHistorico();

  return (
    <div className="max-w-4xl mx-auto main-container">
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
          {historico.map((entry, index) => (
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
  );
}

export default Relatorio;
