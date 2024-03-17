import React from 'react'
import './Location.css'

export default function Location() {
    return (
        <div className="ubicacion">
                <button className='roseta-ubicacion'>
                    <div className="roseta">
                    <span className="material-symbols-outlined">
                    location_on
                    </span>
                    </div>
                    <div className="palabras">
                        <div className="palabra1">
                            <span className='texto1'>Enviar a</span>
                            
                        </div>
                        <div className="palabra2">
                        <span className='texto2'>Mendoza</span>
                            
                        </div>
                    </div>
                    
                </button>
            </div>
    )
}
