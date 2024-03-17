import React from 'react'
import logo from './../../../../assets/mercado-libre-logo.png'
import './Logo.css'

export default function Logo() {
    return (
        <div className="logotipo">
            <img className='logo' src={logo} alt="logo-mercado" />
        </div>
    )
}


