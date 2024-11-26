import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar o hook para navegação
import axios from "axios";
import "./Resultados.css"; // Arquivo CSS para estilização

function Calculations() {
  const [calculations, setCalculations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate(); // Inicializando o hook de navegação

  useEffect(() => {
    const fetchCalculations = async () => {
      try {
        const response = await axios.get("http://localhost:3001/calculations");
        setCalculations(response.data);
      } catch (error) {
        console.error("Erro ao buscar os cálculos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCalculations();
  }, []);

  return (
    <div className="calculations-container">
      <h1 className="text-2xl font-bold text-green-700 mb-6">Resultados dos Cálculos</h1>
      {isLoading ? (
        <p>Carregando os resultados...</p>
      ) : calculations.length === 0 ? (
        <p>Nenhum cálculo encontrado.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-md">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Data</th>
                <th className="px-4 py-3 text-left">Quantidade de Gado</th>
                <th className="px-4 py-3 text-left">Resultados</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {calculations.map((calc, index) => (
                <tr key={index} className="hover:bg-green-50">
                  <td className="px-4 py-3 font-medium text-gray-700">
                    {new Date(calc.date).toLocaleString("pt-BR")}
                  </td>
                  <td className="px-4 py-3">{calc.numCattle}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => alert(JSON.stringify(calc.results, null, 2))}
                      className="text-green-600 underline"
                    >
                      Ver Detalhes
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="return-button-container">
        <button
          className="return-button"
          onClick={() => navigate("/")} // Navegar para a página principal (ou outra rota)
        >
          Refazer Cálculos
        </button>
      </div>
    </div>
  );
}

export default Calculations;
