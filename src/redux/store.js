import{createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { ADD_TODOS } from "./constants";
const initialState = {
    todos:[]
}

const reducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type){
        case ADD_TODOS: 
        let arr = [];
        arr.push(action.payload);
        let mergedArr = arr.concat(state.todos);
        return {
            ...state,
            todos: [...mergedArr]
        }
        default: return state
    }
}
const store = createStore(reducer, applyMiddleware(thunk))

export default store