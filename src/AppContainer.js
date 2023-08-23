import {  connect } from "react-redux"
import axios from "axios";
import { ACTION_TYPE } from "./redux/reducer";
import App from "./App"
import { fetchTodos } from "./redux/api";

function mapStateToProps(state, ownProps){
    return{
        todoLists: state,
    }
}

function mapDispatchToProps(dispatch) {
    return {
      fetchTodos: (todos) => dispatch({ type: ACTION_TYPE.FETCH_TODOS_SUCCESS, payload: todos }),
    };
  }

const AppContainer = connect(mapStateToProps,mapDispatchToProps)(App);

export default AppContainer;