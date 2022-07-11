import React from "react";
import Juego from "./components/Juego";
import Landing from "./components/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JuegoMedio from "./components/juegoMedio";
import JuegoDificil from "./components/JuegoDificil";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/juego" element={<Juego />} />
          <Route path='/juegoMedio' element={<JuegoMedio />} />
          <Route path='/juegoDificil' element={<JuegoDificil />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
