import logo from "../../assets/logoMCT.png";
import "./styles.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* ESQUERDA - Logo e "redes sociais" */}
      <div className="footer__section footer__left">
        <img src={logo} alt="Logo MCT" className="footer__logo" />
        <div className="footer__socials">
          <a
            href="https://github.com/Htrope"
            target="_blank"
            rel="noopener noreferrer"
          >
            🐙
          </a>
          <a
            href="https://www.linkedin.com/in/henrique-trope/"
            target="_blank"
            rel="noopener noreferrer"
          >
            💼
          </a>
          <a href="mailto:htrope@id.uff.br">✉️</a>
          <a
            href="https://wa.me/5522974042243"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬
          </a>
        </div>
      </div>

      {/* MEIO - Dados do desenvolvedor */}
      <div className="footer__section footer__center">
        <h2>Desenvolvido por:</h2>
        <p>
          <strong>Henrique Trope</strong> — Desenvolvedor Front-End
        </p>
        <p>
          💻 GitHub:{" "}
          <a
            href="https://github.com/Htrope"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Htrope
          </a>
        </p>
        <p>📧 E-mail: htrope@id.uff.br</p>
        <p>📱 WhatsApp: (22) 97404-2243</p>
        <small>
          © {new Date().getFullYear()} Henrique Trope — Todos os direitos
          reservados.
        </small>
      </div>

      {/* DIREITA - Mapa */}
      <div className="footer__section footer__right">
        <iframe
          title="Mapa do endereço"
          src="https://www.google.com/maps?q=Travessa%20M%C3%A1rio%20Fisher%2033%20Cabo%20Frio&output=embed"
          loading="lazy"
          className="footer__map"
        ></iframe>
        <p className="footer__address">
          📍 Travessa Mário Fisher, nº 33 — Cabo Frio, RJ
        </p>
      </div>
    </footer>
  );
}
