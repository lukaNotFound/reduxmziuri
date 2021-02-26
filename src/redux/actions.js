import {ADD_TODOS} from "./constants";

export const AddTodos = (value) => async dispatch =>{
   dispatch({
       type: ADD_TODOS,
       payload: value
   })
} 
