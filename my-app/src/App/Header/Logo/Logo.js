import React from 'react'


import '../Logo/logo.css'
import logo from '../../../common/img/logo.png'

const Logo = () => {
    return (
        <a className="logo" href="#">
            <img className="logo__img" src={logo} alt="logo-image"/>
        </a>
    )
}

export default Logo