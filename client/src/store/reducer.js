const initState = {
    lists: [],
    login: false,
    add: false,
    register: false,
}

const mainReducer = (state = initState, action) => {
    switch(action.type) {
        case "ADD_HISTORY": 
            return {
                ...state, lists: state.lists.concat(action.payload)
            }
        case "FETCH_BUDGETS":
            return {
                ...state, lists: action.payload
            }
        case "STATUS_LOGIN":
            return {
                ...state, login: action.payload
            }
        case "STATUS_REGISTER":
            return {
                ...state, register: action.payload
            }
        case "STATUS_ADD":
        return {
            ...state, add: action.payload
        }
        default: 
            return state
    }
}

export default mainReducer