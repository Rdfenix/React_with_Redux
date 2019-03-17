import React from 'react'
import '../common/template/dependencies'
import { Header, SideBar, Footer } from '../common/template'
import Routes from '../routes'

const App = (props) => (
    <div className="wrapper">
        <Header />
        <SideBar />
        <div className="content-wrapper">
            <Routes />
        </div>
        <Footer />
    </div>
)

export default App