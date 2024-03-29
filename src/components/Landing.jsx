import React,{useState, useEffect} from 'react'
import s from './css/Landing.module.css'
import {Link} from 'react-router-dom'
import ReactHowler  from 'react-howler'
import audio from './audio/gta-san-andreas.mp3'

const Landing = () => {

const [repro, setRepro] = useState(true)




return ( 
 <>
   
    <ReactHowler src={audio} playing={repro}/>
    <div className={s.card}>
        <div className={s.div}>
            <h1 className={s.h1}>Welcome to my game</h1>
            <div className={s.boton}> 
            <Link className='Link' to='/juego'><button className={s.element}>Easy</button></Link>
            <Link className='Link' to='/juegoMedio'><button className={s.element}>Medium</button></Link>
            <Link className='Link' to='/juegoDificil'><button className={s.element}>Hard</button></Link>
            </div>
            <button onClick={()=> setRepro(!repro)} className={s.img}><img className={s.musi} src="https://img.icons8.com/arcade/344/experimental-music-arcade.png" alt="img"/></button>
        </div>
        
    </div>
    
 </>
)
}


export default Landing