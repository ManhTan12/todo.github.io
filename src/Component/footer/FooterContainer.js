import {  connect } from "react-redux"
//import { ACTION_TYPE } from "../../redux/reducer"
import Footer from "./Footer";


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

const FooterContainer = connect(mapStateToProps)(Footer);

export default FooterContainer;