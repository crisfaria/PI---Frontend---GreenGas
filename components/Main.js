import { useState } from 'react';

const Main = () => {
  const [numCattle, setNumCattle] = useState(0);
  const [results, setResults] = useState(null);

  const calculate = (e) => {
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

      setResults({
        cargadiaria,
        VB,
        htotal,
        d,
        h,
        dg,
        hdg,
        cg,
        dimensaotanques,
        canodescarga,
        canocarga,
        volumebiogas,
      });
    } else {
      setResults(null);
      alert('Não há como dimensionar um biodigestor adequado para sua propriedade!');
    }
  };

  return (
    <main className="bg-green-600">
      <section className="illustration mb-6">
        <img src="PI---Frontend---GreenGas\public\BiodigestorImg.png" alt="Ilustração do Biodigestor" className="mx-auto" />
      </section>
      <aside className="calculator bg-white p-4 rounded shadow-lg">
        <h2 className="text-xl mb-4">Calculadora de Volume</h2>
        <form onSubmit={calculate}>
          <label htmlFor="num-cattle" className="block mb-2">Quantidade de Gado:</label>
          <input
            type="number"
            id="num-cattle"
            name="num-cattle"
            value={numCattle}
            onChange={(e) => setNumCattle(parseInt(e.target.value))}
            className="border p-2 mb-4 w-full"
            required
          />
          <button type="submit" className="bg-green-600 text-white p-2 rounded">Calcular</button>
          <button type="button" onClick={() => setNumCattle(0)} className="bg-gray-400 text-white p-2 ml-4 rounded">Refazer Cálculo</button>
        </form>
        {results && (
          <div className="results mt-6">
            <h3 className="text-lg mb-2 text-red-800">Resultados</h3>
            <ul>
              <li >Volume do Biodigestor: {results.VB.toFixed(2)} m³</li>
              <li>Altura Total do Biodigestor: {results.htotal.toFixed(3)} m</li>
              <li>Diâmetro da Câmara de Biodigestão: {results.d.toFixed(3)} m</li>
              <li>Altura da Câmara de Biodigestão: {results.h.toFixed(3)} m</li>
              <li>Diâmetro do Gasômetro: {results.dg.toFixed(3)} m</li>
              <li>Altura do Gasômetro: {results.hdg.toFixed(3)} m</li>
              <li>Comprimento do Cano Guia: {results.cg.toFixed(3)} m</li>
              <li>Dimensões dos Tanques de Carga e Descarga: {results.dimensaotanques.toFixed(3)} m</li>
              <li>Comprimento do Cano de Descarga: {results.canodescarga.toFixed(3)} m</li>
              <li>Comprimento do Cano de Carga: {results.canocarga.toFixed(3)} m</li>
              <li>Volume de Biogás Produzido: {results.volumebiogas.toFixed(3)} m³</li>
            </ul>
          </div>
        )}
      </aside>
    </main>
  );
};

export default Main;
