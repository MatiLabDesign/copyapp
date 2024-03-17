import React from 'react'
import './Card.css'
import imagen from './../../../../../assets/pp1.webp'

export default function Card() {
    return (
    <div class="card">
        <div class="titulo">
            <h2>Paleta 3e</h2>
        </div>
        <div class="card-img">
            <img className='imagen' src={imagen}/>
        </div>
        <div class="card-text">
            <p>Esta paleta es ideal para comenzar con toda actividad de tenis de mesa. Desde principiante hasta intermedio</p>
        </div>
        <div class="card-boton">
            <button>Comprar ahora</button>
        </div>
    </div>
    )
}
