export const addExpense = (dataExpense) => {
    return {
        type: 'ADD_HISTORY',
        payload: {...dataExpense, date: new Date()},
    }
}

export const addIncome = (dataIncome) => {
    return {
        type: 'ADD_HISTORY',
        payload:  {...dataIncome, date: new Date()},
    }
}