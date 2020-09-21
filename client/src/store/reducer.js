const initState = {
    lists: []
}

const mainReducer = (state = initState, action) => {
    switch(action.type) {
        case "ADD_HISTORY": 
            return {
                ...state, lists: state.lists.concat(action.payload)
            }
        default: 
            return state
    }
}

export default mainReducer