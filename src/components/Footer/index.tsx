import logo from "../../assets/logoMCT.png";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import gmail from "../../assets/gmail.svg";
import whatsapp from "../../assets/whatsapp.svg";
import "./styles.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Seção do Curso */}
      <div className="footer__section">
        <img src={logo} alt="Logo MCT" className="footer__logo" />
        <h2 className="footer__title">Redes sociais do curso</h2>

        <div className="footer__icons">
          <a
            href="https://github.com/MCTCurso"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub do Curso" className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/mct-curso/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn do Curso" className="icon" />
          </a>
          <a href="mailto:mctcurso@gmail.com">
            <img src={gmail} alt="E-mail do Curso" className="icon" />
          </a>
          <a
            href="https://wa.me/5522999999999"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="WhatsApp do Curso" className="icon" />
          </a>
        </div>

        <p className="footer__address">
          📍 Travessa Mário Fisher, nº 33 — Cabo Frio, RJ
        </p>
      </div>

      {/* Seção do Desenvolvedor */}
      <div className="footer__section footer__developer">
        <h2 className="footer__title">Desenvolvido por</h2>
        <p className="footer__name">Henrique Trope — Desenvolvedor Front-End</p>

        <div className="footer__icons">
          <a
            href="https://github.com/Htrope"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub" className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/henrique-trope/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" className="icon" />
          </a>
          <a href="mailto:htrope@id.uff.br">
            <img src={gmail} alt="E-mail" className="icon" />
          </a>
          <a
            href="https://wa.me/5522974042243"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="WhatsApp" className="icon" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <small className="footer__copy">
        © {new Date().getFullYear()} Henrique Trope — Todos os direitos reservados.
      </small>
    </footer>
  );
}
