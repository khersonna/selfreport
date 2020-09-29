import React from 'react'

import './header.css'

import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import UserAccount from './UserAccount/UserAccount'
import Search from '../Header/Search/Search'


const Header =() =>{
    return(
        <header className="header">
                <div className="container">
                    <div className="header__inner">
                        <Logo/>
                        <Menu/>
                        <Search/>
                        <UserAccount/>
                    </div>
                </div>  
        </header>

    )
}
export default Header