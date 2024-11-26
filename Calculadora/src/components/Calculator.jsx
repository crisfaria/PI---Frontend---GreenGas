import { useState } from "react";
import axios from "axios";
import "./Calculator.css";

function Calculator() {
  const [numCattle, setNumCattle] = useState(0);
  const [results, setResults] = useState(null);
  const [history, setHistory] = useState([]);

  const calculate = async (e) => {
    e.preventDefault();
    if (numCattle > 0) {
      const residuo = numCattle * 10;
      const litrosresiduo = residuo * 2;
      const cargadiaria = litrosresiduo / 1000;

      const VB = cargadiaria * 35;
      const d = Math.cbrt((VB * 4) / 3.14159);
      const h = d + 0.25;
      const dg = d + 0.1;
      const volumebiogas = (residuo * 35) / 1000;
      const hdg = volumebiogas / (3.14159 * Math.pow(dg / 2, 2)) + 0.25;
      const htotal = h + hdg;
      const cg = 1 + hdg + hdg / 2;
      const x = 1.3;
      const dimensaotanques = Math.sqrt(cargadiaria / (2 * x));
      const canodescarga = Math.sqrt(Math.pow(h - 0.6, 2) + Math.pow(1.6, 2));
      const canocarga = canodescarga + 0.2;

      const calculationResults = {
        "Volume do Biodigestor": VB,
        "Altura Total": htotal,
        "Diâmetro da Câmara": d,
        "Altura da Câmara": h,
        "Diâmetro do Gasômetro": dg,
        "Altura do Gasômetro": hdg,
        "Comprimento do Cano Guia": cg,
        "Dimensões dos Tanques": dimensaotanques,
        "Comprimento do Cano de Descarga": canodescarga,
        "Comprimento do Cano de Carga": canocarga,
        "Volume de Biogás Produzido": volumebiogas,
      };

      setResults(calculationResults);
    }
  };

  const saveToHistory = async () => {
    if (results) {
      const entry = {
        date: new Date().toLocaleString(),
        numCattle,
        results,
      };
      setHistory([...history, entry]);

      try {
        await axios.post("http://localhost:5174/Resultados", {
          numCattle,
          results,
          date: new Date().toISOString(),
          userId: 1,
          farmId: 1,
        });
      } catch (error) {
        console.error("Error saving calculation:", error);
      }
    }
  };

  const ResultsTable = () => (
    <div className="overflow-x-auto mt-6">
      <table className="w-full bg-white rounded-lg shadow-md">
        <thead className="bg-green-600 text-white">
          <tr>
            <th className="px-4 py-3 text-left">Medida</th>
            <th className="px-4 py-3 text-left">Valor (m³)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {results &&
            Object.entries(results).map(([key, value]) => (
              <tr key={key} className="hover:bg-green-50">
                <td className="px-4 py-3 font-medium text-gray-700">{key}</td>
                <td className="px-4 py-3">{value.toFixed(2)}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );

  const HistoryTable = () => (
    <div className="overflow-x-auto mt-6">
      <h2 className="text-lg font-bold text-gray-700 mb-4">Histórico</h2>
      <table className="w-full bg-white rounded-lg shadow-md">
        <thead className="bg-gray-700 text-white">
          <tr>
            <th className="px-4 py-3 text-left">Data</th>
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

  return (
    <div className="max-w-4xl mx-auto main-container">
    
      <div className="bg-white rounded-lg shadow-xl p-6 mb-8 centralizado">
      
        <h1 className="text-2xl font-bold text-green-700 mb-6">
          Calculadora de Biodigestor
        </h1>
        <form onSubmit={calculate} className="mb-6 label-container">
        
          <div className="mb-4">
            <label
              htmlFor="numCattle"
              className="block text-sm font-medium text-gray-700 mb-1"
            >Quantidade de Gado
            
            <input
              type="number"
              id="numCattle"
              value={numCattle}
              onChange={(e) => setNumCattle(parseInt(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required/>
              </label>
           

          </div>
          <div className="button-container">
          
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-white-700 transition-colors"
            >
            
              Calcular
            </button>
            
          </div>
        </form>
        {results && (
          <div>
          
            <ResultsTable />
            <div className="button-container">
            
              <button
                onClick={saveToHistory}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-white-700 transition-colors"
              >
              
                Salvar no Histórico
              </button>
              <button
                onClick={() => {
                  setNumCattle(0);
                  setResults(null);
                }}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-white-700 transition-colors"
              >
              
                Refazer Cálculo
              </button>
            </div>
          </div>
        )}
        {history.length > 0 && <HistoryTable />}
      </div>
    </div>
  );
}

export default Calculator;
