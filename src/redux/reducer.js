const initState ={
    todoLists: [],
    typeList: '',
    currentList:[]
}

const todoReducer =(state = initState, action) => {
    switch(action.type){
        case 'ADD_TODO' :
            return{
                ...state,
                todoLists: [...state.todoLists, action.payload]
            }
        case 'SET_TODO': 
            return {
                ...state,
                todoLists: action.payload
            }
        case 'UPDATE_TYPE_LIST':
            return {
                ...state,
                typeList: action.payload
            }
        case 'DELETE_TODO':
            return{
                ...state,
                todoLists: action.payload
            }
        default:
            return state;
    }
}

export default todoReducer;

// // src/reducer.js
// const initialState = {
//     todos: []
//   };
  
//   const todoReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'ADD_TODO':
//         return {
//           ...state,
//           todos: [...state.todos, action.payload]
//         };
//       case 'DELETE_TODO':
//         return {
//           ...state,
//           todos: state.todos.filter((todo) => todo.id !== action.payload)
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default todoReducer;
  