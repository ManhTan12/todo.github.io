import {  connect } from "react-redux"
import { createSelector } from "reselect";
//import { ACTION_TYPE } from "../../redux/reducer"
import App from "./App"

function mapStateToProps(state, ownProps){
    const todoListsSelector = state;
    return{
        todoListsSelector,
        getActive : getActive(todoListsSelector),
        getComplete: getComplete(todoListsSelector),
    }
}

const getToDoList =(state) => state;
// const getFilter =(state) => state;

const getActive = createSelector(getToDoList, (state)=> {
    debugger;
    const activeTodo =state.filter((todo) =>{
        return todo.isComplete === true;
    });
    return activeTodo;
});

const getComplete = createSelector(getToDoList, (state) =>{
    const completeTodo =state.filter((todo) =>{
        return todo.isComplete === false;
    });
    return completeTodo;
});

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;