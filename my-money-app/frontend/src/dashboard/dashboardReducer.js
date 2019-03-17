const INITIAL_STATE = {
    summary: {
        credit: 0,
        debt: 0
    }
}

const dashboard = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'BILLING_SUMMARY_FETCH':
            return {
                ...state,
                summary: action.payload.data
            }
        default:
            return state
    }
}

export default dashboard