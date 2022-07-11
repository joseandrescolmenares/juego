import React from "react";
import Juego from "./components/Juego";
import Landing from "./components/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/juego" element={<Juego />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
