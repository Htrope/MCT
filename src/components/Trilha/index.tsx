import "./styles.css";

export default function Index() {
  return (
    <>
      <div
        className="jornada-wrapper"
        style={{ backgroundColor: "#fff" }}
      >
        <section
          className="jornada"
          style={{ backgroundColor: "#fff" }}
        >
          <div
            className="container-jornada"
            style={{ backgroundColor: "#fff" }}
          >
            <h2 className="titulo-jornada">Como será a sua jornada</h2>

            {/* SPRINT */}
            <div
              className="linha-jornada"
              style={{ backgroundColor: "#fff" }}
            >
              <div
                className="icone-bolinha"
                style={{ backgroundColor: "#fff" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="#ff4d00"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>

              <div
                className="bloco-jornada"
                style={{ backgroundColor: "#fff" }}
              >
                <h3 className="subtitulo-jornada">SPRINT</h3>
                <p className="texto-jornada">
                  Assim como em uma corrida, as sprints do RD vão direcionar seu
                  foco a um comportamento específico para melhorá-lo a cada aula
                  assistida.
                </p>
              </div>
            </div>

            {/* POLIMENTO */}
            <div
              className="linha-jornada"
              style={{ backgroundColor: "#fff" }}
            >
              <div
                className="icone-bolinha"
                style={{ backgroundColor: "#fff" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="#ff4d00"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              </div>

              <div
                className="bloco-jornada"
                style={{ backgroundColor: "#fff" }}
              >
                <h3 className="subtitulo-jornada">POLIMENTO</h3>
                <p className="texto-jornada">
                  Ao passar por uma sprint e ajustar seu sono, um dos nossos
                  pilares, você entra na fase de polimento para ter um
                  “descanso” antes de dar o próximo passo.
                </p>
              </div>
            </div>

            {/* PONTUAÇÃO */}
            <div
              className="linha-jornada"
              style={{ backgroundColor: "#fff" }}
            >
              <div
                className="icone-bolinha"
                style={{ backgroundColor: "#fff" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="#ff4d00"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <polygon points="12 2 15 10 23 10 17 14 19 22 12 17 5 22 7 14 1 10 9 10 12 2" />
                </svg>
              </div>

              <div
                className="bloco-jornada"
                style={{ backgroundColor: "#fff" }}
              >
                <h3 className="subtitulo-jornada">PONTUAÇÃO</h3>
                <p className="texto-jornada">
                  Você ganhará pontos que mostrarão seu progresso na construção
                  de bons hábitos.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      
    </>
  );
}
