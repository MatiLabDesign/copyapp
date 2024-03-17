import React from 'react'
import './PrincipalMain.css'
// import Carrusel from './Carrusel/Carrusel'
// import Card from './Cards/Card/Card'
import Cards from './Cards/Cards'
import imagen from './../../../assets/precios.webp'
import CarruselB from './CarruselB/CarruselB'

export function PrincipalMain(){
    return (
        <div className="main">
            {/* <Carrusel/> */}
            <CarruselB/>
            {/* <Card/> */}
            <Cards/>
            <div className="pre">
            <img className="precios" src={imagen} alt="" />
            </div>
        </div>
    )
}