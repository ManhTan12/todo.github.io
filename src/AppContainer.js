import {  connect } from "react-redux"
import { ACTION_TYPE } from "./redux/reducer";
import App from "./App"
import { getTasks } from "./sagas/typeAction";

function mapStateToProps(state, ownProps){
    return{
        todoLists: state,
    }
}

function mapDispatchToProps(dispatch) {
    return {
      fetchTodos: (todos) => dispatch({ type: ACTION_TYPE.FETCH_TODOS_SUCCESS, payload: todos }),
      getTasks: () => dispatch(getTasks()),
    };
  }

const AppContainer = connect(mapStateToProps,mapDispatchToProps)(App);

export default AppContainer;