import {  connect } from "react-redux"
//import { ACTION_TYPE } from "../../redux/reducer"
import Page from "./Page";


function mapStateToProps(state, ownProps){
    const todoLists = state;
    return{
        todoLists,
    }
}

// function mapDispatchToProps(dispatch){
//     return {
//         editTodo: (newList) => dispatch({type: ACTION_TYPE.EDIT_TODO, payload: newList}),
//         addTodo: (newTodo) => dispatch({type: ACTION_TYPE.ADD_TODO, payload: newTodo}),
//         setTodo: (newList) => dispatch({type: ACTION_TYPE.SET_TODO_TODO, payload: newList}),
//     }
// }

const PageContainer = connect(mapStateToProps)(Page);

export default PageContainer;