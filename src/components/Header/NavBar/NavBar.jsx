import React from 'react'
import './NavBar.css'
import Location from './Location/Location'
import MenuM from './MenuM/MenuM'
import MenuF from './MenuF/MenuF'


export function NavBar(){
    return (
        <div className='flex-container' id='navbar-container'>
            <Location/>
            <MenuM/>
            <MenuF/>
        </div>
    )
}