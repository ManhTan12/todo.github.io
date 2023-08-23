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
    FETCH_TODOS_SUCCESS: 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_API:'FETCH_TODOS_API',
}

const todoReducer =(state = todoLists, action) => {
    switch(action.type){
        case 'ADD_TODO' :    
            const arr = state;
            return [action.payload,...arr]
        case 'SET_TODO': {
            
            const newList = [...state];
            const index = newList.findIndex((value) => value.id === action.payload);
            console.log(index);
            if(index >= 0){
                newList[index] = {
                    ...newList[index],
                    isComplete: !newList[index].isComplete,
                };
                return newList;
            }else{
                return newList;
            }
            
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
        };
        case 'FETCH_TODOS_SUCCESS':
            return action.payload
        default:
            return state;
    }
}



export default todoReducer;

  