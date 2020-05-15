import { createStore} from 'redux';
//const redux = require('redux');
//const createStore = redux.createStore;

//initial state
const initState = {
    count: 5,
    message: "Hello Redux"
}

//reducer
const reducer = (currentState=initState, action) => {

    //return the updated State
    if(action.type === "INC_CTR"){
        return {
            ...currentState,
            count: currentState.count + 1
        }
    }
    if(action.type === "DECR_CTR"){
        return {
            ...currentState,
            count: currentState.count - 1
        }
    }
    if(action.type === "SET_CTR"){
        return {
            ...currentState,
            count: action.value
        }
    }

    return currentState;
}

//store

export const store = createStore(reducer);