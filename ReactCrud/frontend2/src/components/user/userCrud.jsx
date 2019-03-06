import React from 'react'
import axios from 'axios'
import { Main } from '../template'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir !'
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: '' },
    list: []
}

class UserCrud extends React.Component {

    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            console.log(resp.data)
            this.setState({ list: resp.data })
        })
    }

    clear = () => (
        this.setState({ user: initialState.user })
    )

    getUpdateList = (user, add = true) => {
        const list = this.state.list.filter(u => u.id !== user.id)
        if (add) list.unshift(user)
        return list
    }

    save = () => {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user).then(resp => {
            const list = this.getUpdateList(resp.data)
            this.setState({ user: initialState.user, list })
        })
    }

    updateField = (event) => {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    load = (user) => {
        this.setState({ user })
    }

    remove = (user) => {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdateList(user, false)
            this.setState({ list })
        })
    }

    renderForm = () => {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" className="form-control"
                                name="name" value={this.state.user.name}
                                onChange={(e) => this.updateField(e)}
                                placeholder="Digite o nome ..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control"
                                name="email" value={this.state.user.email}
                                onChange={(e) => this.updateField(e)}
                                placeholder="Digite o Email ..." />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={(e) => this.save(e)}>Salvar</button>
                        <button className="btn btn-secondary ml-2" onClick={(e) => this.clear(e)}>Cancelar</button>
                    </div>
                </div>
            </div>
        )
    }

    renderTable = () => {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows = () => {
        return this.state.list.map(user =>
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <button className="btn btn-warning" onClick={() => this.load(user)}>
                        <i className="fas fa-edit"></i>
                    </button>
                    <button className="btn btn-danger ml-2" onClick={() => this.remove(user)}>
                        <i className="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        )
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}

export default UserCrud
