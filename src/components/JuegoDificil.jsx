import preguntas from "../Preguntas";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
function JuegoDificil() {
  const [preguntasActual, setPreguntasActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [final, setFinal] = useState(false);
  const [tiempo, setTiempo] = useState(10);
  const [disibles, setDisibles] = useState(false);
  const [respuesta, setRespuestas] = useState(false);

  function handle(isCorrect, e) {
    if (isCorrect) setPuntuacion(puntuacion + 1);
    setTimeout(() => {
      if (isCorrect) {
        alert("hola");
      } else {
        alert("perdiste");
      }
    }, 700);

    setTimeout(() => {
      e.target.classList.remove(isCorrect ? "correct" : "incorrect");
    }, 1000);

    e.target.classList.add(isCorrect ? "correct" : "incorrect");

    if (preguntasActual === preguntas.length - 1) {
      setFinal(true);
    } else {
      setTimeout(() => {
        setPreguntasActual(preguntasActual + 1);
      }, 1000);
    }
  }
  const  handleRespuesta = () => {
    if (preguntasActual === preguntas.length - 1) {
      window.location.reload("/");
    } else {
      setTimeout(() => {
        setPreguntasActual(preguntasActual + 1);
      }, 1000);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (tiempo > 0) setTiempo(tiempo - 1);
      if (tiempo === 0) setDisibles(true);
    }, 1000);

    return () => clearInterval(interval);
  }, [tiempo]);

  const handleVolve = () => {
    window.location.reload("/");
  };

  if (final)
    return (
      <main className="app">
        <div className="juego-terminado">
          <span>
            juego terminado obtuviste {puntuacion} de {preguntas.length}
          </span>
          <button onClick={handleVolve}>Volver a jugar</button>
          <button
            onClick={() => {
              setFinal(false), setRespuestas(true), setPreguntasActual(0);
            }}
          >
            Ver respuesa
          </button>
        </div>
      </main>
    );

  if (respuesta)
    return (
      <main className="app">
        <div className="lado-izquierdo">
        <div className="numero-pregunta">
          <span>Pregunta {preguntasActual }</span> /{preguntas.length}
        </div>
        <div className="titulo-pregunta">
          {preguntas[preguntasActual].titulo}
        </div>
       <div>{preguntas[preguntasActual].opciones.filter((r) => r.isCorrect )[0].textoRespuesta}</div>
       <button onClick={handleRespuesta}>Continuar</button>
      </div>
      </main>
    );

  return (
    <main className="app">
      <div className="lado-izquierdo">
        <div className="numero-pregunta">
          <span>Pregunta {preguntasActual + 1}</span> /{preguntas.length}
        </div>
        <div className="titulo-pregunta">
          {preguntas[preguntasActual].titulo}
        </div>
        {!disibles ? (
          <span className="toempo-restante">Tiempo Restan: {tiempo}</span>
        ) : (
          <button
            onClick={() => {
              setDisibles(false);
              setTiempo(10);
              setPreguntasActual(preguntasActual + 1);
            }}
          >
            {preguntasActual === preguntas.length -1? "Volver a jugar" : "Siguiente"}
          </button>
        )}
      </div>
      <div className="lado-derecho">
        {preguntas[preguntasActual].opciones.map((r) => (
          <button disabled={disibles} onClick={(e) => handle(r.isCorrect, e)}>
            {r.textoRespuesta}
          </button>
        ))}
      </div>
      <Link to='/'><button className='volver'>Volver al menu</button></Link>
    </main>
  );
}

export default JuegoDificil;