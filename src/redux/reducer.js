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
}

const todoReducer =(state = todoLists, action) => {
    switch(action.type){
        case 'ADD_TODO' :
            const arr = state;
            return [...arr, action.payload]
        case 'SET_TODO': {
            return action.payload
        }
        case 'DELETE_TODO':
            
            return action.payload
            
        case 'EDIT_TODO':{
            const newList = [...state];
            const index = newList.findIndex((value) => value.id === action.payload.id);
            newList[index] = {
                ...newList[index],
                content: action.payload.content,
            };
            return newList;
        }
        default:
            return state;
    }
}



export default todoReducer;

  