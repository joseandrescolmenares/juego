import { useState } from "react";
import preguntas from "./Preguntas.js";
import {useState, useEffect} from "react"

function App() {

  const [preguntas, setPreguntas] = useState(0)
  const [puntuacion, setPuntuacion] = useState(0)
  const [final, setFinal] = useState(false)


  return (
    <main className="app">
      <div className="lado-izquierdo">
        <div className="numero-Pregunta">
          <span>Pregunta {preguntas}</span> de 5
        </div>
        <div className="titulo-pregunta">Como te llamas?</div>
      </div>
      <div className="lado-derecho">
        <button>opcion 1</button>
        <button>opcion 2</button>
        <button>opcion 3</button>
        <button>opcion 4</button>
      </div>
    </main>
  );
}

export default App;
