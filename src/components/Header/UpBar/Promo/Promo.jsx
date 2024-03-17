import React from 'react'
import logo from './../../../../assets/p1.webp'
import './Promo.css'

export default function Promo() {
    return (
        <div className="promo">
            <img className="promo-img" src={logo} alt="logotipo" />
        </div>
    )
}
