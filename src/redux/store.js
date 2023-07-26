// // import { combineReducers, createStore } from "redux";
// import rootReducer from "./reducer";

// // const reducer = combineReducers({
// //   rootReducer
// // })

// // const store = createStore(reducer)
// // export default store

// import { createStore } from "redux";
// // import todoReducer from "./reducers";

// const store = createStore(rootReducer);

// export default store;




import { createStore } from "redux";
import todoReducer from "./reducer";

const store = createStore(todoReducer);

export default store;
