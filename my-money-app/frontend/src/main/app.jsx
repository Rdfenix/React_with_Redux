import React from 'react'
import '../common/template/dependencies'
import { Header, SideBar, Footer } from '../common/template'
import EntryRoutes from '../entry'
import Routes from '../routes'

const App = (props) => (
    <EntryRoutes>
        <div className="wrapper">
            <Header />
            <SideBar />
            <div className="content-wrapper">
                <Routes />
            </div>
            <Footer />
        </div>
    </EntryRoutes>
)

export default App