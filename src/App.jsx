import { useState } from "react";
import preguntas from "./Preguntas.js";

function App() {
  return (
    <main className="app">
      <div className="lado izquierdo">
        <div className="numero-Preguntas">
          <span>Prewgunta 1</span>/ 5
        </div>
        <div className="titulo-pregunta">como te llamas</div>
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
