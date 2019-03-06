export function inc() {
    return { type: 'INC' }
}

export function dec() {
    return { type: 'DEC' }
}

//RECEBE O EVENTO DE MUDANÇA
export function stepChange(e) {
    return {
        type: 'STEP_CHANGED',
        payload: e.target.value
    }
}