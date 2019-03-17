import React from 'react'

const HeaderPage = (props) => (
    <header className="main-header">
        <a href="#/" className="logo">
            <span className="logo-mini"><b>My</b> M</span>
            <span className="logo-lg">
                <i className="fas fa-money-bill-alt"></i>
                <b> My</b> Money
            </span>
        </a>
        <nav className="navbar navbar-static-top">
            <a href="" className="sidebar-toggle" data-toggle='offcanvas'></a>
        </nav>
    </header>
)

export default HeaderPage