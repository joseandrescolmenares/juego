import React from 'react'
import s from './css/Landing.module.css'
import {Link} from 'react-router-dom'
const Landing = () => {
return ( 
 <>
    
    <div className={s.card}>
        <div className={s.div}>
            <h1 className={s.h1}>Bienvenidos a mi Juego</h1>
            <div className={s.boton}> 
            <Link to='/juego'><button className={s.element}>easy</button></Link>
            <Link to='/juegoMedio'><button className={s.element}>medium</button></Link>
            <Link to='/juegoDificil'><button className={s.element}>hard</button></Link>
            </div>
        </div>
    </div>
    
 </>
)
}


export default Landing