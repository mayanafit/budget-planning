import axios from 'axios';

export const addExpense = ({desc, amount}) => {
    return (dispatch) => {
        axios({
            method: 'POST',
            url: 'http://13.229.44.89:7000/budgets',
            headers: {
                access_token: localStorage.access_token
            },
            data: {
                desc,
                amount
            }
        })
        .then(() => {
            dispatch({
                type: 'STATUS_ADD',
                payload: true,
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const addIncome = ({desc, amount}) => {
    return (dispatch) => {
        axios({
            method: 'POST',
            url: 'http://13.229.44.89:7000/budgets',
            headers: {
                access_token: localStorage.access_token
            },
            data: {
                desc,
                amount
            }
        })
        .then(() => {
            dispatch({
                type: 'STATUS_ADD',
                payload: true,
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const fetchBudget = () => {
    return (dispatch) => {
        axios({
            method: 'GET',
            headers: {
                access_token: localStorage.access_token
            },
            url: 'http://13.229.44.89:7000/budgets',
        })
        .then((data) => {
            dispatch({
                type: 'FETCH_BUDGETS',
                payload: data.data,
            })
        })
    }
}

export const setStatus = (stat) => {
    return {
        type: 'STATUS_LOGIN',
        payload: stat,
    }
}

export const setStatusRegister = (stat) => {
    return {
        type: 'STATUS_REGISTER',
        payload: stat,
    }
}


export const setAdd = (stat) => {
    return {
        type: 'STATUS_ADD',
        payload: stat,
    }
}

export const newUser = (user) => {
    return (dispatch) => {
        axios({
            method: 'POST',
            url: 'http://13.229.44.89:7000/users/register',
            data: {
                user
            }
        })
        .then((data) => {
            localStorage.setItem('access_token', data.data.access_token)
            localStorage.setItem('name', data.data.name)
            dispatch({
                type: 'STATUS_REGISTER',
                payload: true,
            })
            dispatch(fetchBudget())
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const loginUser = (user) => {
    return (dispatch) => {
        axios({
            method: 'POST',
            url: 'http://13.229.44.89:7000/users/login',
            data: {
                user
            }
        })
        .then((data) => {
            localStorage.setItem('access_token', data.data.access_token)
            localStorage.setItem('name', data.data.name)
            dispatch({
                type: 'STATUS_LOGIN',
                payload: true,
            })
            dispatch(fetchBudget())
        })
        .catch((err) => {
            console.log(err)
        })
    }
}