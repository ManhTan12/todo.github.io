import { ACTION_TYPE } from "../redux/reducer";
debugger;
export const getTasks = (data) => ({
    type: ACTION_TYPE.GETTASKS,
    payload: data,
})

export const addTasks =(data) => ({
    type: ACTION_TYPE.ADD_TODO_SAGA,
    payload: data,
})

export const deleteTasks =(id) =>({
    type :ACTION_TYPE.DELETE_TODO,
    payload: id,
    
})