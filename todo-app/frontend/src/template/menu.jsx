import React from 'react'

export default (props) => (
    <nav className="navbar navbar-inverse bg-inverse">
        <div className="container">
            <div className="navbar-header">
                <a href="#" className="navbar-brand"><i className="fa fa-calendar-check-o"></i> TodoApp</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar">
                    <li><a href="#/todos">Tarefas</a></li>
                    <li><a href="#/about">Sobre</a></li>
                </ul>
            </div>
        </div>
    </nav>
)