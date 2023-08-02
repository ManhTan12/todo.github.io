import {  connect } from "react-redux"
import { ACTION_TYPE } from "../../redux/reducer"
import Content from "./Content"


function mapStateToProps(state, ownProps){
    const todoLists = state;
    return{
        todoLists,
    }
}

function mapDispatchToProps(dispatch){
    return {
        
        setTodo: (newList) => dispatch({type: ACTION_TYPE.SET_TODO, payload: newList}),
    }
}

const ContentContainer = connect(mapStateToProps,mapDispatchToProps)(Content);

export default ContentContainer;