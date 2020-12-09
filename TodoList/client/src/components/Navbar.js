import React from 'react'
import {Link} from 'react-router-dom'
import Logo from './logo.png'
import './Navbar.css'

export default function Nav({setIsLogin}) {

    return (
        <header>
            <div className="logo">
            <img className="image" src={Logo} alt="logo"></img>
                <h2 className="prodpod">PRODPOD</h2>
            
                </div>
        </header>
    )
}
