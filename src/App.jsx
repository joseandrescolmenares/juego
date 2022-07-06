import preguntas from "./Preguntas.js";
import { useState, useEffect } from "react";

function App() {
  const [preguntasActual, setPreguntasActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [final, setFinal] = useState(false);

   function handle(isCorrect, e){
    if (isCorrect) setPuntuacion(puntuacion + 1);

    e.target.classList.add(isCorrect ? "correct" : "incorrect");
   
   setTimeout(() =>{
    e.target.classList.remove(isCorrect ? "correct" : "incorrect");
   },1000)



  if (preguntasActual === preguntas.length - 1) {
    setFinal(true);
  } else {
    setTimeout(()=>{
      setPreguntasActual(preguntasActual + 1);
  
    },1000)
    
  }


  
  };

  if (final)
    return (
      <main className='app'>
        <div className='juego-terminado'>
          <span>
            juego terminado obtuviste {puntuacion} de {preguntas.length}
          </span>
        </div>
      </main>
    );

  return (
    <main className="app">
      <div className="lado-izquierdo">
        <div className="numero-Pregunta">
          <span>Pregunta {preguntasActual + 1}</span> /{preguntas.length}
        </div>
        <div className="titulo-pregunta">
          {preguntas[preguntasActual].titulo}
        </div>
      </div>
      <div className="lado-derecho">
        {preguntas[preguntasActual].opciones.map((r) => (
          <button  onClick={(e) => handle(r.isCorrect, e)}>
            {r.textoRespuesta}
          </button>
        ))}
      </div>
    </main>
  );
}

export default App;
