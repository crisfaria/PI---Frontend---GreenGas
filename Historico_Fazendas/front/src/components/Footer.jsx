import React from "react";
import "./Footer.css";
import LogoCompany from "../image/LogoCompany.png"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Biodigestor. Todos os direitos reservados.</p>
        </div>
        <div className="footer-logo">
          <img
            src={LogoCompany}
            alt="Logo da Empresa"
            className="icon"
          />
          <p className="developer-text">Desenvolvido por C.R.I.S</p>
        </div>
        <div className="contact">
          <a href="mailto:crisdevops@exemplo.com" className="contact-email">
            crisdevops@exemplo.com
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;