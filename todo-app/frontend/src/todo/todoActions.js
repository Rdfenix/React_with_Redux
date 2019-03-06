import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {

    return (dispatch, getState) => {
        const description = getState().todo.description
        //regex do node restiful
        const searchDescription = description ? `&description__regex=/${description}/` : '' 
        const request = axios.get(`${URL}?sort=-createdAt${searchDescription}`)
            .then(response => dispatch({ type: 'TODO_SEARCHED', payload: response.data }))
    }
}

/*export const add = (description) => {
    const request = axios.post(URL, { description })
    return [ { type: 'TODO_ADDED', payload: request }, search() ]
} -- metodo antigo*/

export const add = (description) => {
    return dispatch => {
        axios.post(URL, {description})
            .then(response => dispatch(clear()))
            .then(response => dispatch(search()))
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(response => dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(response => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(response => dispatch(search()))
    }
}

export const clear = () => {
    return [{ type: 'TODO_CLEAR' }, search()]
}