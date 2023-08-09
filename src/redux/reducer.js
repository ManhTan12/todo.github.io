// const initState ={
//     todoLists: [],
//     typeList: '',
//     currentList:[]
// }

const todoLists = [];


export const ACTION_TYPE={
    ADD_TODO: 'ADD_TODO',
    SET_TODO: 'SET_TODO',
    DELETE_TODO: 'DELETE_TODO',
    EDIT_TODO: 'EDIT_TODO',
    GET_ACTIVE_TODO:'GET_ACTIVE_TODO',
    GET_COMPLETE_TODO:'GET_COMPLETE_TODO',
}

const todoReducer =(state = todoLists, action) => {
    switch(action.type){
        case 'ADD_TODO' :
            debugger;
            const arr = state;
            return [action.payload,...arr]
        case 'SET_TODO': {
            const newList = [...state];
            const index = newList.findIndex((value) => value.id === action.payload);
            newList[index] = {
                ...newList[index],
                isComplete: !newList[index].isComplete,
            };
            return newList;
        }
        case 'DELETE_TODO':
            const newList = [...state];
            return newList.filter((todo) => todo.id !== action.payload);
        case 'EDIT_TODO':{
            const newList = [...state];
            const index = newList.findIndex((value) => value.id === action.payload.id);
            newList[index] = {
                ...newList[index],
                content: action.payload.content,
            };
            return newList;
        }
        case 'GET_COMPLETE_TODO':
            return action.payload
        case 'GET_ACTIVE_TODO':
            return action.payload
        
        default:
            return state;
    }
}



export default todoReducer;

  