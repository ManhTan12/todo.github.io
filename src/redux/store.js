// // import { combineReducers, createStore } from "redux";
// import rootReducer from "./reducer";


import { createStore, applyMiddleware } from "redux";
import todoReducer from "./reducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../sagas/rootSaga"; 


// Tao saga
const sagaMiddleware = createSagaMiddleware();
// Tao Redux store va ap dung Middleware
const store = createStore(
    todoReducer, 
    applyMiddleware(sagaMiddleware)
  );

//Run saga
sagaMiddleware.run(rootSaga)

export default store;
