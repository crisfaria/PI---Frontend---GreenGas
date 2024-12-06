import './Erro404.css'; 

function Erro404() {
  return (
    <div className="erro-container">
      <div className="text-center">
        <h1>404</h1>
        <p>Página não encontrada!</p>
        <a href="/">Voltar para a página inicial</a> {/* Link para a página inicial */}
      </div>
    </div>
  );
}

export default Erro404;
