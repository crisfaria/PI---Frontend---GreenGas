import "./Rodape.css";

function Rodape() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content">
          <div className="branding">
            <p className="copyright">
              &copy; {new Date().getFullYear()} Biodigestor
            </p>
            <p className="rights">Todos os direitos reservados.</p>
          </div>

          <div className="developer">
            <span>Desenvolvido por </span>
            <div className="developer-info">
              <img
                src="/imagem/logo_for_a_company_with_the_letters_CRIS__1_-removebg-preview.png"
                alt="Logo da Empresa"
                className="icon"
              />
              <span>C.R.I.S</span>
            </div>
          </div>

          <a href="mailto:crisdevops@exemplo.com" className="contact">
            <span>crisdevops@leandrofaria.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Rodape;
