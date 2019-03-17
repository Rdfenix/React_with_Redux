const INITIAL_STATE = {
    selected: ''
}

const TabReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TAB_SELECTED':
            return {
                selected: action.payload
            }
        default:
            return state
    }
}

export {
    TabReducer
}