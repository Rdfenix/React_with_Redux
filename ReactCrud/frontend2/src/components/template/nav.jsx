import './nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => (
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <i className="fas fa-home"></i> Ínicio
            </Link>
            <Link to="/users">
                <i className="fas fa-users"></i> Usuarios
            </Link>
        </nav>
    </aside>
)