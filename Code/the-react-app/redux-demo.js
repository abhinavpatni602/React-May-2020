console.log("Redux-demo");
//import { createStore} from 'redux';
const redux = require('redux');
const createStore = redux.createStore;

//initial state
const initState = {
    count: 10,
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

const store = createStore(reducer);
console.log(store.getState());

//subscribe
store.subscribe(() => {
    console.log("Subscribe: ", store.getState());
});


//dispatch actions

store.dispatch({type: "INC_CTR"});
//console.log(store.getState());

store.dispatch({type: "DECR_CTR"})
//console.log(store.getState());

store.dispatch({type: "SET_CTR", value: 200});
//console.log(store.getState());
