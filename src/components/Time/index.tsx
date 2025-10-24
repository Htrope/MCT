import "./styles.css";
import curso1 from "../../assets/curso1.jpg";
import curso2 from "../../assets/curso2.jpg";
import curso3 from "../../assets/curso3.jpg";
import curso4 from "../../assets/curso4.jpg";
import curso5 from "../../assets/curso5.jpg";

export default function TimeSection() {
  const imagens = [curso1, curso2, curso3, curso4, curso5];

  return (
    <section className="time-section">
      <h2 className="titulo-time">
        Entre para o <span>time</span>
      </h2>

      <div className="pilha-imagens">
        {imagens.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`curso${i + 1}`}
            className="foto-curso"
          />
        ))}
      </div>
    </section>
  );
}
