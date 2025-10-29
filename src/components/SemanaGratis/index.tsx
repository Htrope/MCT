
import "./Semana.css";

export default function Semana() {
  return (
    <section className="semana-gratis"style={{ backgroundColor: "#fff"  }}>
      <div className="conteudo"style={{ backgroundColor: "#fff"  }}>
        <h1 className="titulo">SEMANA <span>TESTE</span> </h1>
        <div className="linha"></div>
        <p className="texto">
          Ainda <span>não tem certeza?</span> Então faça <span>uma semana
          de curso grátis</span>, sem compromisso.
        </p>
        <button className="botao">Tenha sua semana grátis</button>
      </div>
   
    </section>
  );
}
