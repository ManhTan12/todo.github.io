import {  connect } from "react-redux"
import { ACTION_TYPE } from "../../redux/reducer"
import ViewFake from "./ViewFake"


function mapStateToProps(state, ownProps){
    return{
        todoLists: state,
    }
}

function mapDispatchToProps(dispatch){
    return {
        editTodo: (newList) => dispatch({type: ACTION_TYPE.EDIT_TODO, payload: newList}),
        addTodo: (newTodo) => dispatch({type: ACTION_TYPE.ADD_TODO, payload: newTodo}),
        setTodo: (newList) => dispatch({type: ACTION_TYPE.SET_TODO, payload: newList}),
        deleteTodo: (newList) => dispatch({type: ACTION_TYPE.DELETE_TODO, payload: newList}),
    }
}

const ViewContainer = connect(mapStateToProps,mapDispatchToProps)(ViewFake);

export default ViewContainer;