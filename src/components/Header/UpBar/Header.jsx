import React from 'react'
import './Header.css'
import Search from './Search/Search'
import Logo from './Logo/Logo'
import Promo from './Promo/Promo'

export function Header(){
    return (
        <div className='flex-container' id='header-container'>
            <Logo/>
            <Search/>
            <Promo/>
        </div>
    )
}