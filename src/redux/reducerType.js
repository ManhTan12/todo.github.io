// const initState ={
//     todoLists: [],
//     
//     currentList:[]
// }

const typeList= '';


export const ACTION_TYPE={
    SET_TYPE_LIST : 'SET_TYPE_LIST'
}

const todoReducerType =(state = typeList, action) => {
    switch(action.type){
        case 'SET_TYPE_LIST' :
            return{
                ...state,
                typeList: action.payload
            }
        default:
            return state;
    }
}



export default todoReducerType;

  