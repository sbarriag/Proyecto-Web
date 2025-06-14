import "../assets/styles/Home.css"

export default function Home() {
    return (
      // <section>
      //   <h1>Bienvenid@ a Squeakquel</h1>
      //   <p>Explora las instrucciones, conoce al equipo y comienza tu partida.</p>
      // </section>
      <div className="container">
        <header>
          <h1>Tierra de Aventuras</h1>
          <p className="tagline">¡Juega Ya!</p>
        </header>

        <section className="game-description">
          <h2>Sobre el juego</h2>
          <p>
            Tierra de Aventuras es un juego multijugador donde debes llegar a la meta antes que tu oponente usando poderes y estrategias
          </p>
          <div className="game-features">
            <div className="feature">
              <span className="feature-icon">💥</span>
              <h3>Poderes</h3>
            </div>
            <div className="feature">
              <span className="feature-icon">♟️</span>
              <h3>Estrategia</h3>
            </div>
            <div className="feature">
              <span className="feature-icon">🎲</span>
              <h3>Factor Suerte</h3>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <h2>Lo que dicen nuestros jugadores</h2>
          <div className="testimonial">
            <p>"Se ve que es un juego muy bien hecho, le va a ir bien"</p>
            <span className="testimonial-author">- Arturo Vidal</span>
          </div>
        </section>

        <section className="cta">
          <div className="buttons">
            <a href="/login" className="button">Iniciar Sesión</a>
            <a href="/register" className="button">Registrarse</a>
          </div>
        </section>
      </div>
    )
  }
  