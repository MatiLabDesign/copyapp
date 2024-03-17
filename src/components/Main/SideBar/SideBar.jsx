import React from 'react'
import './SideBar.css'

export function SideBar(){
    function ocultar(){
            let sideMenu = document.getElementById("sidebar-container");
            // parrafo.classNameList.remove("miClase"); // Quita la clase actual
            // parrafo.classNameList.add("nuevoEstilo"); // Añade la nueva clase
            // sideMenu.style= "display:none";
            // if(sideMenu.style= "display:block"){
            //     sideMenu.style= "display:block";
            // }else{
            //     sideMenu.style= "display:none";
            // }
            if(sideMenu.style.opacity === 0) {
                sideMenu.style.opacity = 1;
            } else {
                sideMenu.style.opacity = 0;
            }
        
    }


    return (
        <div onClick={ocultar} id="sidebar-container" className='sidebar-container'>
            
        </div>
    )
}