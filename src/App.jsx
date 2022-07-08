import React from "react";
import Juego from './components/Juego'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const App = () => {
 return (
  <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
        {/* <Route path="expenses" element={<Expenses />} /> */}
        <Route path="/juego" element={ <Juego  />} />
      </Routes>
    
  </BrowserRouter>
 
   
  </>
 )
}

export default App;
