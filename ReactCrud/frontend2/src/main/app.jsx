import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import React from 'react'
import { HashRouter } from 'react-router-dom'

import { Logo, Nav, Footer } from '../components/template'
import Routes from './routes'

export default (props) => (
    <HashRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </HashRouter>
)