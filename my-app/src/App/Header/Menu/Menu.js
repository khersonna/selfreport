import React from 'react'

import '../Menu/menu.css'

const Menu = () => {
    return (
        <nav className="header__menu">
            <ul className="menu__list">
                <li className="menu__item"><a href="#" className="menu__link">Dashboard</a></li>
                <li className="menu__item"><a href="#" className="menu__link">Notification</a></li>
                <li className="menu__item"><a href="#" className="menu__link">Settings</a></li>
            </ul>
        </nav>
    )
}

export default Menu