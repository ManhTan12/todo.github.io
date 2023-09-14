import {  connect } from "react-redux"
import { ACTION_TYPE } from "../../redux/reducer"
import Header from "./Header"
import { addTasks } from "../../sagas/typeAction"


function mapStateToProps(state, ownProps){
    return{
        todoLists: state,
    }
}

function mapDispatchToProps(dispatch){
    return {
        editTodo: (newList) => dispatch({type: ACTION_TYPE.EDIT_TODO, payload: newList}),
        addTodo: (newTodo) => dispatch({type: ACTION_TYPE.ADD_TODO, payload: newTodo}),
        
        addTask : (newTodo) => dispatch(addTasks(newTodo)),
    }
}

const HeaderContainer = connect(mapStateToProps,mapDispatchToProps)(Header);

export default HeaderContainer;