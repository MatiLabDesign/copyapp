import React from 'react'
import './Search.css'

export default function Search() {
    return (
        <div className="search">
            <div className="llenar">
                <input placeholder="Buscar productos, marcas y mas..." type="text" />
            </div>
            <div className="boton">
                <i className="fas fa-search"></i>
            </div>
        </div>
    )
}
