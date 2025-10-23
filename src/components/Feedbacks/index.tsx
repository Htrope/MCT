import { useState } from "react";
import "./styles.css";

export default function FeedbackCarousel() {
  const feedbacks = [
    {
      nome: "Lucas Andrade",
      acertos: "43/45 acertos",
      texto:
        "Antes eu travava nas questões mais difíceis de matemática, mas depois das aulas com o Profe tudo ficou claro! A didática é direta, prática e cheia de macetes. No simulado final acertei 43 de 45 questões, e finalmente entendi como raciocinar rápido.",
    },
    {
      nome: "Marina Costa",
      acertos: "44/45 acertos",
      texto:
        "Eu sempre tive dificuldade com funções e geometria espacial. As aulas me ajudaram a visualizar cada passo e entender o porquê das fórmulas. A plataforma é leve, os exercícios são bem explicados e o acompanhamento faz toda diferença.",
    },
    {
      nome: "João Henrique",
      acertos: "42/45 acertos",
      texto:
        "Mesmo sendo de humanas, consegui finalmente pegar gosto por matemática! As explicações são simples, objetivas e com exemplos que realmente caem no ENEM. Recomendo pra qualquer um que quer subir nota rápido sem enrolação.",
    },
  ];

  const [atual, setAtual] = useState(0);

  const proximo = () => setAtual((prev) => (prev + 1) % feedbacks.length);
  const anterior = () =>
    setAtual((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);

  return (
    <section className="carousel" style={{ backgroundColor: "#fff"  }}>
      <h2 className="titulo">
        O QUE FALAM SOBRE AS <span>AULAS</span>
      </h2>

      {/* Desktop: 3 cards fixos */}
      <div className="feedback-desktop" style={{ backgroundColor: "#fff"  }}>
        {feedbacks.map((f, index) => (
          <div className="feedback-card" key={index}style={{ backgroundColor: "#fff"  }}>
            <p className="texto">“{f.texto}”</p>
            <div className="feedback-footer"style={{ backgroundColor: "#fff"  }}>
              <h3>{f.nome}</h3>
              <span className="acertos">{f.acertos}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: carrossel com setas */}
      <div className="feedback-mobile"style={{ backgroundColor: "#fff"  }}>
        <div className="carousel-wrapper"style={{ backgroundColor: "#fff"  }}>
          <button className="seta seta-esquerda" onClick={anterior}>
            ‹
          </button>

          <div className="feedback-card"style={{ backgroundColor: "#fff"  }}>
            <p className="texto">“{feedbacks[atual].texto}”</p>
            <div className="feedback-footer"style={{ backgroundColor: "#fff"  }}>
              <h3>{feedbacks[atual].nome}</h3>
              <span className="acertos">{feedbacks[atual].acertos}</span>
            </div>
          </div>

          <button className="seta seta-direita" onClick={proximo}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

