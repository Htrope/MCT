import "./styles.css";
import hero from "../../assets/newHeroMCT.png";

export default function Hero() {
  return (
    <>
      {/* ===== HERO PRINCIPAL ===== */}
      <section className="hero">
        <div className="hero-text">
          <h2>
            Entenda <span>como a Matemática cai</span> no ENEM
            <br />
            <br />
            descubra <span>o que mais aparece</span>
            <br />
            <br />
            e conquiste sua <span>nota máxima</span>.
          </h2>
        </div>

        <div className="hero-img">
          <img className="imgHero" src={hero} alt="Herói do site" />
        </div>
      </section>

      {/* ===== BOTÃO CTA ABAIXO ===== */}
      <section
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "60px",
          backgroundColor: "#000",
        }}
      >
        <button
          style={{
            background: "linear-gradient(135deg, #ff7a00 75%, #1a1a1a 40%)",
            color: "#fff",
            fontSize: "1.2rem",
            fontWeight: "bold",
            border: "none",
            borderRadius: "10px",
            padding: "18px 40px",
            cursor: "pointer",
            boxShadow: "0 0 20px rgba(255, 100, 0, 0.35)",
            transition:
              "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
          }}
        >
          Eu quero tirar{" "}
          <span
            style={{
              color: "#ffe0c2",
              fontWeight: 900,
              textShadow: "0 0 12px rgba(255, 130, 50, 0.5)",
            }}
          >
            900+
          </span>{" "}
          em Matemática no ENEM
        </button>
      </section>
    </>
  );
}
