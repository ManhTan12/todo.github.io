import {  connect } from "react-redux"
import { ACTION_TYPE } from "../../redux/reducer"
import ViewFake from "./ViewFake"
import { deleteTasks } from "../../sagas/typeAction"


function mapStateToProps(state, ownProps){
    return{
        todoLists: state,
    }
}

function mapDispatchToProps(dispatch){
    return {
        editTodo: (newList) => dispatch({type: ACTION_TYPE.EDIT_TODO, payload: newList}),
        setTodo: (newList) => dispatch({type: ACTION_TYPE.SET_TODO, payload: newList}),
        deleteTodo: (newList) => dispatch({type: ACTION_TYPE.DELETE_TODO, payload: newList}),
        deleteTasks: (id) => dispatch(deleteTasks(id))
    }
}

const ViewContainer = connect(mapStateToProps,mapDispatchToProps)(ViewFake);

export default ViewContainer;